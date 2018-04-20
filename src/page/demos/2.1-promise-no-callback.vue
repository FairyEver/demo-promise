<template>
  <div>
    <h1>使用Promise改造前面的例子</h1>
    <el-button @click="start">打开第一开关 2s后打开第二个开关</el-button>
    <p><el-switch v-model="value1"></el-switch></p>
    <p><el-switch v-model="value2"></el-switch></p>
  </div>
</template>

<script>
export default {
  groupName: '认识Promise',
  title: '使用Promise改造前面的例子',
  data () {
    return {
      value1: false,
      value2: false
    }
  },
  methods: {
    start () {
      this.open1()
        .then(this.open2)
    },
    open1 () {
      return new Promise((resolve, reject) => {
        this.value1 = true
        setTimeout(resolve, 2000)
      })
    },
    open2 () {
      this.value2 = true
    }
  }
}
</script>
