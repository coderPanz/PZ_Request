import axios from "axios"
import type { AxiosInstance } from "axios"
import { PZrequestConfig } from "./type"

  class PZrequest {
    instance: AxiosInstance
    constructor(config: PZrequestConfig) {
      this.instance = axios.create(config)

      // 全局拦截器, 重复写入拦截器不会覆盖原有的拦截器
      this.instance.interceptors.request.use((config) => {
        console.log("请求成功~")
        return config
      }, err => {
        console.log("请求失败")
        return err
      })
      this.instance.interceptors.response.use(res => {
        console.log("响应成功")
        return res
      }, err => {
        console.log("响应失败")
        return err
      })
      
      // 实例拦截器 
      // 精准化控制: 外部创建具体某个实例的时候, 单独为其添加拦截特定拦截器
      if(config.interceptor) {
        this.instance.interceptors.request.use(
          config.interceptor.requestSuccess,
          config.interceptor.requestFail
          )
        this.instance.interceptors.response.use(
          config.interceptor.responseSuccess, 
          config.interceptor.responseFail
        )
      }
    }

    // 对单次请求进行精准控制: 
    request(config: PZrequestConfig) {
      return this.instance.request(config)
    }
    get(config: PZrequestConfig) {
      return this.request({ ...config, method:"GET" })
    }
    post(config: PZrequestConfig) {
      return this.request({ ...config, method: "POST" })
    }
  }

  export default PZrequest