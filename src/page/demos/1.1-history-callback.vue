<template>
  <div>
    <h1>回调函数</h1>
    <el-button @click="start">打开第一开关 2s后打开第二个开关</el-button>
    <p><el-switch v-model="value1"></el-switch></p>
    <p><el-switch v-model="value2"></el-switch></p>
  </div>
</template>

<script>
export default {
  groupName: '引入',
  title: '旧的回调模式',
  data () {
    return {
      value1: false,
      value2: false
    }
  },
  methods: {
    start () {
      this.open1({
        callback: () => {
          this.open2()
        }
      })
    },
    open1 ({callback = () => {}}) {
      this.value1 = true
      setTimeout(callback, 2000)
    },
    open2 () {
      this.value2 = true
    }
  }
}
</script>
