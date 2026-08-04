import './social-links.css'

const icons = {
  github: `<path fill="currentColor" fill-rule="evenodd" d="M9.356 1.85C5.05 1.85 1.57 5.356 1.57 9.694a7.84 7.84 0 0 0 5.324 7.44c.387.079.528-.168.528-.376 0-.182-.013-.805-.013-1.454-2.165.467-2.616-.935-2.616-.935-.349-.91-.864-1.143-.864-1.143-.71-.48.051-.48.051-.48.787.051 1.2.805 1.2.805.695 1.194 1.817.857 2.268.649.064-.507.27-.857.49-1.052-1.728-.182-3.545-.857-3.545-3.87 0-.857.31-1.558.8-2.104-.078-.195-.349-1 .077-2.078 0 0 .657-.208 2.14.805a7.5 7.5 0 0 1 1.946-.26c.657 0 1.328.092 1.946.26 1.483-1.013 2.14-.805 2.14-.805.426 1.078.155 1.883.078 2.078.502.546.799 1.247.799 2.104 0 3.013-1.818 3.675-3.558 3.87.284.247.528.714.528 1.454 0 1.052-.012 1.896-.012 2.156 0 .208.142.455.528.377a7.84 7.84 0 0 0 5.324-7.441c.013-4.338-3.48-7.844-7.773-7.844" clip-rule="evenodd"/>`,
  x: `<path fill="currentColor" fill-rule="evenodd" d="M13.835 2.622h2.373l-5.18 5.93L16.5 15.878h-4.758l-3.73-4.876-4.266 4.876H1.378l5.565-6.365L.645 2.622h4.878l3.38 4.47zm-1.708 12.55h1.314L5.63 3.949H4.216z" clip-rule="evenodd"/>`,
  linkedin: `<path fill="currentColor" fill-rule="evenodd" d="M4.75 2.375C3.507 2.375 2.5 3.382 2.5 4.625S3.507 6.875 4.75 6.875 7 5.868 7 4.625 5.993 2.375 4.75 2.375M2.5 8.5h4.5v8.5H2.5zM10 8.5h4.3v1.166h.061c.598-1.134 2.063-2.332 4.239-2.332V13c-1.757 0-2.5.834-2.5 2.5v3.5h-4.5V8.5z" clip-rule="evenodd"/>`,
  instagram: `<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><rect x="2.5" y="2.5" width="15" height="15" rx="4"/><circle cx="10" cy="10" r="3.75"/><circle cx="14.375" cy="5.625" r="1" fill="currentColor" stroke="none"/></g>`,
  bluesky: `<path fill="currentColor" d="M7.75 7.735c-.693-1.348-2.58-3.86-4.334-5.097-1.68-1.187-2.32-.981-2.74-.79C.188 2.065.1 2.812.1 3.251s.241 3.602.398 4.13c.52 1.744 2.367 2.333 4.07 2.145-2.495.37-4.71 1.278-1.805 4.512 3.196 3.309 4.38-.71 4.987-2.746.608 2.036 1.307 5.91 4.93 2.746 2.72-2.746.747-4.143-1.747-4.512 1.702.189 3.55-.4 4.07-2.145.156-.528.397-3.691.397-4.13s-.088-1.186-.575-1.406c-.42-.19-1.06-.395-2.741.79-1.755 1.24-3.64 3.752-4.334 5.099"/>`,
  discord: `<path fill="currentColor" d="M16.224 3.768a14.5 14.5 0 0 0-3.67-1.153c-.158.286-.343.67-.47.976a13.5 13.5 0 0 0-4.067 0c-.128-.306-.317-.69-.476-.976A14.4 14.4 0 0 0 3.868 3.77C1.546 7.28.916 10.703 1.231 14.077a14.7 14.7 0 0 0 4.5 2.306q.545-.748.965-1.587a9.5 9.5 0 0 1-1.518-.74q.191-.14.372-.293c2.927 1.369 6.107 1.369 8.999 0q.183.152.372.294-.723.437-1.52.74.418.838.963 1.588a14.6 14.6 0 0 0 4.504-2.308c.37-3.911-.63-7.302-2.644-10.309m-9.13 8.234c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.894 0 1.614.82 1.599 1.82.001 1-.705 1.82-1.6 1.82m5.91 0c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.893 0 1.614.82 1.599 1.82 0 1-.706 1.82-1.6 1.82"/>`,
  email: `<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><rect x="2" y="3.5" width="16" height="13" rx="2"/><path d="M2 5.5l8 5 8-5"/></g>`,
  default: `<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><circle cx="10" cy="10" r="8"/><path d="M10 6v4l2.5 2.5"/></g>`,
}

function iconSVG(platform, size = 20) {
  const path = icons[platform] || icons.default
  return `<svg width="${size}" height="${size}" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">${path}</svg>`
}

export function SocialLinks(socials, { size = 20, className = '' } = {}) {
  const container = document.createElement('div')
  container.className = `social-links ${className}`.trim()

  container.innerHTML = socials
    .map(
      (s) => `
      <a href="${s.url}" target="_blank" rel="noopener noreferrer"
         class="social-link border-2 border-black" aria-label="${s.label}" title="${s.label}">
        ${iconSVG(s.platform, size)}
      </a>`
    )
    .join('')

  return container
}

export function SocialLinksInline(socials, { size = 18, gap = 'gap-3', color = 'text-black/40', hoverColor = 'hover:text-black' } = {}) {
  const wrapper = document.createElement('div')
  wrapper.className = `flex items-center ${gap}`

  wrapper.innerHTML = socials
    .map(
      (s) => `
      <a href="${s.url}" target="_blank" rel="noopener noreferrer"
         class="${color} transition hover:${hoverColor}" aria-label="${s.label}" title="${s.label}">
        ${iconSVG(s.platform, size)}
      </a>`
    )
    .join('')

  return wrapper
}
