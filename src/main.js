import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "./App.vue"
// 样式
import "normalize.css"
import "./assets/css/index.css"
import router from "./router/index.js"
import useDirectives from "./direct/index"

const app = createApp(App)
app.use(router).use(createPinia()).use(useDirectives).mount("#app")
