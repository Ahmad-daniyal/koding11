import './experience.css'

export function ExperienceSection(experiences) {
  const expColors = ['bg-brutal-green', 'bg-brutal-yellow', 'bg-brutal-pink', 'bg-brutal-orange']

  const items = experiences.items
    .map(
      (item, i) => `
      <div class="brutal-card border-2 border-black p-5 ${expColors[i % expColors.length]}">
        <span class="inline-block border-2 border-black bg-white px-2 py-0.5 text-xs font-bold text-black">${item.year}</span>
        <h3 class="mt-3 text-lg font-bold text-black">${item.title}</h3>
        <p class="mt-2 text-sm leading-7 text-black/70">${item.body}</p>
      </div>`
    )
    .join('')

  const section = document.createElement('section')
  section.id = 'experience'
  section.className =
    'reveal border-2 border-black bg-white p-6 shadow-[6px_6px_0px_0px_#000] sm:p-10'
  section.innerHTML = `
    <span class="inline-block border-2 border-black bg-brutal-orange px-3 py-1 text-xs font-bold uppercase tracking-wider text-black">${experiences.title}</span>
    <h2 class="mt-4 text-3xl font-bold text-black">${experiences.heading}</h2>
    <div class="mt-6 grid gap-4 sm:grid-cols-2">
      ${items}
    </div>
  `
  return section
}
