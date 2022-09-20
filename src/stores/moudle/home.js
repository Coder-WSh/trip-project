import {
    defineStore
} from "pinia";
import {
    getCategories,
    getHot,
    getMore
} from "../../servese/modules/home";

const useHotStore = defineStore("hotInfo", {
    state: () => ({
        hotInfo: [],
        categories: [],
        more: [],
        indexPage: 1
    }),
    actions: {
        async getHotInfo() {
            const res = await getHot()
            this.hotInfo = res.data
        },
        async getCag() {
            const res = await getCategories()
            this.categories = res.data
        },
        async getMore() {
            const res = await getMore(this.indexPage)
            this.more.push(...res.data)
            this.indexPage++
        }
    }
})

export default useHotStore