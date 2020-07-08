<template>
  <div class="option-box">
    <div class="title">配置</div>

    <div class="option-info">
      <banner v-show="type === 'banner'" :option="option" />
      <navOption v-show="type === 'nav'" :option="option"/>
    </div>

  </div>
</template>

<script>
import navOption from '../components/option/nav'
import banner from '../components/option/banner'
import Bus from '../utils/bus'
export default {
  name: 'Option',
  components: {
    banner,
    navOption
  },
  data () {
    return {
      type: '',
      option: {}
    }
  },
  methods: {

  },
  mounted () {
    Bus.$on('changeOption', res => {
      console.log('getOption', res)
      this.option = res
      this.type = res.type
    })
  }
}
</script>

<style scoped lang="stylus">
.option-box{
  .title{
    padding 10px
  }
}
</style>
