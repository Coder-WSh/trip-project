<template>
  <div class="content9">
    <div class="home">
      <img :src="data.image.url" alt="" />

      <div class="home-one">
        <div class="text pad">{{ data.summaryText }}</div>
        <span class="two">{{ data.houseName }}</span>
        <div class="three">
          <van-rate v-model="value" readonly allow-half />
          <span v-r>{{ data.finalPrice }}</span>
        </div>
        <!-- 
            {{ data.productPrice }}
            {{ data.priceTipBadge.text }}
            {{ data.commentScore }} -->

        <!-- {{ data.location }} -->
      </div>
      <!-- <span>{{ data.houseName }}</span> -->
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
})
const value = Number(props.data.commentScore)
</script>

<style lang="less" scoped>
.content9 {
  width: 50%;
  .home {
    position: relative;
    box-sizing: border-box;
    padding: 5px;
    // height: 30vh;

    img {
      width: 100%;
    }

    .home-one {
      padding: 10px;
      position: absolute;
      bottom: 5px;
      left: 0;
      right: 0;

      .text {
        margin-left: 3px;
        font-size: 13px;
        color: #fff;
      }

      .two {
        font-size: 18px;
        color: #fff;
        // 要研究
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .three {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: #fff;
        span {
          padding-left: 10px;
        }
      }

      .pad {
        padding: 3px 0;
      }
    }
  }
}
</style>
