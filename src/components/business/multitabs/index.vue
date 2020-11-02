<template>
  <div class="multi_tabs_box">
    <a-tabs v-model:activeKey="activeKey" hide-add type="editable-card" @edit="onEdit">
      <a-tab-pane
        v-for="pane in panes"
        :key="pane.path"
        :closable="panes.length > 1 ? true : false"
        :tab="pane.meta.title"
      >
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts">
  import {defineComponent,watch,computed} from "vue";
  import { useRouter } from "vue-router";
  import {
    tabsStore
  } from "@/store/modules/tabs";
  import type {
    Panes
  } from './type'
  export default defineComponent({
    setup() {
      const {
        push
      } = useRouter();
      const panes = computed((): Panes[] => {
        return tabsStore.getTabs;
      });

      const activeKey = computed({
        get: () => {
          return tabsStore.getActiveKey
        },
        set: val => {
          tabsStore.SETACTIVE(val)
        }
      });
      watch(activeKey, (v) => {
        console.log(v)
        push(v);
      });
      const onEdit = (targetKey: string, action: string) => {
        if (action == 'remove') {
          remove(targetKey);
        }
      }

      const remove = (targetKey: string) => {
        tabsStore.delTab(targetKey)
      };
      return {
        onEdit,
        remove,
        activeKey,
        panes,
      };
    },
  });
</script>

<style lang="less" scoped>
  .multi_tabs_box {
    width: 100%;
    height: 40px;
    position: fixed;
    top: 50px;
    background: #eee;
    z-index: 999;
  }
</style>
