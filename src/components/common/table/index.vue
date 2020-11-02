<template>
  <a-table
    :columns="columns"
    :row-key="(record) => record.id"
    :data-source="data"
    :pagination="configRef"
    :loading="loading"
    @change="handleTableChange"
  >
    <!-- 父组件slot -->
    <template v-for="item in Object.keys($slots)" #[item]="data">
      <slot :name="item" v-bind="data" />
    </template>
    <!-- 默认slot -->
  </a-table>
</template>
<script lang="ts">
  import { defineComponent, ref, toRefs, onMounted, computed, unref, PropType } from "vue";
  import { Columns, PaginationProps } from "./types";
  import { getList } from "@/api/table";
  export default defineComponent({
    props: {
      columns: {
        require: true,
        type: Array as PropType<Columns[]>,
        default: () => [],
      },
    },
    setup(props) {
      //请求数据
      const loading = ref(false);
      const data = ref<any>([]);
      function getData() {
        loading.value = true;
        const params = {
          current: Number(unref(getPaginationRef).current) || 1,
          pageSize: Number(unref(getPaginationRef).pageSize) || 20,
        };
        getList(params).then(({ data: result, total }) => {
          data.value = result;
          setPagination({ total: total });
          setTimeout(() => {
            loading.value = false;
          }, 200);
        });
      }

      // 可选的每页显示条数;
      const PAGE_SIZE_OPTIONS = ["10", "20", "50", "100"];
      // 默认显示条数
      const PAGE_SIZE = ~~PAGE_SIZE_OPTIONS[0];
      const configRef = ref({});
      const getPaginationRef = computed(() => {
        return {
          current: 1,
          pageSize: PAGE_SIZE,
          size: "small",
          defaultPageSize: PAGE_SIZE,
          showTotal: (total) => `共 ${total} 条数据`,
          pageSizeOptions: PAGE_SIZE_OPTIONS,
          showQuickJumper: true,
          showSizeChanger: true,
          ...unref(configRef),
        } as PaginationProps;
      });
      function setPagination(info: PaginationProps) {
        configRef.value = {
          ...unref(getPaginationRef),
          ...info,
        };
      }

      function handleTableChange(pagination: PaginationProps) {
        setPagination(pagination);
        getData();
      }
      onMounted(() => {
        getData();
      });
      return {
        handleTableChange,
        loading,
        configRef,
        data,
        ...toRefs(props),
      };
    },
  });
</script>

<style lang="less">
  @import (reference) "~@/assets/style/index.less";
</style>
