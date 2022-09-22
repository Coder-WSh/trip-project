<template>
  <div class="orderfirst">
    <div class="all" v-for="(item, index) in order" :key="index">
      <top :itemdata="item" />
      <content :itemdata="item" />
      <bottom :itemdata="item" />
    </div>
  </div>
</template>

<script setup>
import content from "./content.vue"
import top from "./top.vue"
import bottom from "./bottom.vue"

const props = defineProps({
  order: {
    type: Object,
    default: [],
  },
})
</script>

<style lang="less" scoped>
.orderfirst {
  padding-bottom: 50px;
  .all {
    display: flex;
    flex-direction: column;
    margin: 0 20;
  }
}
</style>
