<script setup>
import { ref } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const audio = new Audio(props.product.audio || '/audio/success.mp3')
const showZoom = ref(false)

function addToCart() {
  audio.currentTime = 0
  audio.play()
}
</script>

<template>
  <article class="product-card">
    <img
      v-if="product.image"
      :src="product.image"
      :alt="product.name"
      class="product-image zoomable"
      @click="showZoom = true"
    />
    <div v-else class="product-image placeholder" :aria-label="product.name">
      {{ product.name.charAt(0) }}
    </div>
    <h3>{{ product.name }}</h3>
    <p>{{ product.price }}</p>
    <button type="button" class="add-to-cart" @click="addToCart">Tambah ke Keranjang</button>
  </article>

  <div v-if="showZoom && product.image" class="zoom-overlay" @click="showZoom = false" @keydown.esc="showZoom = false">
    <figure class="zoom-figure">
      <button type="button" class="zoom-close" @click="showZoom = false" aria-label="Tutup">×</button>
      <img :src="product.image" :alt="product.name" class="zoom-image" />
    </figure>
  </div>
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

.zoomable {
  cursor: zoom-in;
}

.zoom-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.85);
  padding: var(--spacing-lg);
  cursor: zoom-out;
}

.zoom-figure {
  position: relative;
  margin: 0;
  max-width: 90vw;
  max-height: 90vh;
}

.zoom-image {
  display: block;
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: var(--border-radius);
}

.zoom-close {
  position: absolute;
  top: -40px;
  right: -10px;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 50%;
  background-color: var(--color-text);
  color: #fff;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
}

.zoom-close:hover {
  background-color: var(--color-muted);
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

.add-to-cart {
  margin-top: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  border: none;
  border-radius: var(--border-radius);
  background-color: var(--color-primary);
  color: #fff;
  font-weight: 600;
  cursor: pointer;
}

.add-to-cart:hover {
  opacity: 0.9;
}
</style>
