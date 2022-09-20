<template>
  <div class="home_data">
    <div class="location">
      <div class="city" @click="changeCity">{{ clickCity.cityName }}</div>
      <div class="position" @click="getLocation1">
        {{ nowLocation }}
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia"
import { ref } from "vue"
import { useRouter } from "vue-router"
import usecitystore from "../../../stores/moudle/city"
const router = useRouter()
const changeCity = () => {
  router.push("/city")
}

const nowLocation = ref("当前位置")
const getLocation1 = () => {
  navigator.geolocation.getCurrentPosition(
    (res) => {
      var myGeo = new BMapGL.Geocoder()
      myGeo.getLocation(
        new BMapGL.Point(res.coords.longitude, res.coords.latitude),
        function (result) {
          if (result) {
            console.log()
            if (clickCity?.value.cityName?.length) {
              var num = clickCity?.value.cityName?.length + 4
            }
            nowLocation.value = result.address.slice(num)
          }
        },
      )
    },
    (err) => {
      console.log(err)
    },
  )
}

const cityStore = usecitystore()
const { clickCity } = storeToRefs(cityStore)
</script>

<style lang="less" scoped>
.home_data {
  .location {
    display: flex;
    padding: 0 10px;
    justify-content: space-between;
    align-items: center;
    height: 44px;
    font-size: 18px;

    .city {
      flex: 1;
    }

    .position {
      //  margin: 0 auto;
      display: flex;
      align-items: center;
      width: 100px;

      // line-height:50px;
      img {
        padding-left: 5px;
        //  text-align: center;

        width: 18px;
      }
    }
  }
}
</style>
