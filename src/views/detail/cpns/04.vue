<template>
  <div class="home">
    <moudle top="房东介绍" bottom="查看房东主页">
      <div>
        <img :src="lander.topScroll" alt="" class="one" />

        <div class="top">
          <img :src="lander.hotelLogo" alt="" />

          <div class="man">
            <h3>{{ lander.hotelName }}</h3>
            <!-- 自然人啥的 -->
            <template v-for="(value, key, index) in lander.hotelTags">
              <span>{{ value.tagText.text }}</span>
            </template>
          </div>

          <div class="find">联系房东</div>
        </div>
      </div>

      <div class="bottom">
        <template v-for="(item, index) in lander.hotelSummary">
          <div class="content">
            <span class="text1">{{ item.title }}</span>
            <span class="text2">{{ item.introduction }}</span>
            <span class="text1">{{ item.tip }}</span>
          </div>
        </template>
      </div>
    </moudle>
  </div>
</template>

<script setup>
import moudle from "../../../components/detail-componets/one.vue"
import { storeToRefs } from "pinia"
import useDetailStore from "../../../stores/moudle/detail"

const detailStore = useDetailStore()
const { lander } = storeToRefs(detailStore)
</script>

<style lang="less" scoped>
.home {
  .one {
    width: 100%;
  }
  .top {
    display: flex;
    align-items: center;
    // justify-content: center;
    img {
      width: 50px;
    }
    .man {
      padding: 0 10px;
      span {
        padding-right: 5px;
        border-right: 1px solid black;
      }
    }
    .find {
      flex: 1;
      border: 3px solid black;
      text-align: center;
      height: 100%;
      border-radius: 25px;
      background-color: yellow;
    }
  }
  .bottom {
    display: flex;

    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .text1 {
        font-size: 15px;
      }
      .text2 {
        margin: 5px 0;
        font-size: 22px;
      }
    }
  }
}
</style>
