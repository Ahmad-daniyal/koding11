import './experience.css'

export function ExperienceSection(experiences) {
  const items = experiences.items
    .map(
      (item) => `
      <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <p class="text-sm font-semibold text-blue-600">${item.year}</p>
        <h3 class="mt-1 text-lg font-semibold text-slate-900">${item.title}</h3>
        <p class="mt-2 text-sm leading-7 text-slate-600">${item.body}</p>
      </div>`
    )
    .join('')

  const section = document.createElement('section')
  section.id = 'experience'
  section.className =
    'reveal rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_15px_40px_rgba(15,23,42,0.05)] sm:p-10'
  section.innerHTML = `
    <p class="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">${experiences.title}</p>
    <h2 class="mt-3 text-3xl font-semibold text-slate-900">${experiences.heading}</h2>
    <div class="mt-6 space-y-4">
      ${items}
    </div>
  `
  return section
}
