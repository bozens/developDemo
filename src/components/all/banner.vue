<template>
  <div class="swiper-box">
    <div class="none" v-if="banners.length === 0">暂无数据</div>
    <div class="has-data" v-else>
      <swiper :options="swiperOption" style="width: 100%;height: 300px" >
        <template v-for="(item,index) in banners">
          <swiper-slide v-if=" item.imgUrl !=='' "  :key="index" >
           <img :src="item.imgUrl" style="width: 100%;height: 100%">
          </swiper-slide>
        </template>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'banner',
  components: {},
  props: {
    banners: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        notNextTick: true,
        speed: 500,
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 5000
        },
        slidesPerView: 'auto',
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 30
      }
    }
  },
  mounted () {
  }
}

</script>

<style scoped lang="stylus">
  .swiper-box{
    height 300px
    overflow hidden
  }
  .banner-img {
    width 100%
    height 300px
  }

</style>
