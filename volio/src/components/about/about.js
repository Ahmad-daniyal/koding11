import './about.css'

export function AboutSection(about) {
  const offers = about.offers
    .map((offer) => `<li>• ${offer}</li>`)
    .join('')

  const section = document.createElement('section')
  section.id = 'about'
  section.className =
    'reveal rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_15px_40px_rgba(15,23,42,0.05)] sm:p-10'
  section.innerHTML = `
    <div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">${about.title}</p>
        <h2 class="mt-3 text-3xl font-semibold text-slate-900">${about.heading}</h2>
        <p class="mt-4 text-lg text-slate-600">${about.body}</p>
      </div>
      <div class="rounded-[24px] border border-slate-200 bg-slate-50 p-6">
        <h3 class="text-lg font-semibold text-slate-900">${about.offerTitle}</h3>
        <ul class="mt-4 space-y-3 text-sm text-slate-600">
          ${offers}
        </ul>
      </div>
    </div>
  `
  return section
}
