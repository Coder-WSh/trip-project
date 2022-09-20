<template>
  <div class="home_more">
    <div class="allgoods">
      <template v-for="(item, index) in more" :key="item.data.houseId">
        <home_Content9
          v-if="item.discoveryContentType === 9"
          :data="item.data"
          @click="goToAnotherHome(item)"
        />
        <home_Content3
          v-else-if="item.discoveryContentType === 3"
          :data="item.data"
          @click="goToAnotherHome(item)"
        />
      </template>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia"
import useHotStore from "../../../stores/moudle/home"
import home_Content9 from "../../../components/tab-bar/home_Content9.vue"
import home_Content3 from "../../../components/tab-bar/home_Content3.vue"
import router from "../../../router"

const homeStore = useHotStore()
homeStore.getMore()
const { more } = storeToRefs(homeStore)

const goToAnotherHome = (item) => {
  router.push("/homeDetail/" + item.data.houseId)
}
</script>

<style lang="less" scoped>
.home_more {
  padding: 5px;
  
  .allgoods {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
