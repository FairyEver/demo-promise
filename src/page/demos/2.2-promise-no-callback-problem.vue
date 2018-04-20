<template>
  <div>
    <h1>解决回调地狱</h1>
    <p>在源码中查看promise如何解决“回调地狱”</p>
    <el-button @click="start">每隔1秒 依次打开下面的开关</el-button>
    <p v-for="(v, i) in values" :key="i">
      <el-switch :value="values[i]"></el-switch>
    </p>
  </div>
</template>

<script>
export default {
  groupName: '认识Promise',
  title: '解决回调地狱',
  data () {
    return {
      values: Array(10).fill(false)
    }
  },
  methods: {
    start () {
      // 这个例子完全可以使用 setInterval 来达到效果，这里写成这样只是为了演示
      // 请和 src/page/demos/1.2-history-callback-problem.vue 作对比
      this.open1()
        .then(() => this.open2())
        .then(() => this.open3())
        .then(() => this.open4())
        .then(() => this.open5())
        .then(() => this.open6())
        .then(() => this.open7())
        .then(() => this.open8())
        .then(() => this.open9())
        .then(this.open10)
    },
    open1 () {
      return new Promise(resolve => {
        this.$set(this.values, 0, true)
        setTimeout(resolve, 1000)
      })
    },
    open2 () {
      return new Promise(resolve => {
        this.$set(this.values, 1, true)
        setTimeout(resolve, 1000)
      })
    },
    open3 () {
      return new Promise(resolve => {
        this.$set(this.values, 2, true)
        setTimeout(resolve, 1000)
      })
    },
    open4 () {
      return new Promise(resolve => {
        this.$set(this.values, 3, true)
        setTimeout(resolve, 1000)
      })
    },
    open5 () {
      return new Promise(resolve => {
        this.$set(this.values, 4, true)
        setTimeout(resolve, 1000)
      })
    },
    open6 () {
      return new Promise(resolve => {
        this.$set(this.values, 5, true)
        setTimeout(resolve, 1000)
      })
    },
    open7 () {
      return new Promise(resolve => {
        this.$set(this.values, 6, true)
        setTimeout(resolve, 1000)
      })
    },
    open8 () {
      return new Promise(resolve => {
        this.$set(this.values, 7, true)
        setTimeout(resolve, 1000)
      })
    },
    open9 () {
      return new Promise(resolve => {
        this.$set(this.values, 8, true)
        setTimeout(resolve, 1000)
      })
    },
    open10 () {
      this.$set(this.values, 9, true)
    }
  }
}
</script>
