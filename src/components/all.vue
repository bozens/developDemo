<template>
  <div class="box">
    <div class="banner" v-if="info.type === 'banner'">
      <Banner :banners="info.option.banners"></Banner>
    </div>
    <div class="nav" v-if="info.type === 'nav'">
      <Nav :navs="info.option.navs" />
    </div>
    <div class="img" v-if="info.type === 'img'">
      img
    </div>
  </div>
</template>

<script>
import Banner from './all/banner'
import Nav from './all/nav'
export default {
  name: 'banner',
  components: {
    Banner,
    Nav
  },
  props: {
    info: {
      type: Object,
      default () {
        return {
          type: 'img'
        }
      }
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

      ]
    }
  },
  watch: {
    info () {
      console.log('info', this.info)
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
  .img {
    height 250px
    width 100%
    background brown
  }

</style>
