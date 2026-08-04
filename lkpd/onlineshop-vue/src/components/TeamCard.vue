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
    <div class="avatar">{{ member.name.charAt(0) }}</div>
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

.avatar {
  width: 80px;
  height: 80px;
  margin: 0 auto var(--spacing-md);
  border-radius: 50%;
  background-color: var(--color-primary);
  color: #fff;
  font-size: 2rem;
  line-height: 80px;
}
</style>
