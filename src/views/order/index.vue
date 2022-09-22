<template>
  <div class="order">
    <van-nav-bar title="订单列表" left-text="返回" left-arrow>
      <template #right>
        <van-icon name="orders-o" size="30" />
      </template>
    </van-nav-bar>

    <van-tabs v-model:active="activeName">
      <div v-for="(item, index) in headerInfos" class="first">
        <van-tab :title="item" :name="index">
          <One :order="orderInfos.orders" />
        </van-tab>
      </div>
    </van-tabs>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia"
import { watch, onMounted, ref } from "vue"
import useOrederStore from "../../stores/moudle/order"
import One from "./cpns/index.vue"

const headerInfos = ["全部订单", "近期订单", "未支付"]
const setInfos = ["all", "recent", "pend"]
const activeName = ref()

const orderStore = useOrederStore()
orderStore.getOrder()
const { orderInfos } = storeToRefs(orderStore)

watch(activeName, (newvalue) => {
  orderStore.getOrder(setInfos[newvalue])
})

onMounted({})
</script>

<style lang="less" scoped>
// .order {
//   .first {
//     padding-bottom: 20px;
//   }
// }
</style>
