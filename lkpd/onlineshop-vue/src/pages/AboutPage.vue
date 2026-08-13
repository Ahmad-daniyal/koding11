<script setup>
import TeamCard from '../components/TeamCard.vue'

function imagePath(stem) {
  return `/images/team/${stem}.jpg`
}

const team = [
  { name: 'Budi Santoso', role: 'CEO & Founder' },
  { name: 'Siti Rahayu', role: 'Chief Technology Officer' },
  { name: 'Agus Wijaya', role: 'Head of Marketing' },
  { name: 'Dewi Lestari', role: 'Customer Support Lead' },
]
</script>

<template>
  <main class="about-page">
    <div class="cerita">
    <h1>About Page</h1>
  </div>


    <section class="story-section">
      <div class="story-text">
        <h2>Cerita Kami</h2>
        <p>
          Kami memulai toko ini pada tahun 2018 dengan satu tujuan sederhana:
          menghadirkan produk berkualitas dengan harga yang terjangkau bagi semua orang.
        </p>
        <p>
          Kini kami telah melayani ribuan pelanggan di seluruh Indonesia dan terus
          bertumbuh bersama komunitas kami.
        </p>
      </div>
      <div class="story-image" aria-label="Placeholder gambar toko"><img :src="imagePath('2')" alt="Budi Santoso"></div>
      <div class="story-image" aria-label="Placeholder gambar toko"><img :src="imagePath('images')" alt="Siti Rahayu"></div>
      <div class="story-image" aria-label="Placeholder gambar toko"><img :src="imagePath('3')" alt="Agus Wijaya"></div>
    </section>

    <section class="team-section">
      <h2>Tim Kami</h2>
      <div class="team-grid">
        <TeamCard v-for="member in team" :key="member.name" :member="member" />
      </div>
    </section>
  </main>
</template>

<style scoped>

.cerita
 {
  display: flex;
  padding-top: 20px;
  margin-bottom: 20px;
  border-radius:50px;
  height:auto 100px;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-image: linear-gradient(
    to right,
    var(--color-primary),
    var(--color-secondary)
  );

}

.about-page {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: var(--spacing-lg);
}

.about-page h1 {
  margin-bottom: var(--spacing-lg);
}

.story-section {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
}

.story-text {
  flex: 1;
}

.story-image {
  flex: 1;
  height: 300px;
  border-radius: var(--border-radius);
  background-color: var(--color-muted);
  overflow: hidden;
}

.story-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.team-section h2 {
  margin-bottom: var(--spacing-md);
}

.team-grid {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
}

.team-grid :deep(.team-card) {
  flex: 1 1 220px;
  max-width: 280px;
}
</style>
