<template>
  <div class="slider-box">
    <div class="item" @dragstart="dragStart($event, item.type)" draggable  v-for="(item,index) in sliderList" :key="index">
      <div class="icon">
        <div class="icon"><i :class="item.icon"></i></div>
        <div class="name">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  data () {
    return {
      sliderList: [
        {
          title: '轮播图',
          icon: 'el-icon-picture',
          type: 'banner',
          option: {}
        },
        {
          title: '导航',
          icon: 'el-icon-picture',
          type: 'nav',
          option: {}
        }
      ]
    }
  },
  methods: {
    dragStart (e, key) {
      e.dataTransfer.setData('cmp-type', key)
    }
  }
}
</script>

<style scoped lang="stylus">
  .slider-box {
    .item {
      background white
      float left
      padding 10px 20px
      overflow hidden
      margin-right 1px
      text-align center
      margin-bottom 1px
      i{
        font-size 40px
      }
    }
  }

</style>
