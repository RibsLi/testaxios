import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


//httpbin.org模拟网络请求

// //axios开发中很多参数都是固定的，我们可以进行一些抽取，也可以利用axios的全局配置
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000


//   //axios多种请求方式
//   //axios(config)
//   //axios.request(config)
//   //axios.get(url[,config])
//   //axios.delete(url[,config])
//   //axios.head(url[,config])
//   //axios.post(url[,data[,config]])
//   //axios.put(url[,data[,config]])
//   //axios.patch(url[,data[,config]])

// axios({
//   //url: 'http://123.207.32.32:8000/home/multidata'
//   //可以简写成method: 'post' 默认情况下是get
//   //baseURL: 'http://123.207.32.32:8000'
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// })

// axios({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })


// //axios并发式请求axios.all([])，使用axios.spread()可以将获得的数组直接展开
// axios.all([
//   axios({
//     url: '/home/multidata'
//   }),
//   axios({
//     url: '/home/data',
//     params: {
//       type: 'sell',
//       page: 2
//     }
//   })
// ])
// // .then(res => {
// //   console.log(res);
// //   console.log(res[0]);
// //   console.log(res[1]);
// // })
// .then(axios.spread((res1, res2) => {
//   console.log(res1);
//   console.log(res2);
// }))


// //当需要请求多个服务器的时候要创建axios实例来管理，在实际开发过程中一般都要创建实例来管理而不是使用全局的
// //服务器一
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })

// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// })

// instance1({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })
//  //服务器二
// const instance2 = axios.create({
//   baseURL: '',
//   timeout: 2000
// })


//封装request模块
import { request } from './network/request';

//axios封装方式一：非最终
// request({
//   url: '/home/multidata'
// },res => {
//   console.log(res);
// },err => {
//   console.log(err);
// })

//axios封装方式二：非最终
// request({
//   baseConfig: {},
//   success(res) {},
//   failure(err) {}
// })

//axios封装方式三/四：最终
request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})