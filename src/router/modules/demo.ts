/**
 * @description router业务功能路由
 */
import type { AppRouteRecordRaw } from '@/router/types';
import RouteView from "@bus/routeview/index.tsx";
export const demo: Array<AppRouteRecordRaw> = [
  {
    path: "/demo",
    name: "Axios",
    component: RouteView,
    redirect:'Search',
    meta: {
      title: "Demo",
      icon: "home-4-line",
    },
    children:[
      {
        meta: {
          title: "Search",
          icon: "home-4-line",
        },
        path: "/demo/search",
        name: "Aaxios",
        component: () => import(/* webpackChunkName: "Demo" */ "@/views/demo/search/index.vue"),
     },
      {
        path: "/demo/vuex",
        name: "Vuex",
        component: () => import(/* webpackChunkName: "Demo" */ "@/views/demo/vuex/index.vue"),
        meta: {
          title: "Vuex",
          icon: "home-4-line",
        },
      },
      {
        path: "/demo/table",
        name: "Table",
        component: () => import(/* webpackChunkName: "Demo" */ "@/views/demo/table/index.vue"),
        meta: {
          title: "Table",
          icon: "home-4-line",
        },
      },
   
    ]
  },
 
];
