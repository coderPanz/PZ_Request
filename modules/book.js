import pzRequestData from "../request/PZ_Request";

  export function getBookData() {
    return pzRequestData.get({
      // pzRequestData实例已经通过类创建时把BASE_URL传入, 所以这里url配置时不需要再写一遍BASE_URL
      url: "/param1/param2..."
    })
  }