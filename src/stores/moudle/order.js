import { defineStore } from "pinia"
import { getOrderInfos } from "../../servese/modules/order"

const useOrederStore = defineStore("oreder", {
  state: () => ({
    orderInfos: {},
  }),
  actions: {
    async getOrder(type = "all") {
      const res = await getOrderInfos(type)
      this.orderInfos = res.data.data
    },
  },
})

export default useOrederStore
