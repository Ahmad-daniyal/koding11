import './about.css'

export function AboutSection(about) {
  const offers = about.offers
    .map((offer) => `<li class="flex items-start gap-2"><span class="mt-0.5 inline-block h-2 w-2 shrink-0 border border-black bg-brutal-yellow"></span>${offer}</li>`)
    .join('')

  const section = document.createElement('section')
  section.id = 'about'
  section.className =
    'reveal border-2 border-black bg-white p-6 shadow-[6px_6px_0px_0px_#000] sm:p-10'
  section.innerHTML = `
    <div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <span class="inline-block border-2 border-black bg-brutal-orange px-3 py-1 text-xs font-bold uppercase tracking-wider text-black">${about.title}</span>
        <h2 class="mt-4 text-3xl font-bold text-black">${about.heading}</h2>
        <p class="mt-4 text-lg text-black/70">${about.body}</p>
      </div>
      <div class="border-2 border-black bg-brutal-yellow p-6">
        <h3 class="text-lg font-bold text-black">${about.offerTitle}</h3>
        <ul class="mt-4 space-y-3 text-sm font-medium text-black/80">
          ${offers}
        </ul>
      </div>
    </div>
  `
  return section
}
