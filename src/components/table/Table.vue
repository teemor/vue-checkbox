<template>
    <div>
        <el-button @click="add">弹出</el-button>
        <grace-dialog title="提示" dialog:is="hr-form" width="30%" :dialog:visible.sync="testDialog"></grace-dialog>
    </div>
</template>
<script>
export default {
    data:function(){
        return{
            testDialog:false
        }
    },
    methods:{
        add:function(){
            this.testDialog =true
        }
    }
}
</script>
