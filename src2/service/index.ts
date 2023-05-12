import { BASE_URL, TIME_OUT } from "./config"
import PZrequest from "./request/PZrequest"


export const pzrequest = new PZrequest({
    baseURL: BASE_URL,
    timeout: TIME_OUT
  })
// 当创建实例时传入拦截器, 那么类内部会对该实例单独设置实例拦截器并把该实例返回出来
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
