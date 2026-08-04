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
      return `<a href="#${item.path}" class="nav-link border-2 border-black px-4 py-2 font-bold transition ${isActive ? 'bg-brutal-yellow text-black' : 'bg-white text-black hover:bg-brutal-yellow'}">${item.label}</a>`
    })
    .join('')

  const header = document.createElement('header')
  header.className =
    'sticky top-0 z-50 border-b-2 border-black bg-brutal-yellow'
  header.innerHTML = `
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
      <a href="#/home" class="text-lg font-bold tracking-tight text-black">${profile.name}</a>
      <div class="flex items-center gap-2 text-sm font-bold sm:gap-3">
        ${navLinks}
      </div>
    </nav>
  `

  header.updateActive = (path) => {
    header.querySelectorAll('.nav-link').forEach((link) => {
      const linkPath = link.getAttribute('href').slice(1)
      const isActive = linkPath === path
      link.classList.toggle('bg-brutal-yellow', isActive)
      link.classList.toggle('bg-white', !isActive)
    })
  }

  return header
}
