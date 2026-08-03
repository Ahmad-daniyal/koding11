<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="product-card">
    <h3>{{ product.name }}</h3>
    <p>{{ product.description }}</p>
    <div class="product-meta">
      <span class="price">Rp {{ product.price.toLocaleString('id-ID') }}</span>
      <span class="stock">Stok: {{ product.stock }}</span>
    </div>
  </article>
</template>

<style scoped>
.product-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 1.25rem;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);
}

.product-card h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: #0f172a;
}

.product-card p {
  color: #475569;
  line-height: 1.6;
}

.product-meta {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  font-size: 0.95rem;
}

.price {
  color: #2563eb;
  font-weight: 700;
}

.stock {
  color: #64748b;
}
</style>
