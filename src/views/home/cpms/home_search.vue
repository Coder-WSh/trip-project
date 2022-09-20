<template>
  <div class="one">
    <div class="content">
      <div class="left">
        <div class="top">
          住
          <span>{{ first }}</span>
        </div>
        <div class="bottom">
          离
          <span>{{ next }}</span>
        </div>
      </div>
      <div class="right">
        <input type="text" placeholder="关键字/位置/民宿" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "@vue/reactivity"
import { storeToRefs } from "pinia"
import useMainStore from "../../../stores/moudle/main"
import { getTime } from "../../../utils/fromat_time"
const mainstore = useMainStore()
const { startTime, endTime } = storeToRefs(mainstore)
const first = computed(() => getTime(startTime.value, "MM.DD"))
const next = computed(() => getTime(endTime.value, "MM.DD"))
</script>

<style lang="less" scoped>
.one {
  background-color: white;
  height: 50px;

  .content {
    display: flex;
    line-height: 100%;
    padding: 10px;
    height: 100%;
    background-color: #f2f4f6;

    .left {
      display: flex;
      flex-direction: column;
      align-items: center;
      border-right: 1px solid #fff;

      .top {
        flex: 1;
        margin: 0 auto;
        line-height: 100%;
      }

      .bottom {
        flex: 1;
        margin: 0 auto;
        line-height: 100%;
      }
    }

    .right {
      display: flex;
      flex: 1;

      input {
        flex: 1;
        width: 100%;
      }
    }
  }
}
</style>
