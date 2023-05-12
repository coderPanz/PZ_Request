import { BASE_URL, TIME_OUT } from "./config"
import PZrequest from "../service/request/PZrequest"

export const pzrequest = new PZrequest({
    baseURL: BASE_URL,
    timeout: TIME_OUT
  })

// 创建实例时可以传入拦截器, 在PZrequest构造函数中就可以指定为为某个实例单独添加拦截器
export const HYrequest = new PZrequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptor: {
    requestSuccess: (config) => {
      console.log("HYrequest响应成功~")
      return config
    },
    requestFail: (err) => {
      console.log("HYrequest请求失败~")
      return err
    },
    responseSuccess: (res) => {
      console.log("响应成功~")
      return res
    },
    responseFail: (err) => {
      console.log("响应失败~")
      return err
    }
    }
  }
)
