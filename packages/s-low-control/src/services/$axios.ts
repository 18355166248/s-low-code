import axios, { AxiosRequestConfig } from "axios";
import { notification } from "antd";
import { trimRequestInterceptors } from "./$axios.config";
import { getToken } from "@/utils/auth";

const token = getToken();

const config: AxiosRequestConfig = {
  timeout: 5 * 1000, // 超时设置(单位毫秒)，无超时时间设置为 0。
  responseType: "json", // 响应的数据格式：json/blob/document/arraybuffer/text/stream
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token, // 塞入token 用于后端 jwt校验是否登录
  },
  baseURL: "/api/v1",
};

const $axios = axios.create(config);

$axios.interceptors.request.use(...trimRequestInterceptors);

$axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

$axios.interceptors.response.use(
  (res) => {
    if (res.data?.code !== 200) {
      res.data.message &&
        notification.error({
          message: res.data.message,
        });
      return Promise.reject(res.data.message);
    }

    return res.data?.data;
  },
  (error) => {
    if (error?.response?.status === 401) {
      // const url = `http://ops${domain}.ximalaya.com/invoice-admin-web/login?redirect_uri=${encodeURIComponent(
      //   window.location.href
      // )}`;
      // window.location.href = url;

      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export default $axios;
