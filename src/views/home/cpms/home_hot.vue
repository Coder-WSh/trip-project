<template>
  <div class="hotSussage">
    <template v-for="(item, index) in hotInfo" :key="index">
      <div
        class="item"
        @click="clickhot(item)"
        :style="{
          color: item.tagText.color,
          background: item.tagText.background.color,
        }"
      >
        {{ item.tagText.text }}
      </div>
    </template>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia"
import useHotSegStore from "../../../stores/moudle/home"
const hotstore = useHotSegStore()
hotstore.getHotInfo()
const { hotInfo } = storeToRefs(hotstore)

const clickhot = (item) => {
  console.log(item)
}
</script>

<style lang="less" scoped>
.hotSussage {
  display: flex;
  flex-wrap: wrap;

  .item {
    margin: 5px 5px;
    padding: 5px 5px;
  }
}
</style>
