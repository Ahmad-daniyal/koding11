<script setup>
import ProductCard from '../components/ProductCard.vue'

const productImages = import.meta.glob('../assets/images/products/*', {
  eager: true,
  import: 'default',
})

function getProductImage(key) {
  const match = Object.entries(productImages).find(([path]) =>
    path.includes(`/${key}.`),
  )
  return match ? match[1] : undefined
}

const products = [
  { name: 'Laptop Acer Aspire 5', price: 'Rp 8.500.000', image: 'images.jpg' },
  { name: 'Laptop Lenovo Ideapad 3', price: 'Rp 7.200.000', image: 'untitled.jpg' },
  { name: 'Laptop Asus VivoBook 14', price: 'Rp 9.100.000', image: 'asus.jpg' },
  { name: 'Laptop HP Pavilion 15', price: 'Rp 11.500.000', image: 'hp.jpg' },
  { name: 'Laptop Dell Inspiron 15', price: 'Rp 10.200.000', image: 'dell.jpg' },
  { name: 'Laptop MacBook Air M2', price: 'Rp 16.900.000', image: 'mac.jpg' },
].map((product) => ({ ...product, image: getProductImage(product.image) }))
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
