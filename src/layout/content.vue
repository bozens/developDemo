<template>
    <div @drop.stop="drop_handler($event)" @dragover="dragover_handler($event)"  @dragover.prevent class="phone">
     <div class="phone-content">
       <div v-for="(item,index) in pageList" :key="index" class="item" >
         <div class="view"  @click="showEdit(index,item)">
           <div class="place-holder" @drop.stop="drop_handler_item($event,index)" @dragover="dragover_handler_item($event,index)"
                :class="{on:inItem === index}">
              <p v-if="inItem === index">放在这里</p>
           </div>
           <all  :info="item"></all>
         </div>
         <div class="edit" v-if="index === nowIndex">
           <div class="up" @click="prev(index)" v-if="nowIndex!==0">
             <i class="el-icon-caret-top"></i>
           </div>
           <div class="down" @click="moveNext(index)" v-if="nowIndex !== pageList.length-1">
             <i class="el-icon-caret-bottom"></i>
           </div>
           <div class="delete" @click="handleDelete(index)">
             <i class='el-icon-delete-solid'></i>
           </div>
         </div>
       </div>
     </div>
    </div>
</template>

<script>
import util from '../utils/util'
import Bus from '../utils/bus'
import all from '../components/all'
import { getConfig } from '../config/compoents'
export default {
  name: 'Content',
  components: {
    all
  },
  data () {
    return {
      pageList: [],
      nowIndex: 0,
      inItem: 99,
      config: {}
    }
  },
  mounted () {
    this.config = getConfig()
    Bus.$on('handleOptionChange', res => {
      const list = this.pageList
      list.forEach(item => {
        if (item.compId === res.compId) {
          item = res
        }
      })
      this.pageList = list
    })
  },
  methods: {
    drop_handler (e) {
      const data = e.dataTransfer.getData('cmp-type')
      const config = JSON.parse(JSON.stringify(this.config))
      const info = Object.assign({}, config[data])
      info.compId = util.createDomID()
      const { pageList } = this
      pageList.push(info)
      this.changeOptionConfig(info)
      this.nowIndex = this.pageList.length - 1
    },
    dragover_handler (e) {
    },
    changeOptionConfig (info) {
      Bus.$emit('resetOption')
      Bus.$emit('changeOption', info)
    },
    drop_handler_item (e, index) {
      const data = e.dataTransfer.getData('cmp-type')
      const info = this.config[data]
      info.compId = util.createDomID()
      this.insert(index, info)
      this.changeOptionConfig(info)
      this.nowIndex = index
      this.inItem = 99
    },
    dragover_handler_item (e, index) {
      this.inItem = index
    },
    showEdit (index, item) {
      this.changeOptionConfig(item)
      this.nowIndex = index
    },
    moveNext (index) {
      const tmp = this.pageList[index + 1]
      this.$set(this.pageList, index + 1, this.pageList[index])
      this.$set(this.pageList, index, tmp)
      this.nowIndex = index + 1
    },
    prev (index) {
      const tmp = this.pageList[index]
      this.$set(this.pageList, index, this.pageList[index - 1])
      this.$set(this.pageList, index - 1, tmp)
      this.nowIndex = index - 1
    },
    insert (index, value) {
      const arr = this.pageList
      arr.splice(index, 0, value)
    },
    handleDelete (index) {
      const arr = this.pageList
      arr.splice(index, 1)
      this.pageList = arr
    }
  }
}
</script>

<style scoped lang="stylus">
  .phone{
    width: 100%;
    height: 100%
    padding 20px
    overflow-y: scroll;
    .phone-content{
      width 540px
      min-height 960px
      margin 40px auto
      border 1px solid #eee;
      .place-holder{
        height 20px
        background-image: linear-gradient(#fff 2px, transparent 0), linear-gradient(90deg, #999 1px, transparent 0);
        background-size: 3px 3px, 3px 3px;
        &.on{
          height 50px
          text-align center
          border 1px solid red
          color red
          margin 2px
        }
      }
      .item{
        position: relative
        background: #fff
        .edit{
          position absolute
          right -50px
          top 10px
          div{
            background #f4f4f4
            padding 10px
            font-size 20px
            margin-bottom 5px
          }
        }
      }
    }
  }
</style>
