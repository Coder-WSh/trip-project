<template>
  <div class="home">
    <div class="all" v-for="(item, index) in order" :key="index">
      <div class="first" v-show="item.orderStatus === 1">
        <span class="one">{{ item.unitName }}</span>
        <span>{{ item.orderStatusDesc }}</span>
      </div>

      <div class="first" v-show="item.orderStatus === 5">
        <span class="one">{{ item.unitName }}</span>
        <span>{{ item.orderStatusDesc }}</span>
        <span>{{ item.cancelReasonDesc }}</span>
      </div>

      <div class="center">
        <img :src="item.unitPicture" alt="" />
        <div class="time">
          <div class="left">
            <div>
              <span>{{ setTime(item.checkInDate)[0] }}</span>

              <span>
                {{ setTime(item.checkInDate)[1] }} {{ item.checkInLatestTime }}
              </span>
            </div>

            <div></div>

            <div>
              <span>{{ setTime(item.checkOutDate)[0] }}</span>

              <span>
                {{ setTime(item.checkOutDate)[1] }}
                {{ item.checkOutLatestTime }}
              </span>
            </div>
          </div>

          <div class="right">
            <div>支付总价</div>
            <span v-r>{{ item.prepayAmount }}</span>
          </div>
        </div>
      </div>

      <div class="bottom" v-show="item.orderStatus === 1">
        <div>{{ item.summary }}</div>
        <div class="end">
          <span>联系房东</span>
          <span>去支付</span>
        </div>
      </div>

      <div class="bottom" v-show="item.orderStatus === 5">
        <div class="end">
          <span>删除</span>
          <span>再次预定</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { setTime } from "../../../utils/fromat_time"

const props = defineProps({
  order: {
    type: Object,
    default: [],
  },
})
</script>

<style lang="less" scoped>
.home {
  margin-bottom: 50px;
  .all {
    display: flex;
    flex-direction: column;
    margin: 0 20px;
    .first {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 30px;
      .one {
        display: inline-block;
        width: 50%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .center {
      position: relative;
      img {
        width: 100%;
      }
      .time {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        .left {
          flex: 1;
          display: flex;

          div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            span {
              display: inline-block;
              width: 80px;
              height: 20px;
            }
          }
        }
        .right {
          text-align: center;
        }
      }
    }

    .bottom {
      display: flex;
      justify-content: space-between;
      // justify-content: flex-end;
      align-items: center;
      .end {
        display: flex;
        justify-content: flex-end;
        width: 130px;
        span {
          padding: 5px;
        }
      }
    }
  }
}
</style>
