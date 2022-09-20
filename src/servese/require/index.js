import axios from "axios";
import useMainStore from "../../stores/moudle/main";

const baseURL = "http://123.207.32.32:1888/api"
const timeOut = "1000"
const mainStore = useMainStore()
class newAxios {
    constructor(baseURL, timeOut = 1000) {
        this.instance = axios.create({
            baseURL,
            timeOut
        })
        this.instance.interceptors.request.use((res) => {
            mainStore.isLoading = true
            return res
        }, (err) => {
            return err
        })

        this.instance.interceptors.response.use((res) => {
            mainStore.isLoading = false
            return res
        }, (err) => {
            mainStore.isLoading = false
            return err
        })
    }
    //发送请求
    request(config) {
        return new Promise((resolve, reject) => {
            this.instance.request(config).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    }

    get(config) {
        return this.request({
            ...config,
            method: "get"
        })
    }

    post(config) {
        return this.request({
            ...config,
            method: "post"
        })
    }
}
export default new newAxios(baseURL, timeOut)