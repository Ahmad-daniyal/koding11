import './projects.css'

export function ProjectsSection(projects) {
  const cards = projects.items
    .map(
      (project) => `
      <article class="group rounded-[24px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 transition duration-200 hover:-translate-y-2 hover:shadow-xl">
        <h3 class="text-xl font-semibold text-slate-900">${project.title}</h3>
        <p class="mt-3 text-sm leading-7 text-slate-600">${project.description}</p>
        <div class="mt-4 flex flex-wrap gap-2">
          ${project.tags
            .map(
              (tag) =>
                `<span class="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">${tag}</span>`
            )
            .join('')}
        </div>
      </article>`
    )
    .join('')

  const section = document.createElement('section')
  section.id = 'projects'
  section.className =
    'reveal rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_15px_40px_rgba(15,23,42,0.05)] sm:p-10'
  section.innerHTML = `
    <div class="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">${projects.title}</p>
        <h2 class="mt-3 text-3xl font-semibold text-slate-900">${projects.heading}</h2>
      </div>
    </div>
    <div class="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      ${cards}
    </div>
  `
  return section
}
