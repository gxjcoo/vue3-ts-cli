<template>
  <a-layout class="layout">
    <Header />
    <a-layout>
      <Sider />
      <Content />
    </a-layout>
    <Footer />
  </a-layout>
</template>
<script lang="ts">
  import Footer from "./modules/footer.vue";
  import Sider from "./modules/slide.vue";
  import Header from "./modules/header.vue";
  import Content from "./modules/content.vue";
  import { defineComponent } from "vue";
  export default defineComponent({
    name: "Layout",
    components: { Header, Sider, Footer, Content },

    setup() {},
  });
</script>
<style lang="less">
  .layout {
    height: 100vh;
  }
</style>
