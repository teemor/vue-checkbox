<template>
  <div>
    <mt-swipe>
      <mt-swipe-item class="slide1">
      </mt-swipe-item>
      <mt-swipe-item class="slide2">2</mt-swipe-item>
      <mt-swipe-item class="slide3">3</mt-swipe-item>
    </mt-swipe>
    <mt-button @click="openToast" type="primary" size="small">点击弹出toast</mt-button>
    <mt-button @click.native="openConfirm" type="primary" size="small" cancelButtonText="can">提示框</mt-button>
    <mt-cell-swipe v-for="n in 15" :key="n" :right="rightButton" title="swipe me"></mt-cell-swipe>

    <mt-palette-button content="+" @expand="main_log('expand')" @expanded="main_log('expanded')" @collapse="main_log('collapse')" direction="rt" class="pb" :radius="80" ref="target_1" mainButtonStyle="color:yellow;background-color:#26a2ff;" :offset="Math.PI /4.4" style="left:30px;">
      <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(1)">文本</div>
      <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(2)">图片</div>
      <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(3)">音频</div>
      <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(4)">视频</div>

    </mt-palette-button>
  </div>
</template>
<style>
.pb {
  width: 60px;
  height: 60px;
  line-height: 60px;
  color: #fff;
  position: fixed;
  bottom: 30px;
}
.my-icon-button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #26a2ff;
  color: #fff;
  line-height: 40px;
  text-align: center;
}
.mint-main-button {
  color: #000;
  background-color: #26a2ff;
}
.mint-button--primary {
  background-color: #0089dc;
}
.mint-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
}

.mint-swipe-item {
  line-height: 200px;
}
.slide1 {
  background-color: #0089dc;
  color: #fff;
}

.slide2 {
  background-color: #ffd705;
  color: #000;
}

.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}
</style>
<script>
  import {Toast,MessageBox} from 'mint-ui';
  export  default {
    name:"DemoFirst",
    components:{
      Toast
    },
    created(){
      this.rightButton = [
        {
          content: 'Mark as Unread',
          style: {background: 'lightgray',color:'#fff'},
          handler:()=>{
            console.log(123)
          }
        },
        {
          content: 'Delete',
          style:{background:'red',color:'#fff'},
          handler:()=>{
            console.log(123)
          }
        }
      ]
    },
    methods:{
      main_log(val) {
        console.log('main_log', val);
      },
      sub_log(val) {
        console.log('sub_log', val);
        this.$refs.target_1.collapse();
      },
      leftButtonHandler(evt){
        console.log(123)
      },
      openToast:function () {
        Toast({
          message:'操作成功',
          iconClass:'mintui mintui-success',
          position: 'bottom'
        })
      },
      openConfirm:function () {
        MessageBox({
          title:'提示',
          message:'确定执行此操作？',
          showCancelButton:true
        })
      }
    }
  }
</script>
