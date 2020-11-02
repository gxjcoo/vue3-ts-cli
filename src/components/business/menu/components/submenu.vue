<template>
  <a-sub-menu :key="item.path">
    <template #title>
      <Icon :icon="item.meta.icon" />
      <span>{{ item.meta.title }}</span>
    </template>
    <slot></slot>
  </a-sub-menu>
</template>

<script lang="ts">
  import Icon from "@/components/common/icon";
  import type { AppRouteRecordRaw } from '@/router/types';
  import { defineComponent, PropType } from "vue";
  export default defineComponent({
    name: "Submenu",
    components: { Icon },
    props: {
      item: {
        type: Object as PropType<AppRouteRecordRaw>,
        required: true,
      },
    },
  })
</script>
