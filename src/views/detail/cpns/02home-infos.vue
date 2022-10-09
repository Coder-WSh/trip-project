<template>
  <div class="home">
    <h2>{{ info.houseName }}</h2>
    <div>
      <template v-for="(value, index) in info.houseTags">
        <span
          class="one"
          :style="{
            color: value.tagText?.color,
            backgroundColor: value.tagText?.background.color,
          }"
        >
          {{ value.tagText?.text }}
        </span>
      </template>
    </div>

    <div class="flex">
      <div class="left">
        <span class="text1">
          {{ info.commentBrief?.overall }}
        </span>
        <span class="text2">{{ info.commentBrief?.scoreTitle }}</span>
        <span>{{ info.commentBrief?.commentBrief }}</span>
        <span>{{ info.commentBrief?.commentBriefV2 }}</span>
      </div>
      <div class="right">
        {{ info.commentBrief?.totalCount }}条评论
        <van-icon name="arrow" />
      </div>
    </div>

    <div class="flex">
      <span class="text2">{{ info.nearByPosition?.address }}</span>
      <span class="text1">
        地图·周边
        <van-icon name="arrow" />
      </span>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia"
import useDetailStore from "../../../stores/moudle/detail"

const detailStore = useDetailStore()
const { info } = storeToRefs(detailStore)
</script>

<style lang="less" scoped>
.home {
  .one {
    padding: 0 3px;
  }
  .flex {
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
    padding: 10px 0;
    position: relative;
    background-color: #f5f7fa;
    align-items: center;
    .text1 {
      width: 20vw;
    }
    .text2 {
      font-size: 14px;
    }

    span {
      margin: auto 0;
      text-align: center;
      font-size: 12px;
      font-weight: 00;
      padding: 0 5px;
    }
  }
}
</style>
