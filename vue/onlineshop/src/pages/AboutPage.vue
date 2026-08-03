<script setup>
import TeamCard from '../components/TeamCard.vue'

const team = [
  {
    name: 'Rina',
    role: 'Project Lead',
    description: 'Mengawasi alur kerja dan memastikan semua fitur berjalan baik.',
  },
  {
    name: 'Bima',
    role: 'UI Designer',
    description: 'Merancang tampilan yang menarik dan mudah dipahami pengguna.',
  },
  {
    name: 'Dewi',
    role: 'Content Writer',
    description: 'Menata konten agar pesan toko sekolah lebih jelas dan menarik.',
  },
]
</script>

<template>
  <section class="page">
    <div class="section-title">
      <p class="eyebrow">Tentang Kami</p>
      <h1>Membangun toko sekolah yang nyaman untuk semua</h1>
      <p>
        Onlineshop Sekolah hadir untuk memudahkan siswa dan orang tua menemukan kebutuhan sekolah
        tanpa harus datang langsung ke toko.
      </p>
    </div>
    <div class="team-grid">
      <TeamCard v-for="member in team" :key="member.name" :member="member" />
    </div>
  </section>
</template>

<style scoped>
.page {
  padding: 3rem 1.5rem;
}

.section-title {
  max-width: 760px;
  margin: 0 auto 2rem;
  text-align: center;
}

.eyebrow {
  color: #2563eb;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
}
</style>
