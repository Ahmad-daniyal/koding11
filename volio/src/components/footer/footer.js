import './footer.css'

export function FooterSection(profile) {
  const footer = document.createElement('footer')
  footer.className = 'px-4 pb-8 text-center text-sm text-slate-500 sm:px-6 lg:px-8'
  footer.textContent = profile.copyright
  return footer
}
