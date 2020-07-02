<template>
  <div class="wrapper">
    <div class="header"></div>
    <div class="home">
      <Slider class="slider"/>
      <Phone class="phone"/>
      <Option class="option"/>
    </div>
  </div>
</template>

<script>
import Slider from '../layout/slider'
import Phone from '../layout/content'
import Option from '../layout/option'
export default {
  name: 'Home',
  components: {
    Slider,
    Phone,
    Option
  }
}
</script>
<style scoped lang="stylus">
  .wrapper{
    .header{
      height 50px
      background aqua
    }
    .home{
      display flex
      width 100%
      height calc(100vh - 50px)
      overflow hidden
      .slider{
        flex 1
        background darkcyan
      }
      .phone{
        flex 2
        background #fff
      }
      .option{
        flex 1
        background #f4f4f4
      }
    }
  }

</style>
