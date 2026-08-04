<script setup>
</script>

<template>
  <h1>SMK yadika soreang</h1>
  <nav class="navbar">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/product">Product</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  gap: var(--spacing-lg);
  padding: var(--spacing-md) var(--spacing-lg);
  background-color: var(--color-text);
}

.navbar a {
  color: #fff;
}

.navbar a.router-link-active {
  color: var(--color-primary);
}
</style>
