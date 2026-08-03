<script setup>
</script>

<template>
  <section class="page hero">
    <div class="hero-content">
      <p class="eyebrow">LKPD Modul 2</p>
      <h1>Onlineshop Sekolah yang modern dan siap dipakai</h1>
      <p>
        Project ini dibuat untuk membantu siswa belajar Vue 3, Vite, Vue Router, dan
        pengembangan antarmuka pengguna dengan CSS vanilla.
      </p>
      <div class="actions">
        <router-link to="/product" class="btn primary">Lihat Produk</router-link>
        <router-link to="/about" class="btn secondary">Kenali Tim</router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 3rem 1.5rem;
}

.hero-content {
  max-width: 700px;
  text-align: center;
}

.eyebrow {
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #2563eb;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.hero h1 {
  font-size: 2.4rem;
  margin-bottom: 1rem;
  color: #0f172a;
}

.hero p {
  color: #475569;
  line-height: 1.7;
}

.actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1.5rem;
}

.btn {
  text-decoration: none;
  border-radius: 999px;
  padding: 0.8rem 1.2rem;
  font-weight: 700;
}

.btn.primary {
  background: #2563eb;
  color: white;
}

.btn.secondary {
  background: #e2e8f0;
  color: #0f172a;
}
</style>
