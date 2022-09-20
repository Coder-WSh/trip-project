import
newAxios
from "../require/index.js"

export function getHot() {
    return newAxios.get({
        url: "/home/hotSuggests"
    })
}

export function getCategories() {
    return newAxios.get({
        url: "/home/categories"
    })
}

export function getMore(indexPage) {
    return newAxios.get({
        url: "/home/houselist",
        params: {
            page: indexPage
        }
    })
}