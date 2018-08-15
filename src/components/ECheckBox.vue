<template>
  <div class="hello">
    <div>
      <ul v-for="child in children" :key="child">
        <li style="float:left;list-style:none">{{child.label}}</li>
      </ul>
    </div>
    <div style="margin-left:10px">
      <div>
        <el-checkbox v-model="checkall" @change="changeAll">全选</el-checkbox>
      </div>
      <el-checkbox v-model="checkedcitys" v-for="(group,index) in model[0].children" :label="group" :key="index" @change="changeSecond(checkedcitys)">
        <div @mouseover="overShow(index)" @mouseout="outHide(index)">{{group.label}}
          <div v-if="index===showIndex" style="z-index:222;position:absolute;border:1px solid #8E8E8E;background:#fff;width:50px;height:80px;margin-left:25px;margin-top:-20px">
            <el-checkbox v-model="children" v-for="(child,item) in group.children" :label="child" :key="item" @change="changeThird(group,index,children)">
              {{child}}
            </el-checkbox>
          </div>
        </div>
      </el-checkbox>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkall: false,
      children:[],
      model:[
        {
            label:"全选",
             children:[
                        { label: "A组", children: ["a1", "a2", "a3"] },
                        { label: "B组", children: ["b1", "b2", "b3"] },
                        { label: "C组", children: ["c1", "c2", "c3"] },
                        { label: "D组", children: ["d1", "d2"] },
        ]}
      ],
      checkedcitys: [],
      checkchild: false,
      showIndex:-1
    };
  },
  methods: {
    changeAll: function(val) {
      this.checkedcitys = val? this.model:[]
      this.changeSecond(this.checkedcitys)
    },
    changeSecond: function(val) {
      console.log(val,3)
      let arr=[]
      let checkedCount = Object.keys(val).length
      this.children =checkedCount >0 ? this.children :[]
      for(let i=0;i<checkedCount;i++){
      arr=  arr.concat(val[i].children)   
      this.children = arr    
      }
      //全选
      this.checkall = checkedCount=== this.model.length
    },
    changeThird:function(group,index,children){
      let range = []
      range.push(group)
      console.log(this.model[index].children,'点击的model')
      console.log(range,'group')
      // console.log(index,'index')
      console.log(children,'children')
      console.log(this.checkedcitys,'选的')
      // if(this.model[val].children.length===this.children.length){
      //   console.log(this.children,'1')
      //   console.log(this.model[val],'2')
      // }else{

      // }
    // console.log(this.model[val].children.length===this.children.length)
    //   let checkedCount = Object.keys(val).length
    //   if(checkedCount=== this.children.length){
    //           this.checkedcitys = this.model[val]
    //   }
        // this.model[val] = 
      // 全选

    },
    overShow: function(node) {
      this.showIndex = node
      
    },
    outHide: function(node) {
       this.showIndex = -1
    },
  }
};
</script>
<style scoped>
.el-checkbox + .el-checkbox {
  display: block;
  margin: 0;
}
</style>
