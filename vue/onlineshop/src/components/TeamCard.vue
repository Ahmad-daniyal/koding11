<script setup>
const props = defineProps({
  member: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="team-card">
    <h3>{{ member.name }}</h3>
    <p class="role">{{ member.role }}</p>
    <p>{{ member.description }}</p>
  </article>
</template>

<style scoped>
.team-card {
  background: #f8fafc;
  padding: 1.25rem;
  border-radius: 14px;
  border: 1px solid #e2e8f0;
}

.team-card h3 {
  margin: 0 0 0.35rem;
  color: #0f172a;
}

.role {
  font-weight: 700;
  color: #2563eb;
  margin-bottom: 0.5rem;
}
</style>
