//vite 需要经过这么转换才能用变为动态的地址 后一个是获取当前位置固定，
// 前一个为根据后一个位置寻找的，后面加.href转为超链接
// webpack 需要require 转换
export const urlConvertion = (path) => {
    return new URL(`../assets/${path}`,
        import.meta.url).href
}