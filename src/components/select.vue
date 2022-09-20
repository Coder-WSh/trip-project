<template>
  <div class="home">
    <template v-for="(item, index) in titters" :key="index">
      <span @click="setActive(index)" :class="{ active: index === count }">
        {{ item }}
      </span>
    </template>
  </div>
</template>

<script setup>
import { ref } from "vue"

defineProps({
  titters: {
    type: Array,
    default: () => [],
  },
})

const emits = defineEmits(["inClicking"])
let count = ref(0)
const setActive = (index) => {
  count.value = index
  emits("inClicking", index)
}
const setCount = (index) => {
  count.value = index
}

defineExpose({
  setCount,
  count,
})
</script>

<style lang="less" scoped>
.home {
  display: flex;
  background-color: #fff;

  span {
    flex: 1;
    padding: 5px 0;
    text-align: center;
  }
  .active {
    border-bottom: 3px solid var(--primary-color);
  }
}
</style>
