import {
  createStore,
  // createLogger, Plugin
} from "vuex";
import { config } from "vuex-module-decorators";

config.rawError = true;

const store = createStore({
  modules: {},
});

export default store;
