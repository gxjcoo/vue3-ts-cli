<template>
  <a-menu-item :key="routeChildren.path" @click="handleClick(routeChildren)">
    <Icon :icon="routeChildren.meta.icon" />
    <span>{{ routeChildren.meta.title }}</span>
  </a-menu-item>
</template>

<script lang="ts">
  import Icon from "@/components/common/icon";
  import { useRouter } from "vue-router";
  import { defineComponent, PropType } from "vue";
   import { tabsStore } from "@/store/modules/tabs";
  import type { AppRouteRecordRaw } from '@/router/types';
  export default defineComponent({
    name: "MenuItem",
    components: { Icon },
    props: {
      routeChildren: {
        type: Object as PropType<AppRouteRecordRaw>,
        default: () => null,
      },
    },
    setup() {
      const { push } = useRouter();
      function handleClick(route: AppRouteRecordRaw): void {
        push(route.path);
        tabsStore.addTab(route)
      }
      return {
        handleClick,
      };
    },
  });
</script>
