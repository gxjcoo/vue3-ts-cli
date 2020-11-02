<template>
  <div class="layout_slide">
    <a-layout-sider v-model:collapsed="collapsed" class="slide">
      <a-menu v-model:selectedKeys="selectedKeys" class="menu" theme="dark" mode="inline">
        <Menu v-for="route in routes" :key="route.path" :item="route" />
      </a-menu>
    </a-layout-sider>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, reactive } from "vue";
  import Menu from "@bus/menu/index.vue";
  import { routes } from "@/router/index";

  export default defineComponent({
    components: {
      Menu,
    },
    setup() {
      const collapsed = ref<boolean>(false);
      const selectedKeys = reactive<string[]>([]);

      return {
        collapsed,
        selectedKeys,
        routes: routes[0].children,
      };
    },
  });
</script>

<style lang="less" scoped>
  @import "index";
  .layout_slide {
    color: #fff;
    .slide {
      overflow: auto;
      position: relative;
      height: calc(100vh - (@header-height + @footer-height));
      left: 0;
      .menu {
        height: 80%;
      }
    }
  }
</style>
