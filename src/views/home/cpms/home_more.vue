<template>
    <div class="home_more">
        <template v-for="(item, index) in categories" :key="item.id">
            <div class="one">
                <img :src="item.pictureUrl" alt="">
                <span>{{ item.title }}</span>
            </div>
        </template>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import useHotStore from '../../../stores/moudle/home';

const homeStore = useHotStore()
homeStore.getCag()
const { categories } = storeToRefs(homeStore)
</script>

<style lang="less" scoped>
.home_more {
    display: flex;

    overflow-x: auto;

    &::-webkit-scrollbar {
        display: none;
    }

    .one {
        display: flex;
        flex-direction: column;
        padding: 10px;
        text-align: center;

        img {
            width: 60px;
        }
    }
}
</style>