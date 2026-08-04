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
    <img v-if="product.image" :src="product.image" :alt="product.name" class="product-image" />
    <div v-else class="product-image placeholder" :aria-label="product.name">
      {{ product.name.charAt(0) }}
    </div>
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

.product-image {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: var(--border-radius);
  margin-bottom: var(--spacing-md);
}

.placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-secondary)
  );
  color: #fff;
  font-size: 3rem;
}
</style>
