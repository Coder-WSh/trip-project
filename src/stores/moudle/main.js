import {
    defineStore
} from "pinia";

const startTime = new Date()
const endTime = new Date()
endTime.setDate(startTime.getDate() + 1)

const useMainStore = defineStore("main", {
    state: () => ({
        token: "",

        startTime: startTime,
        endTime: endTime,
        isLoading: false
    })
})
export default useMainStore