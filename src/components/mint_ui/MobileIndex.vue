<template>
  <div>
    <mt-tab-container class="page-tabbar-container" v-model="selected">
      <mt-tab-container-item id="demo1">
        <demo-first></demo-first>
      </mt-tab-container-item>
      <mt-tab-container-item id="demo2">
        <demo-second></demo-second>
      </mt-tab-container-item>
      <mt-tab-container-item id="demo3">
        <mt-cell v-for="n in 7" :title="'发现 ' + n" :key="n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="demo4">
        <div class="page-part">
          <mt-cell v-for="n in 12" :title="'我的 ' + n" :key="n" />
        </div>
        <router-link to="/">
          <mt-button type="danger" size="large">退出</mt-button>
        </router-link>
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="demo1">
        <img slot="icon" src="../../assets/logo.png"> demo1
      </mt-tab-item>
      <mt-tab-item id="demo2">
        <img slot="icon" src="../../assets/logo.png"> demo2
      </mt-tab-item>
      <mt-tab-item id="demo3">
        <img slot="icon" src="../../assets/logo.png"> demo3
      </mt-tab-item>
      <mt-tab-item id="demo4">
        <img slot="icon" src="../../assets/logo.png"> demo4
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  import DemoFirst from './Demo1.vue';
  import DemoSecond from './Demo2.vue';

  export  default {
    components:{
      DemoFirst,DemoSecond
    },
    data(){
      return{
        selected:'demo1'
      }
    },
    methods:{

    }
  }
</script>
