<script setup>
import ProductCard from '../components/ProductCard.vue'

const products = [
  { name: 'Laptop Acer Aspire 5', price: 'Rp 8.500.000', image: '/images/products/images.jpg' },
  { name: 'Laptop Lenovo Ideapad 3', price: 'Rp 7.200.000', image: '/images/products/untitled.jpg' },
  { name: 'Laptop Asus VivoBook 14', price: 'Rp 9.100.000', image: '/images/products/asus.jpg' },
  { name: 'Laptop HP Pavilion 15', price: 'Rp 11.500.000', image: '/images/products/hp.jpg' },
  { name: 'Laptop Dell Inspiron 15', price: 'Rp 10.200.000', image: '/images/products/dell.jpg' },
  { name: 'Laptop MacBook Air M2', price: 'Rp 16.900.000', image: '/images/products/mac.jpg' },
]
</script>

<template>
  <main class="product-page">
    <h1>Product Page</h1>
    <div class="product-grid">
      <ProductCard v-for="product in products" :key="product.name" :product="product" />
    </div>
  </main>
</template>

<style scoped>
.product-page {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: var(--spacing-lg);
}

.product-page h1 {
  margin-bottom: var(--spacing-lg);
}

.product-grid {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-lg);
}

.product-grid :deep(.product-card) {
  flex: 1 1 220px;
  max-width: 280px;
}
</style>
