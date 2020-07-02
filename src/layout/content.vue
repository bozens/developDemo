<template>
    <div @drop.stop="drop_handler($event)" @dragover="dragover_handler($event)"  @dragover.prevent class="phone">
     <div class="phone-content">
       <div v-for="(item,index) in pageList" :key="index" class="item" draggable="true">
         <div class="view"  @click="showEdit(index,item)">
           <banner :type="item.type"></banner>
         </div>
         <div class="edit" v-if="index === nowIndex">
           <div class="up" @click="prev(index)" v-if="nowIndex!==0">up</div>
           <div class="down" @click="moveNext(index)" v-if="nowIndex !== pageList.length-1">down</div>
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
      nowIndex: 0
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
    }
  }
}
</script>

<style scoped lang="stylus">
  .phone{
    width: 100%;
    height: 100%;
    .phone-content{
      .item{
        position: relative
        padding-bottom 20px
        background: #fff;
        background-image: linear-gradient(#fff 2px, transparent 0), linear-gradient(90deg, #999 1px, transparent 0);
        background-size: 3px 3px, 3px 3px;
        .edit{
          position absolute
          right -50px
          top 10px
        }
      }
    }
  }
</style>
