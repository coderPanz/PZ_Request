import { BASE_URL, TIME_OUT } from "./config"
import PZrequest from "./request/PZrequest"

// 这里是对每个请求的实例对象进行拦截器的自由配置
export const pzrequest = new PZrequest({
    baseURL: BASE_URL,
    timeout: TIME_OUT
  })

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
