import store from "@/store";
import { hotModuleUnregisterModule } from "@/utils/helper/vuexHelper";
import { VuexModule, getModule, Module, Mutation, Action } from "vuex-module-decorators";
import type { Panes } from "@bus/multitabs/type";
import type { AppRouteRecordRaw } from "@/router/types";
const NAME = "tabs";
hotModuleUnregisterModule(NAME);
@Module({ dynamic: true, namespaced: true, store, name: NAME })
class Tabs extends VuexModule {
  private tabs: Panes[] = [
    {
      path: "/demo/table",
      meta: {
        title: "Table",
        icon: "home-4-line",
      },
    }
  ];
  private activeKey = "";
  get getTabs() {
    return this.tabs;
  }
  get getActiveKey() {
    return this.activeKey;
  }
  @Mutation
  ADD(tab: Panes): void {
    this.tabs.push(tab)
  }
  @Mutation
  DEL(path: string): void {
    this.tabs = this.tabs.filter(item => item.path != path)
  }
  @Mutation
  SETACTIVE(path: string): void {
    this.activeKey = path
  }
  @Action
  public delTab(path: string): void {
    //确定active index
    let lastIndex: number;
    let isChange: boolean;
    if (this.activeKey == path) {
      isChange = true
      this.tabs.forEach((pane, i) => {
        if (pane.path === path && i > 0) {
          lastIndex = i - 1;
        } else {
          lastIndex = 0;
        }
      })
    } else {
      isChange = false
    }
    //删除tabs 选中项
    this.DEL(path)
    //设置activeKey
    isChange && (() => {
      const activeKey = this.tabs.filter((tab, index) => index === lastIndex)[0].path;
      this.SETACTIVE(activeKey)
    })()

  }
  @Action
  public addTab(router: AppRouteRecordRaw): void {
    //根据router生成tab数据
    const tab: Panes = {
      path: "",
      meta: {
        title: "",
        icon: "",
      },
    }
    tab.path = router.path
    tab.meta.title = router.meta.title
    tab.meta.icon = router.meta.icon ? router.meta.icon : ""
    //判断是否有tab，没有添加/有就跳转
    let hasTab = false
    hasTab = this.tabs.filter(item => item.path === tab.path).length > 0
    if (hasTab) {
      this.SETACTIVE(tab.path)
    } else {
      this.ADD(tab);
      this.SETACTIVE(tab.path);




    }
  }
}
export { Tabs };
export const tabsStore = getModule<Tabs>(Tabs);
