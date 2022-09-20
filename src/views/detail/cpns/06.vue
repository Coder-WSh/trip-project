<template>
  <div class="home">
    <moudle top="预订须知" bottom="">
      <div class="all">
        <template v-for="(item, index) in look.orderRules">
          <div class="one" v-show="!isShow">
            <span class="first">{{ item.title }}</span>
            <span>{{ item.introduction }}</span>
            <span v-show="item.tips" class="show" @click="change">
              查看说明
            </span>
          </div>
          <span v-show="isShow" @click="change">{{ item.tips }}</span>
        </template>
      </div>
    </moudle>
  </div>
</template>

<script setup>
import { ref } from "vue"
import moudle from "../../../components/detail-componets/one.vue"

import { storeToRefs } from "pinia"
import useDetailStore from "../../../stores/moudle/detail"

const detailStore = useDetailStore()
const { look } = storeToRefs(detailStore)

const isShow = ref(false)
const change = () => {
  isShow.value = !isShow.value
}
</script>

<style lang="less" scoped>
.home {
  .all {
    display: flex;
    flex-direction: column;
    .one {
      display: flex;
      margin: 3px;
      position: relative;
      .first {
        width: 70px;
        padding-right: 5px;
      }
      .show {
        position: absolute;
        bottom: 0;
        right: 5px;
      }
    }
  }
}
</style>
