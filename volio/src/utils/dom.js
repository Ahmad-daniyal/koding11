export const qs = (selector, root = document) => root.querySelector(selector)

export const qsa = (selector, root = document) => [...root.querySelectorAll(selector)]

export function createEl(tag, attrs = {}, ...children) {
  const el = document.createElement(tag)
  for (const [key, value] of Object.entries(attrs)) {
    if (key === 'class') {
      el.className = value
    } else if (key === 'html') {
      el.innerHTML = value
    } else if (value !== null && value !== undefined) {
      el.setAttribute(key, value)
    }
  }
  for (const child of children) {
    if (child) el.append(child)
  }
  return el
}
