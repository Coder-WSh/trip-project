<template>
  <div class="content3">
    <div class="more3">
      <img :src="data?.image?.url" alt="" />

      <div class="content">
        <div class="one text">
          <div class="all">
            <img src="../../assets/img/home/location.png" alt="" />
            <span class="text">{{ data.location }}</span>
          </div>
          <div>{{ data.summaryText }}</div>
        </div>

        <span>{{ data?.houseName }}</span>

        <div class="two text2">
          <div class="pad first" v-r>{{ data.finalPrice }}</div>
          <div class="pad next" v-r>{{ data.productPrice }}</div>
          <div class="pad end" v-r>{{ data?.priceTipBadge?.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<style lang="less" scoped>
.content3 {
  width: 50%;
  .more3 {
    padding: 3px;

    overflow: hidden;
    box-sizing: border-box;
    img {
      width: 100%;
    }
    .content {
      padding-left: 10px;
      .one {
        .all {
          display: flex;
          padding: 0 5px;
          align-items: center;
          img {
            width: 15px;
            height: 15px;
          }
        }
      }
      span {
        margin: 5px 0;
        font-size: 18px;

        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .two {
        display: flex;
        align-items: center;
        .pad {
          padding-right: 15px;
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

      .text {
        font-size: 13px;
        color: #666;
      }
      .text2 {
        font-size: 15px;
        color: #666;
      }
    }
  }
}
</style>
