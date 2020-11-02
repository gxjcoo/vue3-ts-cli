<template>
  <Search :formList="formList" />
</template>
<script lang="ts">
  import Search from "@com/search/index.vue";
  import { Formlist } from "@com/search/type";
  import { defineComponent, ref } from "vue";
  export default defineComponent({
    components: { Search },
    setup() {
      const formList = ref<Formlist[]>([
        {
          label: "活动名称",
          key: "name",
          type: "input",
          placeholder: "请输入活动名称",
        },
        {
          label: "活动类型",
          key: "type",
          type: "select",
          placeholder: "请选择活动类型",
          options: [
            { label: "全部", value: 1 },
            { label: "已触发", value: 2 },
          ],
        },
      ]);
      return {
        formList,
      };
    },
  });
</script>
