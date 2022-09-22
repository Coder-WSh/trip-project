<template>
  <div class="home">
    <div class="first" v-show="itemdata.orderStatus === 1">
      <span class="one">{{ itemdata.unitName }}</span>
      <span>{{ itemdata.orderStatusDesc }}</span>
    </div>

    <div class="first" v-show="itemdata.orderStatus === 5">
      <span class="one">{{ itemdata.unitName }}</span>
      <span>{{ itemdata.orderStatusDesc }}</span>
      <span>{{ itemdata.cancelReasonDesc }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  itemdata: {
    type: Object,
    default: () => {},
  },
})
</script>

<style lang="less" scoped>
.first {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  .one {
    display: inline-block;
    width: 50%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
