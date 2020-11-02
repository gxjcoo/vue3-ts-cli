import store from "@/store";
import { hotModuleUnregisterModule } from "@/utils/helper/vuexHelper";
import { VuexModule, getModule, Module, Mutation, Action } from "vuex-module-decorators";

const NAME = "demo";

hotModuleUnregisterModule(NAME);
let lock = false;
@Module({ dynamic: true, namespaced: true, store, name: NAME })
class Demo extends VuexModule {
  private count = 0;

  get getCount() {
    return this.count;
  }

  @Mutation
  ADD(count: number): void {
    this.count += count;
  }

  @Action
  public setCount(count: number): void {
    lock = !lock;
    if (lock) {
      this.ADD(count);
    } else {
      this.ADD(count * 10);
    }
  }
}
export { Demo };
export const demoStore = getModule<Demo>(Demo);
