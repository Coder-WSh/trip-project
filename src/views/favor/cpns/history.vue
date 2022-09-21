<template>
  <div class="favor">
    <template v-for="(value, index, key) in historyInfos.items">
      <div class="goods">
        <div class="top">
          <img :src="value.pictureList[0]" alt="" />

          <div class="text">
            <span>{{ value.commentBrief.overall }}</span>
            <span>{{ value.commentBrief.scoreTitle }}</span>
          </div>
          <div class="right">
            <span class="pic">
              <img :src="value.logoUrl" alt="" />
              <van-icon name="like" color="red" size="30" class="pad" />

              <div class="comment">
                <van-icon name="comment-o" color="#fff" size="30" class="pad" />
                <h2>{{ value.commentBriefForCD.totalCount }}</h2>
              </div>
            </span>
          </div>
        </div>

        <div class="bottom">
          <div class="one">
            <span class="a">{{ value.address }}</span>
            <template v-for="(item, indey) in value.unitSummeries.slice(0, 2)">
              <span>{{ item.text }}</span>
            </template>
          </div>

          <div class="two">{{ value.unitName }}</div>

          <div class="three">
            <template v-for="(itam, indea) in value.houseTags">
              <span
                :style="{
                  color: itam?.color,
                  backgroundColor: itam.background?.color,
                }"
              >
                {{ itam.text }}
              </span>
            </template>
          </div>

          <div class="four">
            <span class="first" v-r>{{ value.finalPrice }}</span>
            <span class="next" v-r>{{ value.productPrice }}</span>
            <span class="end" v-if="value.priceTipBadge?.text">
              {{ value.priceTipBadge.text }}
            </span>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia"
import useFavorStore from "../../../stores/moudle/favor"

const favorStore = useFavorStore()
const { historyInfos } = storeToRefs(favorStore)
favorStore.getInfosHistory()
</script>

<style lang="less" scoped>
.favor {
  .goods {
    padding: 5px;
    .top {
      position: relative;
      img {
        width: 100%;
      }
      .text {
        position: absolute;
        left: 20px;
        bottom: 10px;
        color: #666;
        background-color: #fff;
        border-radius: 15px;

        span {
          padding: 10px;
          font-size: 18px;
        }
      }
      .right {
        .pic {
          display: flex;
          flex-direction: column;
          // justify-content: center;
          align-items: center;
          text-align: center;

          position: absolute;
          right: 5px;
          top: 25%;
          img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            padding-bottom: 10px;
          }
          .comment {
            color: #fff;
          }
          .pad {
            padding: 5px 0;
          }
        }
      }
    }
    .bottom {
      display: flex;
      flex-direction: column;
      font-size: 15px;
      div {
        margin: 3px 0;
      }
      .one {
        .a {
          color: #fff;
          background-color: black;
        }
        span {
          margin: 5px;
          color: #666;
        }
      }
      .two {
        font-weight: 600;
        font-size: 25px;
      }
      .three {
        span {
          margin: 5px;
        }
      }
      .four {
        span {
          margin: 5px;
        }
        .first {
          color: var(--primary-color);
        }
        .next {
          text-decoration: line-through;
        }
        .end {
          padding: 3px;
          background-image: linear-gradient(270deg, #f66, #ff9f9f);
          border-radius: 25px;
        }
      }
    }
  }
}
</style>
