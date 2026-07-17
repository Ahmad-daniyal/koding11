import './contact.css'
import { SocialLinksInline } from '../social-links/social-links.js'

export function ContactSection(profile, contact) {
  const section = document.createElement('section')
  section.id = 'contact'
  section.className =
    'reveal rounded-[28px] border border-slate-200 bg-slate-950 p-8 text-center text-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-10'
  section.innerHTML = `
    <p class="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">${contact.title}</p>
    <h2 class="mt-3 text-3xl font-semibold">${contact.heading}</h2>
    <p class="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">${contact.body}</p>
    <div class="mt-6 flex flex-col items-center gap-4">
      <a href="mailto:${profile.email}" class="inline-flex rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:bg-white hover:text-slate-950">${contact.cta}</a>
      <div id="contact-social-links"></div>
    </div>
  `

  requestAnimationFrame(() => {
    const slot = section.querySelector('#contact-social-links')
    if (slot && profile.socials) {
      slot.replaceWith(SocialLinksInline(profile.socials, { size: 20, gap: 'gap-4', color: 'text-slate-500', hoverColor: 'text-white' }))
    }
  })

  return section
}
