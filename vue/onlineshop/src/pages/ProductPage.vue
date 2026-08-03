<script setup>
import ProductCard from '../components/ProductCard.vue'

const products = [
  {
    name: 'Tas Sekolah',
    description: 'Tas nyaman untuk membawa buku dan laptop sekolah.',
    price: 180000,
    stock: 12,
  },
  {
    name: 'Seragam Praktek',
    description: 'Seragam lengkap untuk kegiatan praktik dan lab.',
    price: 220000,
    stock: 8,
  },
  {
    name: 'Alat Tulis Paket',
    description: 'Paket alat tulis yang siap dipakai selama semester.',
    price: 95000,
    stock: 20,
  },
]
</script>

<template>
  <section class="page">
    <div class="section-title">
      <p class="eyebrow">Produk Unggulan</p>
      <h1>Belanja kebutuhan sekolah dengan mudah</h1>
    </div>
    <div class="product-grid">
      <ProductCard v-for="product in products" :key="product.name" :product="product" />
    </div>
  </section>
</template>

<style scoped>
.page {
  padding: 3rem 1.5rem;
}

.section-title {
  text-align: center;
  margin-bottom: 2rem;
}

.eyebrow {
  color: #2563eb;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
  max-width: 1000px;
  margin: 0 auto;
}
</style>
