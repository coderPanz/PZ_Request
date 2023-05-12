import {HYrequest, pzrequest} from "../index"

// 调用request方法, request内部return res回调then
  pzrequest.request({
    url: "/xxx/xxx",
  }).then(res => {
    console.log(res.data)
  })

  HYrequest.request({
    url: "http://xxx/xxx"
  }).then(res => {
    console.log(res.data)
  })