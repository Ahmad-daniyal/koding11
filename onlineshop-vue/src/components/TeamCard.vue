<script setup>
defineProps({
  member: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="team-card">
    <img :src="member.photo" :alt="member.name" />
    <h3>{{ member.name }}</h3>
    <p>{{ member.role }}</p>
  </article>
</template>

<style scoped>
.team-card {
  border: 1px solid var(--color-muted);
  border-radius: var(--border-radius);
  padding: var(--spacing-md);
  text-align: center;
}
</style>
