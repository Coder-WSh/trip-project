<template>
  <div class="home" ref="homeRef">
    <h2>休闲旅途</h2>
    <img src="../../assets/img/home/banner.webp" alt="" />
    <home_location />
    <!-- 时间段 -->
    <home_selectTime />
    <!-- 搜索 -->
    <div class="search">
      <div class="top">
        <input type="text" placeholder="价格不限" />
        <input type="text" placeholder="人数不限" />
      </div>
      <div class="bottom">
        <input type="text" placeholder=" 关键字/位置/民宿名" />
      </div>
    </div>
    <!-- 热门建议 -->
    <home_hot />
    <button>开始搜索</button>
    <home_more />
    <button @click="getmore">获取更多</button>
    <home_search v-if="isShowSearch" class="topstack" />
    <h2>热门精选</h2>
    <home_more3 />
  </div>
</template>

<script>
export default { name: "home" }
</script>

<script setup>
import { computed, onActivated, ref, watch } from "vue"
import home_location from "./cpms/home_location.vue"
import home_hot from "./cpms/home_hot.vue"
import home_more from "./cpms/home_more.vue"
import home_more3 from "./cpms/home_more3.vue"
import useHotStore from "../../stores/moudle/home"
import { scroolHeight } from "../../hooks/useScroll"
import home_selectTime from "./cpms/home_selectTime.vue"
import home_search from "./cpms/home_search.vue"
// 好像可以没有
const homeStore = useHotStore()
// homeStore.getMore()

const homeRef = ref()
// 最下面获取下面图片的数据
//  直接解构
const { isChange, top } = scroolHeight(homeRef)
watch(isChange, (newValue) => {
  if (newValue) {
    homeStore.getMore().then(() => {
      isChange.value = false
    })
  }
})
// const isShowSearch = ref(false)
// watch(top, (newValue) => {
//   if (newValue) {
//     isShowSearch.value = newValue > 100
//   }
// }) 搜索栏优化
const isShowSearch = computed(() => {
  return top.value > 450
})

onActivated(() => {
  homeRef.value.scrollTo({
    top: top.value,
  })
})
</script>

<style lang="less" scoped>
.home {
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
  h2 {
    text-align: center;
  }

  img {
    width: 100%;
  }

  .search {
    // padding: 0 10px;

    .top {
      display: flex;

      input {
        width: 50%;
      }
    }

    .bottom {
      input {
        width: 100%;
        box-sizing: border-box;
      }
    }
  }

  button {
    width: 100%;
    border-radius: 25px;
    background-color: rgb(237, 233, 232);
  }

  .topstack {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 9;
  }
}
</style>
