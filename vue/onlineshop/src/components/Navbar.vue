<script setup>
</script>

<template>
  <header class="navbar">
    <div class="brand">
      <router-link to="/">Onlineshop Sekolah</router-link>
    </div>
    <nav class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/product">Product</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #0f172a;
  color: white;
  position: sticky;
  top: 0;
  z-index: 10;
}

.brand a {
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-links a {
  color: #e2e8f0;
  text-decoration: none;
  padding: 0.4rem 0.7rem;
  border-radius: 999px;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  background: #2563eb;
  color: white;
}

@media (max-width: 640px) {
  .navbar {
    flex-direction: column;
    gap: 0.8rem;
  }

  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
