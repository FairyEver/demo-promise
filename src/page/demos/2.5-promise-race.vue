<template>
  <div>
    <h1>race</h1>
    <el-button @click="start">同时向3个接口请求数据，但是只要返回最快的那个</el-button>
    <p>{{value}}</p>
  </div>
</template>

<script>
export default {
  groupName: '认识Promise',
  title: 'race',
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
      // 上面三个promise只要有一个resolve了 就执行then
      Promise.race([p1, p2, p3])
        .then(res => {
          this.value = res
        })
    }
  }
}
</script>
