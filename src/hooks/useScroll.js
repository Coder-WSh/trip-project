import { onMounted, onUnmounted, ref } from "vue"
import { throttle } from "underscore"
// export function scroolHeight( res) {
//     const getMoreInfo = () => {
//         const top = document.documentElement.scrollTop
//         const height = document.documentElement.scrollHeight - 1
//         const a = document.documentElement.clientHeight
//         if (top + a >= height)
//         res() 传入函数，回调
//     }
//     onMounted(() => {
//         window.addEventListener("scroll", getMoreInfo)
//     })
//     onUnmounted(() => {
//         window.removeEventListener("scroll", getMoreInfo)
//     })
// }

//用变量来传达信息
export function scroolHeight(elRef) {
  let el = window

  const isChange = ref(false)

  const top = ref(0)
  const height = ref(0)
  const clientHeight = ref(0)
  // 节流优化
  const getMoreInfo = throttle(() => {
    if (el === window) {
      top.value = document.documentElement.scrollTop
      height.value = document.documentElement.scrollHeight - 1
      clientHeight.value = document.documentElement.clientHeight
    } else {
      top.value = el.scrollTop
      height.value = el.scrollHeight - 1
      clientHeight.value = el.clientHeight
      //   console.log(top.value, height.value, clientHeight.value)
    }
    // console.log(top.value, height.value, clientHeight.value)
    if (top.value + clientHeight.value >= height.value) {
      isChange.value = true
    }
  }, 100)

  onMounted(() => {
    if (elRef) {
      el = elRef.value
    }
    el.addEventListener("scroll", getMoreInfo)
  })
  onUnmounted(() => {
    el.removeEventListener("scroll", getMoreInfo)
  })
  return {
    isChange,
    top,
    height,
    clientHeight,
  }
}
