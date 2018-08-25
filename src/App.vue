<template>
  <div id="app">
    <el-menu :default-active="activeIndex" router class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1" :route="{path:'/Mint-UI'}">
        Mint-UI
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">element</template>
        <el-menu-item index="2-1" :route="{path:'/Hello/ECheckBox'}">
          ECheckBox
        </el-menu-item>
        <el-menu-item index="2-2" :route="{path:'/Hello/ECheckBox'}">
          ECheckBox
        </el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">Table</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2" :route="{path:'/Hello/Table'}">
            Table
          </el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4" :route="{path:'/Tab'}">
        Tab
      </el-menu-item>
    </el-menu>
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
