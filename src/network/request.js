import axios from 'axios'

//axios封装方式一：非最终
// export function request(config, success, failure) {
//   //创建axios实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//   //真正的网络请求
//   instance(config)
//     .then(res => {
//       success(res)
//     })
//     .catch(err => {
//       failure(err)
//     })
// }

//axios封装方式二：非最终
// export function request(config) {
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//   instance(config.baseURL)
//     .then(res => {
//       config.success(res)
//     })
//     .catch(err => {
//       config.failure(err)
//     })
// }

//axios封装方式三：非最终
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })
//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }

//axios封装方式四：最终
export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  //axios拦截器:请求拦截，响应拦截
  //axios.interceptors拦截全局
  instance.interceptors.request.use(config => {
    console.log(config);
    return config
  },err => {
    console.log(err);
  });

  //响应拦截
  instance.interceptors.response.use(res => {
    console.log(res);
    return res
  },err => {
    console.log(err);
  });

  //instance的create函数返回值就是一个promise 所有可以直接返回instance，就不用再一次像方式三那样执行instance().then().catch()
  return instance(config)
}