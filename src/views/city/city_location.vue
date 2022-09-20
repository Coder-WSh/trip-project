<template>
  <div class="city_top">
    <van-search v-model="searchvalue" placeholder="城市/地区/位置" shape="round" show-action background="#4fc08d"
      @cancel="onCancel" />
    <!-- 国内，国外导航 -->
    <!-- <van-tabs v-model:active="active">
      <template v-for="(value, key, index) in citydata">
        <van-tab :title="value.title" :name="key">
        </van-tab>
      </template>
    </van-tabs> -->
    <van-tabs v-model:active="tabactive">
      <template v-for="(value, key, index) in citydata" :key="key">
        <van-tab :title="value.title" :name="key">
        </van-tab>
      </template>
    </van-tabs>
  </div>

  <div class="city_bottom">
    <!-- <City_location_more :crruentindex=crruentindex />
    <City_location_more :crruentindex=crruentindex /> -->
    <!-- 优化，前面的每次渲染太慢了 -->
    <template v-for="(value, key, index) in citydata">
      <!-- <h2 v-show="tabActive === key">{{ value.title }}</h2> -->
      <City_location_more v-show="tabactive === key" :crruentindex="value" />
    </template>
  </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
// import { getcity } from "../../servese"
import usecitystore from '../../stores/moudle/city';
import City_location_more from './cpms/city_location_more.vue';


const router = useRouter()

const searchvalue = ref()
const tabactive = ref()


const onCancel = () => {
  router.go(-1)
}


//  最上面两个
// const citydata = ref({})
// getcity().then(res => {
//   // console.log(res);
//   citydata.value = res.data
// })
// 从store中获取数据
const cityStore = usecitystore()
cityStore.fetchCityData()
const { citydata } = storeToRefs(cityStore)

// 获取当前所在组
const crruentindex = computed(() => citydata.value[tabactive.value])

</script>


<style lang="less" scoped>
.city_top {
  position: relative;
  z-index: 6;
}

.city_bottom {
  height: calc(100vh - 98px);
  overflow-y: auto;
}
</style>