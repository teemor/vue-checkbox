<template>
    <div id="pagination">
        <el-pagination @size-change="pageSizeChange" @current-change="currentPageChange" :current-page="currentPage" :page-sizes="pageSizes" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total" background>
        </el-pagination>
    </div>
</template>

<script>
/**
 * 分页组件
 * @author Nadia
 * @param total 对外接收总数据数,以此计算总页数;
 * @param changePage 用于想从外面更改页数的情况,比如,点击查询,要把当前页置为1,要更改分页组件展示的值;
 * @event pagination-change 点击下一页或者选择某一页时,对外传出;当分页发生变化,列表页要拿到变化后的页数,向后端发送请求
 */
export default {
  props: {
    total: Number | String,
    allowCreate: Boolean, // 是否允许用户创建新条目
    // 表头所有数据
    header: Array
  },
  data: function () {
    return {
      pageSizes: [10, 15, 20, 25, 30],
      currentPage: 1,
      pageSize: 10
    }
  },
  methods: {
    // 每页多少条
    pageSizeChange: function (val) {
      this.pageSize = val
      this.currentPage = 1
      this.paginationChange()
    },
    // 哪一页
    currentPageChange: function (val) {
      this.currentPage = val
      this.paginationChange()
    },
    // 分页数据发生变化向外传递
    paginationChange: function () {
      this.$emit('pagination-change', this.currentPage, this.pageSize)
    },
    setPage: function (page) {
      this.currentPage = page
      this.$emit('pagination-change', this.currentPage, this.pageSize)
    }
  }
}
</script>
<style>
#pagination {
  width: 100%;
  text-align: center;
  margin-top: 20px;
}
</style>
