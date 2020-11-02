<template>
  <component :is="menuComponent" :item="item" :route-children="routeChildren">
    <template v-if="item.children && item.children.length">
      <ComMenu v-for="route in item.children" :key="route.fullPath" :item="route"></ComMenu>
    </template>
  </component>
</template>

<script lang="ts">
  import MenuItem from "./components/menuitem.vue";
  import SubMenu from "./components/submenu.vue";
  import type { AppRouteRecordRaw } from '@/router/types';
  import { defineComponent, PropType, reactive, ref } from "vue";

  export default defineComponent({
    name: "ComMenu",
    components: { MenuItem, SubMenu },
    props: {
      item: {
        type: Object as PropType<AppRouteRecordRaw>,
        required: true,
      },
    },
    setup(props) {
      let routeChildren = reactive<AppRouteRecordRaw>({} as AppRouteRecordRaw);
      const menuComponent = ref<string>("");

      //判断是否有子目录
      function handleChildren(children: AppRouteRecordRaw[]) {
        if(children === undefined) return []
        return children
      }

        const showChildren = handleChildren(props.item.children as AppRouteRecordRaw[]);
        if(showChildren.length === 0 ){
          menuComponent.value = "MenuItem";
          routeChildren = props.item as AppRouteRecordRaw
        }
         else if (showChildren.length === 1 ) {
          menuComponent.value = "SubMenu";
          routeChildren = showChildren[0];
        } else {
          menuComponent.value = "SubMenu";
        }
      return {
        routeChildren,
        menuComponent,
      };
    },
  });
</script>
<style lang="less" scoped></style>
