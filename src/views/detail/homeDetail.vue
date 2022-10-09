<template>
  <div class="allhome" ref="detailRef">
    <selectab
      ref="topBar"
      @in-clicking="sixClick"
      :titters="names"
      v-show="isShow"
      class="fixed"
    />
    <van-nav-bar
      title="房屋详情"
      left-arrow
      left-text="旅途"
      @click-left="onClickLeft"
    />

    <div v-if="mainPart" v-memo="[mainPart]">
      <!-- 轮播图 -->
      <swipper />
      <infos :ref="getDistance" name="描述" />
      <info2 :ref="getDistance" name="设施" />
      <landerInfos :ref="getDistance" name="房东" />
      <comments :ref="getDistance" name="评价" />
      <mustsee :ref="getDistance" name="须知" />
      <location :ref="getDistance" name="周边" />
      <description />
    </div>

    <div class="footer">
      <img src="../../assets/img/detail/icon_ensure.png" alt="" />
      <h2>弘源旅途, 永无止境!</h2>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia"
import { computed, ref, watch } from "vue"
import { useRoute, useRouter } from "vue-router"
import selectab from "../../components/select.vue"
import { scroolHeight } from "../../hooks/useScroll"
import useDetailStore from "../../stores/moudle/detail"
import swipper from "./cpns/01home-swiper.vue"
import infos from "./cpns/02home-infos.vue"
import info2 from "./cpns/03.vue"
import landerInfos from "./cpns/04.vue"
import comments from "./cpns/05.vue"
import mustsee from "./cpns/06.vue"
import location from "./cpns/07.vue"
import description from "./cpns/08.vue"

const route = useRoute()
const router = useRouter()
// 获取当前页面的所在ID
const houseId = route.params.id

// 页面返回
const onClickLeft = () => {
  router.back()
}

const detailStore = useDetailStore()
detailStore.gethomedetail(houseId)
const { detail } = storeToRefs(detailStore)
const mainPart = computed(() => detail.value.mainPart)

const detailRef = ref()
const { top } = scroolHeight(detailRef)
const isShow = computed(() => {
  return top.value >= 300
})

// 设计个对象，key为导航栏元素的名字，value为对象实例
const sections = ref({})
const names = computed(() => {
  return Object.keys(sections.value)
})

// 获取挂载实例，并把对象完善
//挂载和卸载都会执行一次
const getDistance = (value) => {
  if (!value) return
  const name = value.$el.getAttribute("name")
  sections.value[name] = value.$el
}
// 获取导航栏实例
const topBar = ref()

let isClick = false
let distance = -1
let i = 0
let indey = -1
// 点击的逻辑

const sixClick = (index) => {
  const key = Object.keys(sections.value)[index]
  const el = sections.value[key]
  let topBarHeight = topBar.value.$el.clientHeight //顶部搜索栏高度
  let section = el.offsetTop //到当前元素到页面顶部的高度
  if (index !== 0) {
    section = section - topBarHeight
  }
  // isClick = !isClick
  distance = section
  // console.log(distance)
  if (indey === index) {
    i++
    if (i % 2 === 0) {
      isClick = false
    }
  } else {
    indey = index
    isClick = true
  }

  // if ( ) {

  // }
  // 移动到相应的高度

  detailRef.value.scrollTo({
    top: section,
    behavior: "smooth",
  })
}
// 监听高度的逻辑
watch(top, (newValue) => {
  // console.log(newValue, distance)
  if (newValue >= distance) {
    // console.log("newValue", newValue, "distance", distance)
    isClick = false
  }
  if (isClick) return

  const els = Object.values(sections.value)
  const values = els.map((el) => el.offsetTop)

  let index = values.length - 1
  let topBarHeight = topBar.value.$el.clientHeight //顶部搜索栏高度
  for (let i = 0; i < values.length; i++) {
    if (values[i] > newValue + topBarHeight) {
      index = i - 1
      break
    }
  }

  // 修改子组件的

  topBar.value.count = index
})
</script>

<style lang="less" scoped>
.allhome {
  height: 100vh;
  box-sizing: border-box;
  overflow-y: auto;
  .fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }
  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 15vh;
    img {
      width: 32.8vw;
    }
  }
}
</style>
