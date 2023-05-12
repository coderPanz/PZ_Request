import useMainStore from "@/store/modules/main";
import { BASE_URL, TIME_OUT } from "./config";
import axios from "axios";

  const mainStore = useMainStore()
  class PZ_Request {
    constructor(baseURL, timeout=2000) {
      this.instance = axios.create({
        baseURL,
        timeout
      })

      // 在拦截器中配置isLoading请求加载效果
      this.instance.interceptors.request.use(config => {
        mainStore.isLoading = true
        return config
      }, err => {
        return err
      })
      this.instance.interceptors.response.use(res => {
        mainStore.isLoading = false
        return res
      }, err => {
        mainStore.isLoading = false
        return err
      })
    }

    request(config) {
      // 是一个基于 promise 网络请求库, 所以我们可以进行进一步的封装
      return new Promise((resolve, reject) => {
        this.instance.request(config).then(res => {
          resolve(res.data)
        }).catch(err => {
          reject(err)
        })
      })
    }
    get(config) {
      return this.instance.request({...config, method: "get"})
    }   
    post(config) {
      return this.instance.request({...config, method: "post"})
    }
  }

  const pzRequestData = new PZ_Request(BASE_URL, TIME_OUT)
  export default pzRequestData