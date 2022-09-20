<template>
  <div class="home">
    <moudle top="位置周边" bottom="查看更多周边信息">
      <div class="location" ref="location"></div>
    </moudle>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
import moudle from "../../../components/detail-componets/one.vue"
import { storeToRefs } from "pinia"
import useDetailStore from "../../../stores/moudle/detail"

const detailStore = useDetailStore()
const { position } = storeToRefs(detailStore)

const location = ref()
onMounted(() => {
  const map = new BMapGL.Map(location.value) // 创建地图实例
  const point = new BMapGL.Point(
    position.value.longitude,
    position.value.latitude,
  ) // 创建点坐标
  map.centerAndZoom(point, 15) // 初始化地图，设置中心点坐标和地图级别
  var marker = new BMapGL.Marker(point)
  map.addOverlay(marker)
  map.enableScrollWheelZoom(true)
})
</script>

<style lang="less" scoped>
.location {
  height: 300px;
}
</style>
