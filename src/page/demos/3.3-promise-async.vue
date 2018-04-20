<template>
  <div>
    <h1>使用 async await 优化代码</h1>
    <el-button @click="start">请求数据 一秒后返回</el-button>
    <p>value: {{value}}</p>
  </div>
</template>

<script>
export default {
  groupName: '进阶用法',
  title: '使用 async await 优化代码',
  data () {
    return {
      value: ''
    }
  },
  methods: {
    async start () {
      console.log('开始请求数据')
      this.value = await this.getData()
      console.log('请求数据结束')
      console.log('this.value : ', this.value)
      // 异步请求变成了同步！
    },
    getData () {
      return new Promise(resolve => {
        setTimeout(resolve, 2000, 'I am return data')
      })
    }
  }
}
</script>
