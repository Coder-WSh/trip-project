<template>
  <div class="all">
    <van-nav-bar left-text="返回" left-arrow>
      <template #title>
        <van-tabs v-model:active="topActive" type="card">
          <template v-for="(titter, index) in titers" :key="index">
            <van-tab :title="titter"></van-tab>
          </template>
        </van-tabs>
      </template>
      <template #right>
        <van-icon name="orders-o" size="4vh" />
      </template>
    </van-nav-bar>

    <div class="first" v-show="isShow">
      <van-tabs v-model:active="twoActive">
        <van-tab title="房屋">
          <muban :infos="favorGrounp.items" />
        </van-tab>
        <van-tab title="房东">
          <Lander />
        </van-tab>
      </van-tabs>
    </div>

    <div class="end" v-show="!isShow">
      <muban :infos="historyInfos.items" />
    </div>
  </div>
</template>

<script setup>
import muban from "@/components/favor-cpns/interface.vue"
import { ref, watch } from "vue"
import { storeToRefs } from "pinia"
import useFavorStore from "../../stores/moudle/favor"
import Lander from "./cpns/lander.vue"

const titers = ["我的收藏", "游览历史"]
const topActive = ref(0)

let isShow = ref(true)
watch(topActive, () => {
  isShow.value = !isShow.value
})
const twoActive = ref(0)
// const onClickTab = () => {}

const store = useFavorStore()
const { favorGrounp, historyInfos } = storeToRefs(store)
store.getInfos()
store.getInfosHistory()
</script>

<style lang="less" scoped>
.all {
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
  padding-bottom: 50px;
}
</style>
