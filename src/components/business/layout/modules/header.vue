<template>
  <div class="layout_header">
    <a-layout-header :style="{ background: '#fff', padding: 0 }">Header</a-layout-header>
  </div>
</template>
<style lang="less" scoped>
  @import "index";
  .layout_header {
    .ant-layout-header {
      height: @header-height;
      background: #fff;
    }
  }
</style>
