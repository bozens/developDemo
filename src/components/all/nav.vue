<template>
    <div class="nav">
      <div class="nav-list">
        <div class="nav-item" v-for="(item,index) in navs" :key="index">
          <div class="nav-icon">
            <template v-if="item.icon !=='' ">
              <img :src="item.icon" alt="">
            </template>
            <template v-else>
              <img src="http://182.92.242.32:7010/static/files/2020/07/08/e15ab65c-c0c2-11ea-a160-00163e16af49.png" alt="" style="width: 40px;height: 40px">
            </template>
          </div>
          <div class="nav-name">{{item.title}}</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    navs: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  .nav-list {
    background #f4f4f4
    height 240px
    overflow hidden
    padding  30px 25px
    .nav-item {
      float left
      margin-left 50px
      margin-top 20px
      text-align center
      font-size 14px
      .nav-icon{
        width 60px
        height 60px
        background antiquewhite
        img{
          width 40px
          height 40px
          margin 10px auto
        }
      }
      .nav-name{
        margin-top 10px
      }
    }
  }

</style>
