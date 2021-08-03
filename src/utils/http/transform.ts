import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Result, RequestOptions } from './types';

export abstract class AxiosTransform {
  /**
   * @description: 请求之前处理 config
   */
  beforeRequestHook?: (
    config: AxiosRequestConfig,
    options: RequestOptions
  ) => AxiosRequestConfig;

  /**
   * @description: 处理接口返回数据
   */
  transformRequestData?: (
    res: AxiosResponse<Result>,
    options: RequestOptions
  ) => any;

  /**
   * @description: 请求失败处理
   */
  requestCatch?: (e: Error) => Promise<any>;

  /**
   * @description: 请求拦截器，可添加 token 等
   */
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;

  /**
   * @description: 响应拦截器
   */
  responseInterceptors?: (res: AxiosResponse<any>) => AxiosResponse<any>;

  /**
   * @description: 请求拦截器中的错误处理
   */
  requestInterceptorsCatch?: (error: Error) => void;

  /**
   * @description: 响应拦截器中的错误处理
   */
  responseInterceptorsCatch?: (error: Error) => void;
}
