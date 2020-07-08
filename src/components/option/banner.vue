<template>
  <div class="banner-option">
    <div class="banner-list">
      <h5>选择图片</h5>
      <div class="item" v-for="(item,index) in banners" :key="index" @click="handleShowImgList(index)">
        <div class="img" v-if="item.imgUrl">
          <img :src="item.imgUrl" alt="">
        </div>
        <div class="select-img" v-else>
          请选择图片
        </div>
      </div>
    </div>
    <el-dialog title="选择图片" :visible.sync="dialogTableVisible" style="overflow: hidden">
      <div class="img-list">
        <div class="img-item" :class="{on:index === nowImg}" @click="selectImg(index)" v-for="(item,index) in imgList"
             :key="item.name">
          <img :src="item.imgUrl" alt="">
          <p> {{item.title}}</p>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogTableVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSave()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Bus from '../../utils/bus'

export default {
  name: 'banner',
  props: ['option'],
  data () {
    return {
      banners: [{
        imgUrl: ''
      }],
      dialogTableVisible: false,
      imgList: [
        {
          title: 'banner1',
          imgUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1474085717,3861875123&fm=26&gp=0.jpg'
        },
        {
          title: 'banner3',
          imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594034200523&di=c28c3711d0fa881b2f541c1d89dba20b&imgtype=0&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D2424569854%2C325583504%26fm%3D214%26gp%3D0.jpg'
        },
        {
          title: 'banner2',
          imgUrl: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1040979159,3410968061&fm=26&gp=0.jpg'
        },
        {
          title: 'banner4',
          imgUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=322892719,102844361&fm=26&gp=0.jpg'
        }
      ],
      nowImg: 0,
      bannerIndex: 0
    }
  },
  mounted () {
    Bus.$on('resetOption', res => {
      this.nowOption = {}
    })
  },
  methods: {
    selectImg (index) {
      this.nowImg = index
    },
    handleShowImgList (index) {
      this.bannerIndex = index
      this.dialogTableVisible = true
    },
    handleSave () {
      const { banners, bannerIndex, imgList, nowImg } = this
      banners[bannerIndex].imgUrl = imgList[nowImg].imgUrl
      if (banners[banners.length - 1].imgUrl !== '' && banners.length < 6) {
        banners.push({ imgUrl: '' })
      }
      this.banners = banners
      this.nowOption.option.banners = banners
      Bus.$emit('handleOptionChange', this.nowOption)
      this.dialogTableVisible = false
    }
  },
  watch: {
    option () {
      this.banners = this.nowOption.option.banners
    }
  },
  computed: {
    nowOption: {
      set () {
        //
      },
      get () {
        return this.option
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  .banner-list {
    padding 20px

    .item {
      margin-top 50px
      width 300px
      height 120px
      border 1px solid blue

      img {
        width 100%
      }
    }

    .select-img {
      text-align center
      line-height 120px
    }
  }

  .img-list {
    min-height 500px

    .img-item {
      width 200px
      height 150px
      margin-right 30px
      margin-top 5px
      padding 10px
      float left
      border 1px solid #ffffff

      &.on {
        border 1px solid yellow
      }

      img {
        width 100%
      }
    }
  }

</style>
