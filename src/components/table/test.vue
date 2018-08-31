<script>
export default{
    render: function(createElement){
        return createElement(
            'h' + this.level
        )
    },
    props:{
        level:{
            type:Number,
            required:true
        }
    }
}
</script>
