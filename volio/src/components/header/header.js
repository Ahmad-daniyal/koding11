import './header.css'
import { getHashPath } from '../../utils/url.js'

export function HeaderSection(profile) {
  const navItems = [
    { path: '/home', label: 'Beranda' },
    { path: '/profile', label: 'Profil' },
    { path: '/about', label: 'Tentang' },
    { path: '/skills', label: 'Keahlian' },
    { path: '/projects', label: 'Proyek' },
    { path: '/contact', label: 'Kontak' },
  ]

  const currentPath = getHashPath()

  const navLinks = navItems
    .map((item) => {
      const isActive = currentPath === item.path
      return `<a href="#${item.path}" class="nav-link rounded-full px-3 py-2 transition ${isActive ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-slate-600 hover:bg-blue-50 hover:text-blue-600'}">${item.label}</a>`
    })
    .join('')

  const header = document.createElement('header')
  header.className =
    'sticky top-0 z-50 border-b border-slate-200/70 bg-slate-50/80 backdrop-blur-xl'
  header.innerHTML = `
    <nav class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <a href="#/home" class="text-lg font-semibold tracking-[0.3em] text-slate-900">${profile.name}</a>
      <div class="flex items-center gap-2 text-sm font-medium sm:gap-4">
        ${navLinks}
      </div>
    </nav>
  `

  header.updateActive = (path) => {
    header.querySelectorAll('.nav-link').forEach((link) => {
      const linkPath = link.getAttribute('href').slice(1)
      const isActive = linkPath === path
      link.classList.toggle('bg-blue-50', isActive)
      link.classList.toggle('text-blue-600', isActive)
      link.classList.toggle('font-semibold', isActive)
      link.classList.toggle('text-slate-600', !isActive)
    })
  }

  return header
}
