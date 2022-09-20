<template>
  <div class="home">
    <div class="top">
      <h2>{{ top }}</h2>
    </div>

    <div class="content">
      <slot></slot>
    </div>

    <div class="bottom">
      <h2>
        {{ bottom }}
        <van-icon name="arrow" v-if="bottom != ''" />
      </h2>
    </div>
  </div>
</template>

<script setup>
defineProps({
  top: {
    type: String,
    default: "",
  },
  bottom: {
    type: String,
    default: "查看全部",
  },
})
</script>

<style lang="less" scoped>
.home {
  .top {
    padding: 10px 0;
    background-color: aquamarine;
  }
  .bottom {
    display: flex;
    justify-content: flex-end;

    height: 45px;
    line-height: 45px;
    color: var(--primary-color);
  }
}
</style>
