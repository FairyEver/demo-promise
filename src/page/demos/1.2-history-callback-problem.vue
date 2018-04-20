<template>
  <div>
    <h1>回调地狱</h1>
    <p>在源码中查看“回调地狱”效果</p>
    <el-button @click="start">每隔1秒 依次打开下面的开关</el-button>
    <p v-for="(v, i) in values" :key="i">
      <el-switch :value="values[i]"></el-switch>
    </p>
  </div>
</template>

<script>
export default {
  groupName: '引入',
  title: '回调地狱',
  data () {
    return {
      values: Array(10).fill(false)
    }
  },
  methods: {
    start () {
      // 这个例子完全可以使用 setInterval 来达到效果，这里写成这样只是为了演示
      this.open1({
        callback: () => {
          this.open2({
            callback: () => {
              this.open3({
                callback: () => {
                  this.open4({
                    callback: () => {
                      this.open5({
                        callback: () => {
                          this.open6({
                            callback: () => {
                              this.open7({
                                callback: () => {
                                  this.open8({
                                    callback: () => {
                                      this.open9({
                                        callback: () => {
                                          // 天哪！
                                          this.open10()
                                        }
                                      })
                                    }
                                  })
                                }
                              })
                            }
                          })
                        }
                      })
                    }
                  })
                }
              })
            }
          })
        }
      })
    },
    open1 ({callback = () => {}}) {
      this.$set(this.values, 0, true)
      setTimeout(callback, 1000)
    },
    open2 ({callback = () => {}}) {
      this.$set(this.values, 1, true)
      setTimeout(callback, 1000)
    },
    open3 ({callback = () => {}}) {
      this.$set(this.values, 2, true)
      setTimeout(callback, 1000)
    },
    open4 ({callback = () => {}}) {
      this.$set(this.values, 3, true)
      setTimeout(callback, 1000)
    },
    open5 ({callback = () => {}}) {
      this.$set(this.values, 4, true)
      setTimeout(callback, 1000)
    },
    open6 ({callback = () => {}}) {
      this.$set(this.values, 5, true)
      setTimeout(callback, 1000)
    },
    open7 ({callback = () => {}}) {
      this.$set(this.values, 6, true)
      setTimeout(callback, 1000)
    },
    open8 ({callback = () => {}}) {
      this.$set(this.values, 7, true)
      setTimeout(callback, 1000)
    },
    open9 ({callback = () => {}}) {
      this.$set(this.values, 8, true)
      setTimeout(callback, 1000)
    },
    open10 () {
      this.$set(this.values, 9, true)
    }
  }
}
</script>
