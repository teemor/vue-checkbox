<template>
  <div id="app">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">
        <router-link to="/MobileIndex">MobileIndex</router-link>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">
          <router-link to="/ECheckBox">MobileIndex</router-link>
        </el-menu-item>
        <el-menu-item index="2-2">
          <router-link to="/ECheckBox">MobileIndex</router-link>
        </el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">
            <router-link to="/ECheckBox/Table">Table</router-link>
          </el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4">
        <router-link to="/Tab">Tab</router-link>

      </el-menu-item>
    </el-menu>

    <p>
      <router-link to="/ECheckBox">
        <el-dropdown>
          <span class="el-dropdown-link">
            下拉菜单
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <router-link to="/ECheckBox">黄金糕</router-link>
            </el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
       return{
          activeIndex:'1'
       }
  },
   methods:{
        handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
