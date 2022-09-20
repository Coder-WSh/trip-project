<template>
  <div class="app">
    <router-view v-slot="props">
      <keep-alive include="home">
        <component :is="props.Component"></component>
      </keep-alive>
    </router-view>

    <tabbar v-show="route.meta.hideTabbar" />
  </div>
  <loading />
</template>

<script setup>
import tabbar from "@/components/tab-bar/tab-bar.vue"
import { useRoute } from "vue-router"
import loading from "./components/loading.vue"

//  userouter总是拿到当前活跃的路由对象
const route = useRoute()
</script>

<style lang="less" scoped></style>
