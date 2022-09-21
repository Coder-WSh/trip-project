<template>
  <div class="home">
    <div class="center">
      <img :src="itemdata.unitPicture" alt="" />
      <div class="time">
        <div class="left">
          <div>
            <span>{{ setTime(itemdata.checkInDate)[0] }}</span>

            <span>
              {{ setTime(itemdata.checkInDate)[1] }}
              {{ itemdata.checkInLatestTime }}
            </span>
          </div>

          <div></div>

          <div>
            <span>{{ setTime(itemdata.checkOutDate)[0] }}</span>

            <span>
              {{ setTime(itemdata.checkOutDate)[1] }}
              {{ itemdata.checkOutLatestTime }}
            </span>
          </div>
        </div>

        <div class="right">
          <div>支付总价</div>
          <span v-r>{{ itemdata.prepayAmount }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { setTime } from "../../../utils/fromat_time"
const props = defineProps({
  itemdata: {
    type: Object,
    default: () => {},
  },
})
</script>

<style lang="less" scoped>
.home {
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
      color: #fff;
      background: rgba(9, 10, 14, 0.7);
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
        padding-left: 10px;
        text-align: center;
        border-left: 1px solid #fff;
      }
    }
  }
}
</style>
