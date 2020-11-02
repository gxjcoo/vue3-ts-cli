/*
 *@description: 子路由填充模块
 */
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return () => {
      return <router-view />;
    };
  },
});
