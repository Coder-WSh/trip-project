<template>
  <div class="home">
    <van-swipe :autoplay="3000" indicator-color="white">
      <!-- 轮播图 -->
      <template v-for="(item, index) in mainPart" :key="index">
        <van-swipe-item>
          <img :src="item.url" />
        </van-swipe-item>
      </template>

      <!-- 文字 -->
      <template #indicator="{ active, total }">
        <div class="custom-indicator">
          <template v-for="(value, key, index) in sweipGroup" :key="key">
            <span
              :class="{ active: mainPart[active]?.enumPictureCategory == key }"
            >
              {{ replaceStr(value[0].title) }}
              <span v-if="mainPart[active]?.enumPictureCategory == key">
                {{ getActive(mainPart[active]) }}/{{ value.length }}
              </span>
            </span>
          </template>
        </div>
      </template>
      
    </van-swipe>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia"
import useDetailStore from "../../../stores/moudle/detail"

const detailStore = useDetailStore()
const { mainPart } = storeToRefs(detailStore)

const sweipGroup = {}
// 遍历数组，取出里面不同的值，将值赋值给key，再把这个对象赋值给value
for (const value of mainPart.value) {
  let arrageValue = sweipGroup[value.enumPictureCategory]
  if (!arrageValue) {
    arrageValue = []
    sweipGroup[value.enumPictureCategory] = arrageValue
  }
  arrageValue.push(value)
}
// 找到相应的index
const getActive = (item) => {
  const valueArray = sweipGroup[item.enumPictureCategory]
  return valueArray.findIndex((data) => data === item) + 1
}

const replaceStr = (value) => {
  return value.replace(": ", "").replace("【", "").replace("】", "")
}
</script>

<style lang="less" scoped>
.home {
  display: flex;
  position: relative;
  img {
    width: 100%;
  }
  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    padding: 2px 5px;
    background: rgba(0, 0, 0, 0.2);

    .active {
      padding: 0 3px;
      border-radius: 5px;
      background-color: #fff;
    }
  }
}
</style>
