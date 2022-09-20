<template>
    <div class="more">
        <van-index-bar :index-list="listIndex">
            <van-index-anchor index="热门城市" />
            <div class="list">
                <template v-for="(city, index) in crruentindex.hotCities">
                    <div class="hotcity" @click="selectCity(city)">{{ city.cityName }}</div>
                </template>
            </div>


            <template v-for="(item, kex) in crruentindex?.cities">
                <van-index-anchor :index="item.group" />
                <template v-for="(city, index) in item.cities">
                    <van-cell :title="city.cityName" @click="selectCity(city)" />
                </template>
            </template>
        </van-index-bar>


        <!-- <template v-for="(item, kex) in crruentindex?.cities">
            <div class="group">标记：{{ item.group }}</div>
            <template v-for="(city, index) in item.cities">
                <div class="city">{{ city.cityName }}</div>
            </template>
        </template> -->
    </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { useRouter } from 'vue-router';
import usecitystore from '../../../stores/moudle/city';

const props = defineProps({
    crruentindex: {
        type: Object,
        default: () => ({})
    }
})

const listIndex = computed(() => {
    const list = props.crruentindex.cities.map(item => item.group)
    list.unshift("#")
    return list
})

const router = useRouter()
const cityStore = usecitystore()
const selectCity = (city) => {
    cityStore.clickCity = city
    router.back()
}
</script>

<style lang="less" scoped>
.list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px;
    padding-right: 25px;


    .hotcity {

        width: 70px;
        height: 28px;
        border-radius: 14px;
        background-color: #fff4ec;
        text-align: center;
        line-height: 28px;
        margin: 3px 0;
    }
}
</style>