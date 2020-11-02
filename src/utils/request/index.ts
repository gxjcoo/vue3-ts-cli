import axios from "axios";
import qs from "qs";
import router from "@/router";
import { isArray } from "@/utils/is";
import { message } from "ant-design-vue";
import type { AxiosResponse } from 'axios';
import { Result } from './types';
const { baseURL, contentType, requestTimeout, successCode } = require("@/config/index.js");

/**
 * @description 处理code异常,错误码还未定义，需要和后端协商
 * @param {*} code
 * @param {*} msg
 */
const handleCode = (code: number, msg: string) => {
  console.log(code);
  message.error(msg || "登录失效");
  router.push({ path: "/401" }).catch(() => {});
};

/**
 * @description axios初始化
 */
const instance = axios.create({
  baseURL,
  timeout: requestTimeout,
  headers: {
    "Content-Type": contentType,
  },
});

/**
 * @description axios请求拦截器
 */
instance.interceptors.request.use(
  (config) => {
    if (
      config.data &&
      config.headers["Content-Type"] === "application/x-www-form-urlencoded;charset=UTF-8"
    )
      config.data = qs.stringify(config.data);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * @description axios响应拦截器
 */

instance.interceptors.response.use(
  (res:AxiosResponse<any>) => {
    const { data, config } = res;
    const { code, msg } = data;
    // 操作正常Code数组
    const codeVerificationArray = isArray(successCode) ? [...successCode] : [...[successCode]];
    // 是否操作正常
    if (codeVerificationArray.includes(code)) {
      return data;
    } else {
      handleCode(code, msg);
      return Promise.reject(
        "请求异常拦截:" + JSON.stringify({ url: config.url, code, msg }) || "Error"
      );
    }
  },
  (error) => {
    const { response, message } = error;
    if (error.response && error.response.data) {
      const { status, data } = response;
      handleCode(status, data.msg || message);
      return Promise.reject(error);
    } else {
      let { message } = error;
      if (message === "Network Error") {
        message = "后端接口连接异常";
      }
      if (message.includes("timeout")) {
        message = "后端接口请求超时";
      }
      if (message.includes("Request failed with status code")) {
        const code = message.substr(message.length - 3);
        message = "后端接口" + code + "异常";
      }
      message.error(message || `后端接口未知异常`);
      return Promise.reject(error);
    }
  }
);

export const http  = <T = any>(params:any) : Promise<T> =>{
  return new Promise((resolve, reject) => {
    instance(params)
      .then((res: AxiosResponse<Result>) => {
        resolve((res as unknown) as Promise<T>);
      })
      .catch((e: Error) => {
          reject(e);
          return;
      });
  })}
