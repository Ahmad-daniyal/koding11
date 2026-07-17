<template>
  <svg viewBox="0 0 32 32" width="128" height="128" class="pixel-avatar" xmlns="http://www.w3.org/2000/svg">
    <!-- simple 8-bit face built with rects -->
    <rect x="4" y="4" width="24" height="24" fill="#7f5a83"/>
    <rect x="6" y="6" width="20" height="20" fill="#ffd9b3"/>

    <!-- eyes -->
    <rect x="10" y="12" width="3" height="3" fill="#2b2b2b"/>
    <rect x="19" y="12" width="3" height="3" fill="#2b2b2b"/>

    <!-- mouth -->
    <rect x="13" y="20" width="6" height="2" fill="#b23b4a"/>

    <!-- hair/top pixel accent -->
    <rect x="4" y="4" width="6" height="4" fill="#3b2b5a"/>
    <rect x="22" y="4" width="6" height="4" fill="#3b2b5a"/>
  </svg>
</template>

<script setup>
</script>

<style scoped>
.pixel-avatar { display:block; margin: 0 auto 12px; image-rendering: pixelated; }
</style>
