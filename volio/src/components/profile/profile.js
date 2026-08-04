import './profile.css'
import { SocialLinks } from '../social-links/social-links.js'

const highlightIcons = {
  code: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  palette: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`,
  zap: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  heart: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
  mapPin: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  briefcase: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
}

const highlightColors = ['bg-brutal-yellow', 'bg-brutal-green', 'bg-brutal-pink', 'bg-brutal-blue']

export function ProfileSection(profilePage, profile) {
  const highlights = profilePage.highlights
    .map(
      (h, i) => `
      <div class="brutal-card flex items-start gap-4 border-2 border-black p-5 ${highlightColors[i % highlightColors.length]}">
        <div class="flex h-11 w-11 shrink-0 items-center justify-center border-2 border-black bg-white">
          ${highlightIcons[h.icon] || highlightIcons.code}
        </div>
        <div>
          <h3 class="font-bold text-black">${h.label}</h3>
          <p class="mt-1 text-sm leading-6 text-black/70">${h.detail}</p>
        </div>
      </div>`
    )
    .join('')

  const section = document.createElement('section')
  section.id = 'profile'
  section.className =
    'reveal border-2 border-black bg-white p-6 shadow-[6px_6px_0px_0px_#000] sm:p-10'
  section.innerHTML = `
    <div class="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
      <div>
        <span class="inline-block border-2 border-black bg-brutal-green px-3 py-1 text-xs font-bold uppercase tracking-wider text-black">${profilePage.title}</span>
        <h2 class="mt-4 text-3xl font-bold text-black">${profilePage.heading}</h2>
        <p class="mt-4 text-base leading-7 text-black/70">${profilePage.bio}</p>

        <div class="mt-6 flex flex-col gap-3 text-sm font-medium text-black/60">
          <div class="flex items-center gap-2">
            <span class="text-black">${highlightIcons.mapPin}</span>
            <span>${profilePage.location}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-black">${highlightIcons.briefcase}</span>
            <span>${profilePage.availableFor}</span>
          </div>
        </div>

        <div class="mt-6" id="profile-social-links"></div>
      </div>

      <div class="grid gap-4 sm:grid-cols-2">
        ${highlights}
      </div>
    </div>
  `

  requestAnimationFrame(() => {
    const socialsSlot = section.querySelector('#profile-social-links')
    if (socialsSlot && profile.socials) {
      socialsSlot.replaceWith(SocialLinks(profile.socials, { size: 22 }))
    }
  })

  return section
}
