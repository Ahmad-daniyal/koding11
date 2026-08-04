import './hero.css'
import { SocialLinksInline } from '../social-links/social-links.js'

export function HeroSection(profile) {
  const stats = profile.stats
    .map(
      (stat) => `
      <div class="border-2 border-black bg-brutal-yellow px-5 py-4">
        <p class="text-2xl font-bold text-black">${stat.value}</p>
        <p class="text-sm font-medium text-black/70">${stat.label}</p>
      </div>`
    )
    .join('')

  const points = profile.availabilityPoints
    .map(
      (point) =>
        `<div class="border-2 border-white/30 bg-white/10 px-4 py-3 font-medium">${point}</div>`
    )
    .join('')

  const section = document.createElement('section')
  section.id = 'home'
  section.className =
    'reveal grid overflow-hidden border-2 border-black bg-white shadow-[6px_6px_0px_0px_#000] sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8 p-6 sm:p-8 lg:p-12'
  section.innerHTML = `
    <div class="reveal">
      <span class="inline-block border-2 border-black bg-brutal-pink px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">${profile.role}</span>
      <h1 class="mt-6 text-4xl font-bold leading-tight text-black sm:text-5xl lg:text-6xl">
        ${profile.tagline}
      </h1>
      <p class="mt-5 max-w-2xl text-lg text-black/70">${profile.intro}</p>
      <div class="mt-8 flex flex-wrap gap-3">
        <a href="#/projects" class="brutal-btn inline-block bg-brutal-yellow px-6 py-3 font-bold text-black">Lihat Karya Saya</a>
        <a href="#/contact" class="brutal-btn inline-block bg-white px-6 py-3 font-bold text-black">Hubungi Saya</a>
      </div>
      <div class="mt-6" id="hero-social-links"></div>
      <div class="mt-8 flex flex-wrap gap-3">
        ${stats}
      </div>
    </div>

    <div class="reveal mt-8 border-2 border-black bg-brutal-blue p-8 text-white shadow-[6px_6px_0px_0px_#000] lg:mt-0">
      <span class="inline-block border-2 border-white/30 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider">Sekarang tersedia untuk</span>
      <h2 class="mt-4 text-2xl font-bold">${profile.availabilityTitle}</h2>
      <p class="mt-4 text-sm leading-7 text-white/80">${profile.availabilityBody}</p>
      <div class="mt-6 space-y-3">
        ${points}
      </div>
    </div>
  `

  requestAnimationFrame(() => {
    const slot = section.querySelector('#hero-social-links')
    if (slot && profile.socials) {
      slot.replaceWith(SocialLinksInline(profile.socials, { size: 20, gap: 'gap-2', color: 'text-black/40', hoverColor: 'text-black' }))
    }
  })

  return section
}
