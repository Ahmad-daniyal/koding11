import './footer.css'

export function FooterSection(profile) {
  const footer = document.createElement('footer')
  footer.className = 'mt-4 border-t-2 border-black px-4 pb-8 pt-6 text-center text-sm font-bold text-black sm:px-6 lg:px-8'
  footer.innerHTML = `<p>${profile.copyright}</p>`
  return footer
}
