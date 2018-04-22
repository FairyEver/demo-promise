import Vue from 'vue'
import Router from 'vue-router'
import path from 'path'

Vue.use(Router)

const req = require.context('@/page/demos', false, /\.vue$/)
const demos = req.keys().map(req).map(e => {
  const def = e.default
  const name = path.basename(def.__file, '.vue')
  def.routerPath = name
  def.routerName = name
  return def
})

// 下面这是上面写法的拆分 便于理解
// const req = require.context('@/page/demos', false, /\.vue$/) // 能被 require 请求到的文件的上下文
// console.log(req)
// const keys = req.keys() // 每个文件的路径
// console.log(keys)
// const allFile = keys.map(key => req(key)) // 相当于依次require了每个文件后组成一个数组
// console.log(allFile)
// const demos = allFile.map(e => {
//   const def = e.default
//   const name = path.basename(def.__file, '.vue')
//   def.routerPath = name
//   def.routerName = name
//   return def
// })

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/page/index/index.vue'),
      children: demos.map(demo => ({
        path: demo.routerPath,
        name: demo.routerName,
        component: demo
      }))
    }
  ]
})

export const menu = demos.map(demo => {
  const { routerPath, title, groupName } = demo
  return { routerPath, title, groupName }
})
