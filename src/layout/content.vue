<template>
    <div @drop.stop="drop_handler($event)" @dragover="dragover_handler($event)"  @dragover.prevent class="phone">
     <div class="phone-content">
       <div v-for="(item,index) in pageList" :key="index" class="item" >
         <div class="view"  @click="showEdit(index,item)">
           <div class="place-holder" @drop.stop="drop_handler_item($event,index)" @dragover="dragover_handler_item($event,index)"
                :class="{on:inItem === index}">
              <p v-if="inItem === index">放在这里</p>
           </div>
           <banner :type="item.type"></banner>
         </div>
         <div class="edit" v-if="index === nowIndex">
           <div class="up" @click="prev(index)" v-if="nowIndex!==0">
             <i class="el-icon-caret-top"></i>
           </div>
           <div class="down" @click="moveNext(index)" v-if="nowIndex !== pageList.length-1">
             <i class="el-icon-caret-bottom"></i>
           </div>
           <div class="delete">
             <i class='el-icon-delete-solid'></i>
           </div>
         </div>
       </div>
     </div>
    </div>
</template>

<script>
import banner from '../components/banner'
export default {
  name: 'Content',
  components: {
    banner
  },
  data () {
    return {
      pageList: [],
      nowIndex: 0,
      inItem: 99
    }
  },
  methods: {
    drop_handler (e) {
      const data = e.dataTransfer.getData('cmp-type')
      this.pageList.push({ type: data })
      this.nowIndex = this.pageList.length - 1
    },
    dragover_handler (e) {
    },
    drop_handler_item (e, index) {
      const data = e.dataTransfer.getData('cmp-type')
      const item = { type: data }
      this.insert(index, item)
      this.nowIndex = index
      this.inItem = 99
    },
    dragover_handler_item (e, index) {
      this.inItem = index
    },
    showEdit (index, item) {
      this.nowIndex = index
    },
    moveNext (index) {
      console.log('next')
      const tmp = this.pageList[index + 1]
      this.$set(this.pageList, index + 1, this.pageList[index])
      this.$set(this.pageList, index, tmp)
      this.nowIndex = index + 1
    },
    prev (index) {
      console.log('prev')
      const tmp = this.pageList[index]
      console.log(this.pageList)
      this.$set(this.pageList, index, this.pageList[index - 1])
      this.$set(this.pageList, index - 1, tmp)
      console.log(this.pageList)
      this.nowIndex = index - 1
    },
    insert (index, value) {
      const arr = this.pageList
      arr.splice(index, 0, value)
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
      width 375px
      min-height 675px
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
