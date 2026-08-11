<script setup>
const features = [
  { title: 'Pengiriman Cepat', description: 'Pesanan diantar dalam 1-2 hari kerja ke seluruh Indonesia.' },
  { title: 'Harga Terjangkau', description: 'Produk berkualitas dengan harga bersahabat untuk semua.' },
  { title: 'Garansi Uang Kembali', description: 'Tidak puas? Kami kembalikan uang Anda tanpa ribet.' },
]
</script>

<template>
  <main class="landing-page">
    <section class="hero">
      <h1>Selamat Datang di OnlineShop</h1>
      <p>Temukan produk berkualitas dengan harga terbaik.</p>
      <RouterLink to="/product" class="hero-button">Lihat Produk</RouterLink>
    </section>
    <section class="promo">

      <video controls autoplay playsinline class="promo-video" src="/video/rusdi.mp4"></video>
    </section>
    
    
    <section class="features">
      <div v-for="feature in features" :key="feature.title" class="feature-card">
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.landing-page {
  max-width: var(--container-width);
  margin: 0 auto;
}

.hero {
  margin: auto 15px;
  margin-top: 20px;
  border-radius:50px;
  padding: calc(var(--spacing-lg) * 2);
  text-align: center;
  color: #fff;
  background-image: linear-gradient(
    to right,
    var(--color-primary),
    var(--color-secondary)
  );
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-md);
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: var(--spacing-lg);
}

.hero-button {
  display: inline-block;
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: 999px;
  background-color: #fff;
  color: var(--color-primary);
  font-weight: 600;
}

.hero-button:hover {
  background-color: var(--color-background);
}

.features {
  display: flex;
  gap: var(--spacing-lg);
  padding: var(--spacing-lg);
}

.feature-card {
  flex: 1;
  padding: var(--spacing-lg);
  border-radius: var(--border-radius);
  background-color: var(--color-background);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.feature-card h3 {
  margin-bottom: var(--spacing-sm);
}

.promo {
  text-align: center;
  padding: var(--spacing-lg);
}

.promo h2 {
  margin-bottom: var(--spacing-md);
  color: var(--color-text);
}

.promo-video {
  max-width: 100%;
  width: 720px;
  border-radius: var(--border-radius);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 500px;
}
</style>
