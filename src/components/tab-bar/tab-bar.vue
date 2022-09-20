<template>
  <div class="tab-bar">
    <van-tabbar v-model="active" route active-color="#ff9854">
      <template v-for="(item, index) in tabbarData">
        <van-tabbar-item :to="item.path">
          <template #default>
            <span>{{ item.text }}</span>
          </template>
          <template #icon>
            <img v-if='active !== index' :src="urlConvertion(item.image)" />
            <img v-else :src="urlConvertion(item.imageActive)" />
          </template>
        </van-tabbar-item>
      </template>

    </van-tabbar>

  </div>
</template>


<script setup>
// 动态引入
import tabbarData from '@/assets/data/tabbar.js'
//
import { computed, ref, watch } from 'vue';
// 引用路由
// import { useRouter } from 'vue-router';
// const router = useRouter()
//vant3 自带路由，所以不需要转换
import { urlConvertion } from '@/utils/url_convertion.js'
import { useRoute } from 'vue-router';
// 网址转换下面的active不变，但是route.path发生了改变对他进行监听，然后把它的index赋予给active

const route = useRoute()
watch(route, (newroute) => {
  const index = tabbarData.findIndex(item => item.path === newroute.path)
  if (index === -1) return
  active.value = index
})

//切换页面
const active = ref(0)


</script>

<style lang="less" scoped>
.tab-bar {


  // --van-tabbar-height:200px;
  // --van-tabbar-item-icon-size:35px;
  img {
    height: 26px;
  }
}
</style>