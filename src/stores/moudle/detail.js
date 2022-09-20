import { defineStore } from "pinia"
import { getDetail } from "../../servese/modules/detail"

const useDetailStore = defineStore("detail", {
  state: () => ({
    detail: {},
    mainPart: {},
    info: {},
    icon: {},
    lander: {},
    comment: {},
    look: {},
    position: {},
    priceDescription: {},
  }),
  actions: {
    async gethomedetail(houseId) {
      const res = await getDetail(houseId)
      this.detail = res.data
      if (this.mainPart) {
        this.mainPart = this.detail.mainPart.topModule.housePicture.housePics
        this.info = this.detail.mainPart.topModule

        this.icon =
          this.detail.mainPart.dynamicModule.facilityModule.houseFacility

        this.lander = this.detail.mainPart.dynamicModule.landlordModule
        this.comment = this.detail.mainPart.dynamicModule.commentModule
        this.look = this.detail.mainPart.dynamicModule.rulesModule
        this.position = this.detail.mainPart.dynamicModule.positionModule
        this.priceDescription = this.detail.mainPart.introductionModule
      }
    },
  },
})
export default useDetailStore
