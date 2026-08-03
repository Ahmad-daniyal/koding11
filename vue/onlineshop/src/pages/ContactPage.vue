<script setup>
</script>

<template>
  <section class="page">
    <div class="section-title">
      <p class="eyebrow">Hubungi Kami</p>
      <h1>Siap membantu kebutuhan sekolah Anda</h1>
    </div>
    <div class="contact-card">
      <div>
        <h2>Informasi Kontak</h2>
        <p>Email: admin@onlineshopsekolah.sch.id</p>
        <p>Telepon: (021) 555-0123</p>
        <p>Alamat: Jalan Pendidikan No. 10, Jakarta</p>
      </div>
      <form class="contact-form">
        <label for="name">Nama</label>
        <input id="name" type="text" placeholder="Masukkan nama" />
        <label for="email">Email</label>
        <input id="email" type="email" placeholder="Masukkan email" />
        <label for="message">Pesan</label>
        <textarea id="message" rows="4" placeholder="Tuliskan pertanyaan Anda"></textarea>
        <button type="button">Kirim Pesan</button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.page {
  padding: 3rem 1.5rem;
}

.section-title {
  text-align: center;
  margin-bottom: 2rem;
}

.eyebrow {
  color: #2563eb;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

.contact-card {
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  background: white;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

input,
textarea {
  padding: 0.75rem;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
}

button {
  margin-top: 0.4rem;
  padding: 0.8rem 1rem;
  border: none;
  border-radius: 10px;
  background: #2563eb;
  color: white;
  cursor: pointer;
}
</style>
