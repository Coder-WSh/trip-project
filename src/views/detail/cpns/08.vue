<template>
  <div class="home">
    <moudle top="价格说明" bottom="">
      {{ priceDescription.introduction }}
    </moudle>
  </div>
</template>

<script setup>
import moudle from "../../../components/detail-componets/one.vue"
import { storeToRefs } from "pinia"
import useDetailStore from "../../../stores/moudle/detail"

const detailStore = useDetailStore()
const { priceDescription } = storeToRefs(detailStore)
</script>

<style lang="less" scoped></style>
