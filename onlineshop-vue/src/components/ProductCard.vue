<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="product-card">
    <img :src="product.image" :alt="product.name" />
    <h3>{{ product.name }}</h3>
    <p>{{ product.price }}</p>
  </article>
</template>

<style scoped>
.product-card {
  border: 1px solid var(--color-muted);
  border-radius: var(--border-radius);
  padding: var(--spacing-md);
  text-align: center;
}
</style>
