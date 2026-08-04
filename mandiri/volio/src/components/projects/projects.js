import './projects.css'

export function ProjectsSection(projects) {
  const tagColors = ['bg-brutal-yellow', 'bg-brutal-green', 'bg-brutal-pink', 'bg-brutal-blue', 'bg-brutal-orange']

  const cards = projects.items
    .map(
      (project) => `
      <article class="brutal-card group border-2 border-black p-6 transition duration-150">
        <h3 class="text-xl font-bold text-black">${project.title}</h3>
        <p class="mt-3 text-sm leading-7 text-black/70">${project.description}</p>
        <div class="mt-4 flex flex-wrap gap-2">
          ${project.tags
            .map(
              (tag, i) =>
                `<span class="border-2 border-black px-3 py-1 text-xs font-bold text-black ${tagColors[i % tagColors.length]}">${tag}</span>`
            )
            .join('')}
        </div>
      </article>`
    )
    .join('')

  const section = document.createElement('section')
  section.id = 'projects'
  section.className =
    'reveal border-2 border-black bg-white p-6 shadow-[6px_6px_0px_0px_#000] sm:p-10'
  section.innerHTML = `
    <div class="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <span class="inline-block border-2 border-black bg-brutal-blue px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">${projects.title}</span>
        <h2 class="mt-4 text-3xl font-bold text-black">${projects.heading}</h2>
      </div>
    </div>
    <div class="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      ${cards}
    </div>
  `
  return section
}
