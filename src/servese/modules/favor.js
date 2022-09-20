import newAxios from "../require"

export function getFavorGrounp() {
  return newAxios.get({
    url: "/favor/list",
  })
}

export function getFavorGrounpHistory() {
  return newAxios.get({
    url: "/favor/history",
  })
}
