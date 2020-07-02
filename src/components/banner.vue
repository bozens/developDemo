<template>
  <div class="box">
    <div class="banner" v-if="type === 'banner'">
      banner
    </div>
    <div class="nav" v-if="type === 'nav'">
      <div class="nav-item" v-for="(item,index) in nav" :key="index">
        nav
      </div>
    </div>
    <div class="img" v-if="type === 'img'">
      img
    </div>
  </div>
</template>

<script>
export default {
  name: 'banner',
  props: {
    type: {
      type: String,
      default: 'banner'
    }
  },
  data () {
    return {
      list: [
        {
          type: 'banner'
        },
        {
          type: 'nav'
        },
        {
          type: 'img'
        }

      ],
      nav: [1, 1, 1, 1, 1, 1, 1, 1]
    }
  }

}
</script>

<style scoped lang="stylus">
  .banner {
    width 100%
    height 300px
    background greenyellow
  }

  .nav {
    background #f4f4f4
    height 240px
    width 100%
    overflow hidden

    .nav-item {
      margin-top 20px
      margin-left 20px
      width 50px
      height 50px
      float left
      background antiquewhite
    }
  }

  .img {
    height 250px
    width 100%
    background brown
  }

</style>
