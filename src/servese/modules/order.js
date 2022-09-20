import newAxios from "../require"

export function getOrderInfos(type) {
  return newAxios.get({
    url: `/order/list?type=${type}`,
  })
}
