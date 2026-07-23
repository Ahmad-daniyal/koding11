import './contact.css'
import { SocialLinksInline } from '../social-links/social-links.js'

export function ContactSection(profile, contact) {
  const section = document.createElement('section')
  section.id = 'contact'
  section.className =
    'reveal border-2 border-black bg-brutal-blue p-6 text-center text-black shadow-[6px_6px_0px_0px_#000] sm:p-10'
  section.innerHTML = `
    <span class="inline-block border-2 border-white/30 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">${contact.title}</span>
    <h2 class="mt-4 text-3xl font-bold text-white">${contact.heading}</h2>
    <p class="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/80">${contact.body}</p>
    <div class="mt-8 flex flex-col items-center gap-4">
      <a href="mailto:${profile.email}" class="brutal-btn inline-block border-2 border-black bg-brutal-yellow px-6 py-3 font-bold text-black">${contact.cta}</a>
      <div id="contact-social-links"></div>
    </div>
  `

  requestAnimationFrame(() => {
    const slot = section.querySelector('#contact-social-links')
    if (slot && profile.socials) {
      slot.replaceWith(SocialLinksInline(profile.socials, { size: 20, gap: 'gap-4', color: 'text-white/50', hoverColor: 'text-white' }))
    }
  })

  return section
}
