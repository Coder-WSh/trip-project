<template>
  <div class="home">
    <moudle top="热门评论" :bottom="`查看全部${comment.totalCount}条评论`">
      <div class="top">
        <div class="one">
          <div class="left">
            <span>{{ comment.overall }}</span>
            <van-rate
              v-model="value"
              icon="like"
              void-icon="like-o"
              :size="10"
              readonly
              allow-half
            />
          </div>

          <div class="content">
            <span>{{ comment.scoreTitle }}</span>
            <span>{{ comment.totalCount }}条评论</span>
            <van-rate v-model="value" :size="10" readonly allow-half />
          </div>
        </div>

        <div class="right">
          <template v-for="(item, index) in comment.subScores">
            <span>{{ item }}</span>
          </template>
        </div>
      </div>

      <div class="content">
        <template v-for="(itam, indey) in comment.commentTagVo">
          <div class="text">{{ itam.text }}</div>
        </template>
      </div>

      <div class="bottom">
        <div class="top">
          <img :src="comment.comment.userAvatars" alt="" />

          <div class="zhong">
            <span class="first">
              {{ comment.comment.userName }}
              <div v-if="comment.comment.memberLevelIcon">
                <img :src="comment.comment?.memberLevelIcon" alt="" />
              </div>
            </span>

            {{ comment.comment.checkInDate }}
          </div>
        </div>
      </div>
      <div>
        {{ comment.comment.commentDetail }}
      </div>
    </moudle>
  </div>
</template>

<script setup>
import { ref } from "vue"
import moudle from "../../../components/detail-componets/one.vue"

import { storeToRefs } from "pinia"
import useDetailStore from "../../../stores/moudle/detail"

const detailStore = useDetailStore()
const { comment } = storeToRefs(detailStore)

const value = ref(comment.value.overall)
</script>

<style lang="less" scoped>
.home {
  .top {
    display: flex;
    align-items: center;
    .one {
      flex: 1;
      display: flex;
      .left {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 30px;
        font-weight: 800;
      }
      .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        margin: 0 10px;
        font-size: 10px;
      }
    }
    .right {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      span {
        padding: 5px;
        font-size: 13px;
      }
    }
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    .text {
      margin: 3px 5px;
      padding: 5px;
      // border: 1px solid black;
      border-radius: 15px;
      background-color: rgb(245, 245, 245);
    }
  }
  .bottom {
    display: flex;
    background-color: rgb(245, 245, 245);
    .top {
      margin-bottom: 10px;
      img {
        width: 40px;
        border-radius: 20px;
      }
      .zhong {
        display: flex;
        padding-left: 10px;
        flex-direction: column;
        .first {
          img {
            width: 50px;
            height: 15px;
          }
        }
      }
    }
  }
}
</style>
