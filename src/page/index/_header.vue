<template>
  <el-menu
    class="x-header"
    mode="horizontal"
    :router="true">
    <el-menu-item index="/">首页</el-menu-item>
    <el-submenu v-for="(group, groupIndex) in menuGroup" :key="`group${groupIndex}`" :index="`group${groupIndex}`">
      <template slot="title">{{group.title}}</template>
      <el-menu-item v-for="item in group.pages" :key="item.routerPath" :index="item.routerPath">{{item.title}}</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
import { menu } from '@/router'
export default {
  data () {
    return {
      menu
    }
  },
  computed: {
    menuGroup () {
      return Array.from(new Set(this.menu.map(e => e.groupName))).map(name => ({
        title: name,
        pages: this.menu.filter(m => m.groupName === name)
      }))
    }
  }
}
</script>
