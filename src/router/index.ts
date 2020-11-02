import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { demo } from "./modules/demo";
import { others } from "./modules/others";
export const routes = [
  {
    path: "/",
    meta: {
      title: "main",
    },
    component: () => import("@/components/business/layout/index.vue"),
    children: [...demo],
  },
  ...others,
] as RouteRecordRaw[];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
