import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

import { BASE_URL, TIMEOUT } from "./config";
import { ResType } from "..";

class AppRequest {
  instance: AxiosInstance;

  constructor(baseurl: string, timeout: number) {
    this.instance = axios.create({
      baseURL: baseurl,
      timeout: timeout,
    });

    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (err) => {
        return err;
      }
    );

    this.instance.interceptors.response.use(
      (res) => {
        const { errno, data, msg } = (res.data || {}) as ResType;

        if (errno !== 0) {
          // 错误提示
          if (msg) {
            throw new Error(msg);
          }
        }

        return data as any;
      },
      (err) => {
        return err;
      }
    );
  }

  request(config: AxiosRequestConfig) {
    return this.instance.request(config);
  }

  get(config: AxiosRequestConfig) {
    return this.request({ ...config, method: "get" });
  }

  post(config: AxiosRequestConfig) {
    return this.request({ ...config, method: "post" });
  }
}

const appRequest = new AppRequest(BASE_URL, TIMEOUT);
export default appRequest;
