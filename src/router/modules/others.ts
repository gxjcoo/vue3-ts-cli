/**
 * @description router全局功能路由
 */
import { RouteRecordRaw } from "vue-router";

export const others: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "Home" */ "@/views/login/index.vue"),
    meta: {
      title: "登录",
    },
  },
];
