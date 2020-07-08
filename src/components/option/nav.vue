<template>
    <div class="nav-option">
      <div class="nav-list">
          配置
        <div class="nav-item" v-for="(item,index) in navList" :key="index">
          <el-form ref="form" :model="item" label-width="80px">
            <el-form-item label="导航名称">
              <el-input v-model="item.title"></el-input>
            </el-form-item>
            <el-form-item label="图标" >
              <div class="icon-box" @click="handleShowImgList(index)">
                <div class="img" v-if="item.icon">
                  <img :src="item.icon" alt="">
                </div>
                <div class="select-img" v-else>
                  添加
                </div>
              </div>
            </el-form-item>
            <el-form-item label="导航路径">
                <div class="link-box" >
                  <div class="link">   {{item.link}} </div>
                  <el-button> 配置</el-button>
                </div>
            </el-form-item>
          </el-form>
        </div>
        <div class="btn">
          <el-button @click="addNav" size="mini">添加</el-button>
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
  name: 'NavOption',
  props: ['option'],
  data () {
    return {
      navList: [{
        title: '',
        icon: '',
        link: ''
      }],
      dialogTableVisible: false,
      imgList: [
        {
          title: 'icon1',
          imgUrl: 'http://182.92.242.32:7010/static/files/2020/07/08/a1e9648a-c0bf-11ea-a160-00163e16af49.png'
        },
        {
          title: 'icon2',
          imgUrl: 'http://182.92.242.32:7010/static/files/2020/07/08/a3df667c-c0bf-11ea-a160-00163e16af49.png'
        },
        {
          title: 'icon3',
          imgUrl: 'http://182.92.242.32:7010/static/files/2020/07/08/a604ac6e-c0bf-11ea-a160-00163e16af49.png'
        },
        {
          title: 'icon4',
          imgUrl: 'http://182.92.242.32:7010/static/files/2020/07/08/a7cd178e-c0bf-11ea-a160-00163e16af49.png'
        }
      ],
      nowImg: 0,
      bannerIndex: 0
    }
  },
  mounted () {
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
      const { navList, bannerIndex, imgList, nowImg } = this
      navList[bannerIndex].icon = imgList[nowImg].imgUrl
      this.navList = navList
      this.nowOption.option.navs = navList
      Bus.$emit('handleOptionChange', this.nowOption)
      this.dialogTableVisible = false
    },
    addNav () {
      const { navList } = this
      if (navList.length < 8) {
        navList.push({
          title: '导航标题',
          icon: '',
          link: ''
        })
      }
      this.navList = navList
      this.nowOption.option.navs = navList
      Bus.$emit('handleOptionChange', this.nowOption)
    }
  },
  watch: {
    option () {
      this.navList = this.nowOption.option.navs
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
  .nav-option{
    padding 20px
    .nav-list{
      .nav-item{
        margin-top 30px
        min-height 100px
        padding 15px 5px
        border 1px solid #47bfff
        .icon-box{
          width 40px
          height 40px
          border 1px solid #cbcbcb
          border-radius 5px
          text-align center
          line-height 30px
          img{
            width 40px
            height 40px
          }
        }
        .link-box{
          display flex
          .link{
            overflow: hidden;
            text-overflow:ellipsis
            width 70%
          }
        }
      }
    }
    .btn{
      margin-top 20px
    }
  }
  .img-list {
    min-height 300px

    .img-item {
      width 60px
      height 60px
      margin-right 30px
      margin-top 5px
      padding 10px
      float left
      border 1px solid #ffffff
      text-align center
      &.on {
        border 1px solid yellow
      }

      img {
        width 100%
      }
    }
  }
</style>
