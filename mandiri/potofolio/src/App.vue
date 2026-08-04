<script setup>
import { ref } from 'vue'
import PixelAvatar from './components/PixelAvatar.vue'

const sections = [
  { id: 'about', label: 'Tentang Saya' },
  { id: 'skills', label: 'Skill' },
  { id: 'projects', label: 'Proyek' },
  { id: 'contact', label: 'Kontak' }
]

const active = ref('about')

const scrollToSection = (id) => {
  active.value = id
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <main class="portfolio-shell">
    <header class="hero-card">
      <div class="hero-copy">
        <p class="eyebrow">Frontend Developer • UI Enthusiast</p>
        <h1>Halo, saya Daniyal.</h1>
        <p class="lead">anjay mabar yukkk.</p>
        <div class="hero-actions">
          <button class="primary" @click="scrollToSection('projects')">Lihat Proyek</button>
          <button class="secondary" @click="scrollToSection('contact')">Hubun gi Saya</button>
        </div>
      </div>
      <div class="hero-visual">
        <PixelAvatar />
      </div>
    </header>

    <nav class="top-nav">
      <button v-for="section in sections" :key="section.id" :class="{ active: active === section.id }" @click="scrollToSection(section.id)">
        {{ section.label }}
      </button>
    </nav>

    <section id="about" class="panel">
      <h2>Tentang Saya</h2>
      <p>Saya adalah pengembang web yang senang menggabungkan logika teknis dengan estetika visual. Fokus saya adalah membuat pengalaman digital yang ringan, modern, dan mudah dipahami.</p>
    </section>

    <section id="skills" class="panel">
      <h2>Skill yang Saya Kuasai</h2>
      <div class="chip-list">
        <span>Vue</span>
        <span>Vite</span>
        <span>JavaScript</span>
        <span>HTML/CSS</span>
        <span>UI Design</span>
        <span>Responsive Web</span>
      </div>
    </section>

    <section id="projects" class="panel project-grid">
      <article class="card">
        <h3>Pixel Portfolio</h3>
        <p>Portofolio dengan nuansa digital dan layout yang terasa seperti game UI.</p>
      </article>
      <article class="card">
        <h3>Landing Page</h3>
        <p>Desain landing page modern untuk brand dengan fokus pada konversi dan visual yang kuat.</p>
      </article>
      <article class="card">
        <h3>Dashboard Mini</h3>
        <p>Antarmuka dashboard sederhana yang cepat, informatif, dan mudah diakses.</p>
      </article>
    </section>

    <section id="contact" class="panel contact-box">
      <h2>Kontak</h2>
      <p>Siap bekerja sama atau membangun proyek digital yang menarik.</p>
      <a href="mailto:daniyal@example.com">daniyal@example.com</a>
    </section>
  </main>
</template>
