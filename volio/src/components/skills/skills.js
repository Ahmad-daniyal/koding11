import './skills.css'

export function SkillsSection(skills) {
  const skillColors = ['bg-brutal-yellow', 'bg-brutal-green', 'bg-brutal-pink']

  const items = skills.items
    .map(
      (skill, i) => `
      <div class="brutal-card border-2 border-black p-5 ${skillColors[i % skillColors.length]}">
        <h3 class="font-bold text-black">${skill.title}</h3>
        <p class="mt-2 text-sm leading-7 text-black/70">${skill.body}</p>
      </div>`
    )
    .join('')

  const section = document.createElement('section')
  section.id = 'skills'
  section.className =
    'reveal border-2 border-black bg-white p-6 shadow-[6px_6px_0px_0px_#000] sm:p-10'
  section.innerHTML = `
    <span class="inline-block border-2 border-black bg-brutal-purple px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">${skills.title}</span>
    <h2 class="mt-4 text-3xl font-bold text-black">${skills.heading}</h2>
    <div class="mt-6 grid gap-4 md:grid-cols-3">
      ${items}
    </div>
  `
  return section
}
