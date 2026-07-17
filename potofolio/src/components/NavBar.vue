<script setup>
import { ref } from 'vue'
const items = ['profile','hobbies','experience','projects']
const modelValue = ref('profile')
const emit = defineEmits(['update:file'])
const select = (k) => { modelValue.value = k; emit('update:file', k) }
</script>

<template>
  <nav class="nav">
    <ul>
      <li v-for="k in items" :key="k">
        <button :class="{active: k===modelValue}" @click="select(k)">{{ k }}</button>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav { margin: 12px 0 24px; }
.nav ul { list-style:none; padding:0; display:flex; gap:8px; justify-content:center; }
.nav button { background:var(--social-bg); border:1px solid var(--border); padding:8px 12px; border-radius:8px; cursor:pointer; }
.nav button.active { background:var(--accent); color: white; border-color: var(--accent-border); }
</style>
