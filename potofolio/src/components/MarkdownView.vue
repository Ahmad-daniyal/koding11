<script setup>
import { onMounted, ref, watch } from 'vue'
import { marked } from 'marked'
const props = defineProps({
  file: { type: String, required: true }
})
const content = ref('')

const load = async (name) => {
  try {
    const res = await fetch(`/md/${name}.md`)
    const txt = await res.text()
    content.value = marked.parse(txt)
  } catch (e) {
    content.value = `<p>Gagal memuat \/md\/${props.file}.md</p>`
  }
}

onMounted(() => load(props.file))
watch(() => props.file, (v) => load(v))
</script>

<template>
  <div class="markdown" v-html="content"></div>
</template>

<style scoped>
.markdown {
  text-align: left;
  max-width: 820px;
  margin: 0 auto;
}
.markdown h1 { font-size: 28px; }
.markdown h2 { font-size: 20px; }
.markdown ul { padding-left: 1.1rem; }
</style>
