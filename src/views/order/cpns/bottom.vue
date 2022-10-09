<template>
  <div class="home">
    <div class="bottom" v-show="itemdata.orderStatus === 1">
      <div>{{ minutes }}分{{ itemdata.summary }}</div>
      <div class="end">
        <span>联系房东</span>
        <span>去支付</span>
      </div>
    </div>

    <div class="bottom1" v-show="itemdata.orderStatus === 5">
      <div class="end">
        <span>删除</span>
        <span>再次预定</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue"

const props = defineProps({
  itemdata: {
    type: Object,
    default: () => {},
  },
})

const minutes = ref(0)
const timeID = ref(null)
let count = 1
// console.log(props.itemdata.countdown)
const gettime = () => {
  timeID.value = setTimeout(() => {
    minutes.value = parseInt((props.itemdata.countdown - count) / 60)

    count++
    if (minutes.value <= 0) {
      clearInterval(timeID.value)
      return
    }
  }, 1000)
}
onMounted(() => {
  gettime()
})
</script>

<style lang="less" scoped>
.home {
  .bottom {
    display: flex;
    justify-content: space-between;
    // justify-content: flex-end;
    align-items: center;
    .end {
      display: flex;
      justify-content: flex-end;
      width: 140px;
      span {
        padding: 5px;
      }
    }
  }

  .bottom1 {
    display: flex;
    justify-content: flex-end;
    // justify-content: flex-end;
    align-items: center;
    .end {
      display: flex;
      justify-content: flex-end;
      width: 130px;
      span {
        padding: 5px;
      }
    }
  }
}
</style>
