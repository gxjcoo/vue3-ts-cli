import type { RouteRecordRaw } from 'vue-router';

export interface RouteMeta {
  // title
  title: string;
  // Is it fixed on tab
  affix?: boolean;
  // icon on tab and menu
  icon?: string;
  // Is it in the tab
  inTab?: boolean;

}

export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  meta: RouteMeta;
  component?: any;
  components?: any;
  children?: AppRouteRecordRaw[];
  props?: any;
  fullPath?: string;
  hidden?:boolean
}
export interface AppRouteModule {
  layout: AppRouteRecordRaw;
  routes: AppRouteRecordRaw[];
}