import axios from "axios"

export function request(config){
  // 创建axios实例
  const example = axios.create({
    baseURL: "https://autumnfish.cn",
    timeout: 5000
  })

  return example(config)
}