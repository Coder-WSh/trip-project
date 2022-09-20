<template>
  <div class="home" v-show="isLoading" @click="showLoading">
    <div class="bg">
      <img src="../assets/img/home/full-screen-loading.gif" alt="" />
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import useMainStore from "../stores/moudle/main";

const mainStore = useMainStore();
const { isLoading } = storeToRefs(mainStore);

const showLoading = () => {
  isLoading.value = false;
};
</script>

<style lang="less" scoped>
.home {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 88;

  display: flex;
  justify-content: center;
  align-items: center;

  .bg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 120px;
    background: url(../assets/img/home/loading-bg.png) 0 0 / 100% 100%;

    img {
      width: 70px;
      height: 70px;
    }
  }
}
</style>
