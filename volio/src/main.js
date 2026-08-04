import './style.css'
import data from './data/portfolio.json'
import { registerRoute, initRouter } from './utils/router.js'
import { getHashPath } from './utils/url.js'
import { qs, qsa } from './utils/dom.js'
import { HeaderSection } from './components/header/header.js'
import { HeroSection } from './components/hero/hero.js'
import { ProfileSection } from './components/profile/profile.js'
import { AboutSection } from './components/about/about.js'
import { SkillsSection } from './components/skills/skills.js'
import { ProjectsSection } from './components/projects/projects.js'
import { ExperienceSection } from './components/experience/experience.js'
import { ContactSection } from './components/contact/contact.js'
import { FooterSection } from './components/footer/footer.js'

registerRoute('/home', () => HeroSection(data.profile))
registerRoute('/profile', () => ProfileSection(data.profilePage, data.profile))
registerRoute('/about', () => AboutSection(data.about))
registerRoute('/skills', () => SkillsSection(data.skills))
registerRoute('/projects', () => ProjectsSection(data.projects))
registerRoute('/experience', () => ExperienceSection(data.experiences))
registerRoute('/contact', () => ContactSection(data.profile, data.contact))

const app = qs('#app')
if (!app) throw new Error('Root element #app not found')

const header = HeaderSection(data.profile)

const content = document.createElement('div')
content.className =
  'mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10'

const footer = FooterSection(data.profile)

app.append(header, content, footer)

function initReveal() {
  const revealItems = qsa('.reveal')

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.15 }
    )

    revealItems.forEach((item) => observer.observe(item))
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'))
  }
}

initRouter(content, {
  afterNavigate(path) {
    header.updateActive(path)
    initReveal()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },
})
