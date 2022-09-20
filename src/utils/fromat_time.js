import dayjs from "dayjs"

export function getTime(data, format = "MM月DD日") {
  return dayjs(data).format(format)
}

export function time(now, next) {
  return dayjs(next).diff(now, "day")
}
const dayString = ["天", "一", "二", "三", "四", "五", "六"]
export function setTime(one) {
  const firstTime = dayjs(one, "MM-DD")
  const month = `${firstTime.$M + 1}月${firstTime.$D}日`
  const str = dayString[firstTime.$W]
  const week = `周${str}`
  const all = [month, week]
  return all
}
