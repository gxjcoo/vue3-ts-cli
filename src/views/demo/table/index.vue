<template>
  <Table :columns="columns">
    <template #action>
      <span>
        <a-button color="geekblue">
          删除
        </a-button>
      </span>
    </template>
    <!-- 使用slot获取单行数据 -->
    <template #operation="{ record }">
      <a-popconfirm title="Sure to delete?" @confirm="onDelete(record.id)">
        <a>edit</a>
      </a-popconfirm>
    </template>
  </Table>
</template>
<script lang="ts">
  import Table from "@com/table/index.vue";
  import { defineComponent, reactive } from "vue";

  export default defineComponent({
    components: { Table },
    setup() {
      const columns = reactive([
        {
          title: "description",
          dataIndex: "description",
        },
        {
          title: "author",
          dataIndex: "author",
        },
        {
          title: "datetime",
          dataIndex: "datetime",
        },
        {
          title: "action",
          key: "action",
          slots: { customRender: "action" },
        },
        {
          title: "operation",
          dataIndex: "operation",
          slots: { customRender: "operation" },
        },
      ]);
      function onDelete(id: number): void {
        alert(id);
      }
      return { onDelete, columns };
    },
  });
</script>
