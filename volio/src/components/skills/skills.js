import './skills.css'

export function SkillsSection(skills) {
  const items = skills.items
    .map(
      (skill) => `
      <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <h3 class="font-semibold text-slate-900">${skill.title}</h3>
        <p class="mt-2 text-sm leading-7 text-slate-600">${skill.body}</p>
      </div>`
    )
    .join('')

  const section = document.createElement('section')
  section.id = 'skills'
  section.className =
    'reveal rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_15px_40px_rgba(15,23,42,0.05)] sm:p-10'
  section.innerHTML = `
    <p class="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">${skills.title}</p>
    <h2 class="mt-3 text-3xl font-semibold text-slate-900">${skills.heading}</h2>
    <div class="mt-6 grid gap-4 md:grid-cols-3">
      ${items}
    </div>
  `
  return section
}
