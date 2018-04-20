<template>
  <div>
    <h1>resolve 和 reject</h1>
    <p>{{value}}</p>
    <div>
      <el-button @click="loadOk">触发 Promise 的 resolve</el-button>
      <el-button @click="loadError">触发 Promise 的 reject</el-button>
    </div>
  </div>
</template>

<script>
export default {
  groupName: '认识Promise',
  title: 'resolve 和 reject',
  data () {
    return {
      value: ''
    }
  },
  methods: {
    loadOk () {
      this.getData()
        .then(res => {
          this.value = res
        })
        .catch(err => {
          this.value = '请求数据失败'
          console.log(err)
        })
    },
    loadError () {
      this.getData(false)
        .then(res => {
          this.value = res
        })
        .catch(err => {
          this.value = '请求数据失败'
          console.log(err)
        })
    },
    getData (mode = true) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (mode) {
            resolve('my name is lucy')
          } else {
            reject(new Error('empty data'))
          }
        }, 1000)
      })
    }
  }
}
</script>
