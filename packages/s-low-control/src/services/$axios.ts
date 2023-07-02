import axios, { AxiosRequestConfig } from "axios";
import { notification } from "antd";
import { trimRequestInterceptors } from "./$axios.config";
import { getToken, removeAuthStorage } from "@/utils/auth";

const config: AxiosRequestConfig = {
  timeout: 20 * 1000, // 超时设置(单位毫秒)，无超时时间设置为 0。
  responseType: "json", // 响应的数据格式：json/blob/document/arraybuffer/text/stream
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: `${process.env.REACT_APP_BASE_URL}/api/v1`,
};

const $axios = axios.create(config);

$axios.interceptors.request.use(...trimRequestInterceptors);

$axios.interceptors.request.use(
  (config) => {
    const token = getToken();

    (config.headers as any).Authorization = "Bearer " + token;
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
      removeAuthStorage();
      window.location.replace("/login");

      return Promise.reject(error);
    }
    const resData = error?.response.data;
    if (resData) {
      resData.message &&
        notification.error({
          key: resData.message,
          message: resData.message,
        });
    }

    return Promise.reject(error);
  }
);

export default $axios;
