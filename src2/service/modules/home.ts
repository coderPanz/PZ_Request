import {HYrequest, pzrequest} from "../index"

// 调用request方法, request内部return res回调then
  pzrequest.request({
    url: "/home/multidata",
  }).then(res => {
    console.log(res.data)
  })

  HYrequest.request({
    url: "http://codercba.com:1888/api/home/categories"
  }).then(res => {
    console.log(res.data)
  })