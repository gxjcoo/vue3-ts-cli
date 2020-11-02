// eslint-disable-next-line prettier/prettier
import type { App } from 'vue';

declare global {
  declare interface Window {
    __APP__: App<Element>;
  }
}
