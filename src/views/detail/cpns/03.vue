<template>
  <div class="home-three">
    <moudle top="房屋设施" bottom="查看全部设施">
      <template v-for="(value, index) in icon.houseFacilitys" :key="index">
        <div class="item" v-if="icon.facilitySort.includes(index)">
          <div class="left">
            <img :src="value.icon" alt="" />
            {{ value.groupName }}
          </div>
          <div class="right">
            <template v-for="(item, indey) in value.facilitys.slice(0, 4)">
              <span class="one">
                <img src="../../../assets/img/detail/icon_check.png" alt="" />
                {{ item.name }}
              </span>
            </template>
          </div>
        </div>
      </template>
    </moudle>
  </div>
</template>

<script setup>
import moudle from "../../../components/detail-componets/one.vue"

import { storeToRefs } from "pinia"
import useDetailStore from "../../../stores/moudle/detail"

const detailStore = useDetailStore()
const { icon } = storeToRefs(detailStore)
</script>

<style lang="less" scoped>
.home-three {
  display: flex;
  flex-direction: column;
  background-color: #f7f9fb;
  .item {
    display: flex;
    .left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 75px;
      width: 100px;
      img {
        width: 25px;
      }
    }
    .right {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      .one {
        display: flex;
        align-items: center;
        // justify-content: center;
        width: 50%;
        // margin: 4px 0;
      }
    }
  }
}
</style>
