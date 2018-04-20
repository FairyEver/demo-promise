<template>
  <div>
    <h1>promise + reduce 实现队列</h1>
    <p>执行五个动作，分别间隔 1s 2s 3s 4s</p>
    <p>[ 打印1 ] - 间隔1s - [ 打印2 ] - 间隔2s - [ 打印3 ] - 间隔3s - [ 打印4 ] - 间隔4s - [ 打印5 ]</p>
    <el-button @click="start">开始</el-button>
    <p>{{value.join(' - ')}}</p>
  </div>
</template>

<script>
export default {
  groupName: '进阶用法',
  title: 'promise + reduce 实现队列',
  data () {
    return {
      value: []
    }
  },
  methods: {
    start () {
      [0, 1, 2, 3, 4].reduce((p, e) => p.then(() => new Promise(resolve => {
        setTimeout(() => {
          this.value.push(e + 1)
          resolve()
        }, e * 1000)
      })), Promise.resolve())
    }
  }
}
</script>
