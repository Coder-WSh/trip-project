<template>
  <div class="all">
    <van-nav-bar left-text="返回" left-arrow>
      <template #title>
        <van-tabs v-model:active="topActive" type="card">
          <template v-for="(titter, index) in titers">
            <van-tab :title="titter"></van-tab>
          </template>
        </van-tabs>
      </template>
      <template #right>
        <van-icon name="orders-o" size="30" />
      </template>
    </van-nav-bar>

    <div class="first" v-show="isShow">
      <van-tabs v-model:active="twoActive">
        <van-tab title="房屋">
          <house />
        </van-tab>
        <van-tab title="房东">
          <lander />
        </van-tab>
      </van-tabs>
    </div>

    <div class="end" v-show="!isShow">
      <History />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue"
import house from "./cpns/house.vue"
import lander from "./cpns/lander.vue"
import History from "./cpns/history.vue"

const titers = ["我的收藏", "游览历史"]
const topActive = ref(0)

let isShow = ref(true)
watch(topActive, () => {
  isShow.value = !isShow.value
})
const twoActive = ref(0)
// const onClickTab = () => {}
</script>

<style lang="less" scoped>
.all {
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
  padding-bottom: 50px;
}
</style>
