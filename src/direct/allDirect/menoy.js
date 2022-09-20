export default function unit(app) {
  app.directive("r", {
    mounted(el, binding) {
      const defaultText = el.textContent
      let unit = binding.value
      if (!unit) {
        unit = "¥"
      }
      el.textContent = unit + defaultText
    },
  })
}
