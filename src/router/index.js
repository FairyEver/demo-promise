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
