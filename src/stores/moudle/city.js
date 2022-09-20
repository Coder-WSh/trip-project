import {
    defineStore
} from "pinia"
import {
    getcity
} from "@/servese"

const usecitystore = defineStore("city", {
    state: () => ({
        citydata: {},
        clickCity: {
            cityName: "武汉"
        }
    }),
    actions: {
        async fetchCityData() {
            const res = await getcity()
            this.citydata = res.data

        }
    }
})
export default usecitystore