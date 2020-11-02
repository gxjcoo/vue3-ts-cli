<template>
  <div class="layout_content">
    <a-layout-content>
      <div class="multi_tabs">
        <Multitabs />
      </div>
      <div class="content">
        <router-view> </router-view>
      </div>
    </a-layout-content>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Multitabs from "../../multitabs/index.vue";
  export default defineComponent({
    components: { Multitabs },
  });
</script>

<style lang="less" scoped>
  @import "index";
  .layout_content {
    width: 100%;
    height: 100%;
    overflow: auto;
    .multi_tabs {
      background: #fff;
      width: 100%;
      height: 40px;
    }
    .content {
      overflow: "initial";
      padding: 14px;
    }
  }
</style>
