import './hero.css'
import { SocialLinksInline } from '../social-links/social-links.js'

export function HeroSection(profile) {
  const stats = profile.stats
    .map(
      (stat) => `
      <div class="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
        <p class="text-2xl font-semibold text-slate-900">${stat.value}</p>
        <p class="text-sm text-slate-500">${stat.label}</p>
      </div>`
    )
    .join('')

  const points = profile.availabilityPoints
    .map(
      (point) =>
        `<div class="rounded-2xl border border-white/10 bg-white/10 px-4 py-3">${point}</div>`
    )
    .join('')

  const section = document.createElement('section')
  section.id = 'home'
  section.className =
    'grid overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8 lg:p-14'
  section.innerHTML = `
    <div class="reveal">
      <p class="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">${profile.role}</p>
      <h1 class="mt-4 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
        ${profile.tagline}
      </h1>
      <p class="mt-5 max-w-2xl text-lg text-slate-600">${profile.intro}</p>
      <div class="mt-8 flex flex-wrap gap-3">
        <a href="#/projects" class="rounded-full bg-blue-600 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-1 hover:bg-blue-700">Lihat Karya Saya</a>
        <a href="#/contact" class="rounded-full border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:-translate-y-1 hover:border-blue-400 hover:text-blue-600">Hubungi Saya</a>
      </div>
      <div class="mt-6" id="hero-social-links"></div>
      <div class="mt-8 flex flex-wrap gap-4">
        ${stats}
      </div>
    </div>

    <div class="reveal mt-8 rounded-[28px] border border-slate-200 bg-slate-950 p-8 text-white shadow-2xl lg:mt-0">
      <p class="text-sm font-medium uppercase tracking-[0.3em] text-slate-400">Sekarang tersedia untuk</p>
      <h2 class="mt-3 text-2xl font-semibold">${profile.availabilityTitle}</h2>
      <p class="mt-4 text-sm leading-7 text-slate-300">${profile.availabilityBody}</p>
      <div class="mt-6 space-y-3">
        ${points}
      </div>
    </div>
  `

  requestAnimationFrame(() => {
    const slot = section.querySelector('#hero-social-links')
    if (slot && profile.socials) {
      slot.replaceWith(SocialLinksInline(profile.socials, { size: 20, gap: 'gap-2', color: 'text-slate-400', hoverColor: 'text-blue-600' }))
    }
  })

  return section
}
