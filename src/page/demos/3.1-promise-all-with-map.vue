<template>
  <div>
    <h1>使用 map 优化 promise.all</h1>
    <el-button @click="start">同时向3个接口请求数据</el-button>
    <p v-for="(row, index) in value" :key="index">{{row}}</p>
  </div>
</template>

<script>
export default {
  groupName: '进阶用法',
  title: '使用 map 优化 promise.all',
  data () {
    return {
      value: ''
    }
  },
  methods: {
    start () {
      // 请对比 src/page/demos/2.4-promise-all.vue
      Promise.all([1, 2, 3].map(e => {
        return new Promise(resolve => {
          setTimeout(resolve, e * 1000, `data from data${e}`)
        })
      }))
        .then(res => {
          this.value = res
        })
    }
  }
}
</script>
