<template>
  <div class="time">
    <div class="all">
      <div class="a" @click="showCalendar = true">
        <div class="left">
          <span class="text">入住</span>
          <div>{{ firstTime }}</div>
        </div>
        <div class="stay">共{{ day }}天</div>
        <div class="right">
          <span class="text">离店</span>
          <div>{{ nextTime }}</div>
        </div>
      </div>
      <van-calendar
        v-model:show="showCalendar"
        type="range"
        :show-confirm="false"
        @confirm="onConfirm"
      />
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia"
import { computed, ref } from "vue"
import useMainStore from "../../../stores/moudle/main"
import { getTime, time } from "../../../utils/fromat_time"
// vant3 是否显示日历
const showCalendar = ref(false)

const mainstore = useMainStore()
const { startTime, endTime } = storeToRefs(mainstore)

const firstTime = computed(() => getTime(startTime.value))
const nextTime = computed(() => getTime(endTime.value))
const day = ref(time(startTime.value, endTime.value))

const onConfirm = (value) => {
  const one = value[0]
  const two = value[1]
  mainstore.startTime = one
  mainstore.endTime = two
  day.value = time(one, two)

  showCalendar.value = false
}
// const
</script>

<style lang="less" scoped>
.time {
  .all {
    .a {
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 25px;
      background-color: rgba(118, 121, 121, 0.3);

      .text {
        font-size: 18px;
      }
    }
  }
}
</style>
