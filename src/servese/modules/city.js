import newAxios from "../require/index.js"

export function getcity() {
    return newAxios.get({
        url: "/city/all"
    })
}

