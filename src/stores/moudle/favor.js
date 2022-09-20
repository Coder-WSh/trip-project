import { defineStore } from "pinia"
import { getFavorGrounp,getFavorGrounpHistory } from "../../servese/modules/favor.js"
const useFavorStore = defineStore("favor", {
  state: () => ({
    favorGrounp: {},
    historyInfos:{}
  }),
  actions: {
    async getInfos() {
      const res = await getFavorGrounp()
      this.favorGrounp = res.data.data
    },
    async getInfosHistory() {
      const res = await getFavorGrounpHistory()
      this.historyInfos = res.data.data
    },
  },
})
export default useFavorStore
