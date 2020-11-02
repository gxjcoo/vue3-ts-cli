<template>
  <div>{{ getCount }}</div>
  <a-button type="primary" @click="add">
    add
  </a-button>
</template>
<script lang="ts">
  import { defineComponent, computed } from "vue";

  import { demoStore } from "@/store/modules/demo";

  export default defineComponent({
    name: "Redirect",
    setup() {
      const getCount = computed(() => {
        return demoStore.getCount;
      });

      function add() {
        demoStore.setCount(2);
        console.log(getCount);
      }
      return {
        getCount,
        add,
      };
    },
  });
</script>
