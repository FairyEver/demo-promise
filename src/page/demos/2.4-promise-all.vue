<template>
  <div>
    <h1>all</h1>
    <el-button @click="start">同时向3个接口请求数据</el-button>
    <p v-for="(row, index) in value" :key="index">{{row}}</p>
  </div>
</template>

<script>
export default {
  groupName: '认识Promise',
  title: 'all',
  data () {
    return {
      value: ''
    }
  },
  methods: {
    start () {
      // 请把下面的代码想象成三个异步请求
      const p1 = new Promise(resolve => {
        setTimeout(resolve, 1000, 'data from data1')
      })
      const p2 = new Promise(resolve => {
        setTimeout(resolve, 2000, 'data from data2')
      })
      const p3 = new Promise(resolve => {
        setTimeout(resolve, 3000, 'data from data3')
      })
      // 三个异步请求全部完成后才会执行then
      Promise.all([p1, p2, p3])
        .then(res => {
          this.value = res
        })
    }
  }
}
</script>
