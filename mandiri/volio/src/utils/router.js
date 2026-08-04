import { getHashPath } from './url.js'

const routes = new Map()
let contentEl = null
let afterNavigate = null
let notFoundHandler = null

export function registerRoute(path, renderFn) {
  routes.set(path, renderFn)
}

export function setNotFound(handler) {
  notFoundHandler = handler
}

export function initRouter(container, options = {}) {
  contentEl = container
  afterNavigate = options.afterNavigate || null

  window.addEventListener('hashchange', handleRoute)
  handleRoute()
}

export function getCurrentRoute() {
  return getHashPath()
}

function handleRoute() {
  const path = getHashPath()
  const renderFn = routes.get(path)

  if (!renderFn) {
    if (notFoundHandler) {
      contentEl.innerHTML = ''
      contentEl.append(notFoundHandler(path))
    }
    return
  }

  contentEl.innerHTML = ''
  const page = renderFn()
  contentEl.append(page)

  if (afterNavigate) afterNavigate(path)
}
