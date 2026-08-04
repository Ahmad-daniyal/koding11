export function getHashPath() {
  const hash = window.location.hash.slice(1) || '/home'
  return hash.split('?')[0]
}

export function navigateTo(path) {
  window.location.hash = path
}
