import axios from 'axios'

export function request(config) {

    // 1. 创建axios的实例
    const instance = axios.create({
        baseURL: 'http://192.168.16.71:8080/wx',
        timeout: 5000
    })

    // 2.axios的拦截器
    // 2.1.请求拦截的作用
    instance.interceptors.request.use((config) => {
        return config
    }, (error) => {
        console.log(error)
    })

    // 2、2响应拦截器
    instance.interceptors.response.use((res) => {
        return res.data
    }, (error) => {
        console.log(error)
    })

    //3、发送真正的网络请求
    return instance(config); //返回一个Promise
}