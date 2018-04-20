<template>
  <div class="x-index">
    <IndexHeader></IndexHeader>
    <div class="x-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    IndexHeader: () => import('./_header.vue')
  }
}
</script>

<style lang="scss">
.x-index {
  display: flex;
  height: 100%;
  flex-direction: column;
  .x-header {
    width: 100%;
  }
  .x-main {
    width: 100%;
    flex-grow: 1;
    padding: 50px;
  }
}
</style>
