<template>
  <a-form :model="form.value" label-width="110px" layout="inline">
    <a-row :gutter="12">
      <a-col v-for="item in data" :key="item.key" :span="4">
        <a-form-item v-if="item.type === 'input'" :label="item.label">
          <a-input v-model:value="form[item.key]" style="width: 180px" />
        </a-form-item>
        <a-form-item v-if="item.type === 'select'" :label="item.label">
          <a-select v-model:value="form[item.key]" style="width: 180px">
            <a-select-option v-for="x in item.options" :key="x.value" :value="x.value">
              {{ x.label }}
            </a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :span="4">
        <a-button type="primary" style="margin-right: 14px" @click="onSubmit">
          <template #icon><SearchOutlined /> </template>
          查询
        </a-button>
        <a-button type="primary" style="margin-right: 14px">
          <template #icon><SearchOutlined /> </template>
          添加
        </a-button>
      </a-col>
    </a-row>
  </a-form>
</template>
<script lang="ts">
  /*
   *@description: 公用的searchbar组件，可以传入的类型进行自动生成检索栏
   *@props desc: formList: [
   *   {
   *     label: "活动名称",
   *     prop: "name",
   *     type: "input",
   *     placeholder: "请输入活动名称"
   *   }*
   *   {
   *     label: "活动类型",
   *     prop: "type",
   *     type: "select",
   *     placeholder: "请选择活动类型",
   *     options: [
   *       { label: "全部", value: "122" },
   *       { label: "已触发", value: "111" }
   *     ]
   *   },
   *   {
   *     label: "时间段",
   *     prop: "date",
   *     type: "ranger",
   *     placeholder: "请选择活动时间"
   *   },
   *   {
   *     label: "时间节点",
   *     prop: "dateTime",
   *     type: "date",
   *     placeholder: "请选择活动时间"
   *   }
   * ]
   */
  import { defineComponent, PropType, reactive, unref } from "vue";
  import { SearchOutlined } from "@ant-design/icons-vue";
  import { Formlist } from "./type";
  export default defineComponent({
    name: "Search",
    components: { SearchOutlined },
    props: {
      formList: {
        require: true,
        default: () => [],
        type: Array as PropType<Formlist[]>,
      },
    },
    setup(props) {
      //form
      const form = reactive<{
        [key: string]: string | number | undefined;
      }>({});
      const data: Formlist[] = unref(props).formList;
      //初始化form
      function initForm() {
        data.forEach((x) => {
          if (x.value) {
            form[x.key] = x.value;
          } else {
            form[x.key] = undefined;
          }
        });
      }
      function onSubmit() {
        console.log("submit!", form);
      }

      initForm();
      return {
        onSubmit,
        form,
        data,
      };
    },
  });
</script>
