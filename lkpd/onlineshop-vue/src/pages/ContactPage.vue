<script setup>
</script>

<template>
  <main class="contact-page">
    <h1>Contact Page</h1>

    <section class="contact-section">
      <div class="contact-info">
        <h2>Info Kontak</h2>
        <p>Telepon: 081214932213</p>
        <p>Email: daniyal@onlineshop.com</p>
        <p>Alamat: Jl. Raya Bogor, No. 123</p>
        <p>Jam Operasional: 09:00 - 21:00 WIB</p>
      </div>

      <form class="contact-form">
        <h2>Kirim Pesan</h2>
        <div class="form-field">
          <label for="name">Nama</label>
          <input id="name" type="text" placeholder="Nama lengkap Anda" />
        </div>
        <div class="form-field">
          <label for="email">Email</label>
          <input id="email" type="email" placeholder="Alamat email Anda" />
        </div>
        <div class="form-field">
          <label for="message">Pesan</label>
          <textarea id="message" rows="5" placeholder="Tulis pesan Anda"></textarea>
        </div>
        <button type="submit" class="submit-button">Kirim</button>
      </form>
    </section>
  </main>
</template>

<style scoped>
.contact-page {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: var(--spacing-lg);
}

.contact-page h1 {
  margin-bottom: var(--spacing-lg);
}

.contact-section {
  display: flex;
  gap: var(--spacing-lg);
  align-items: flex-start;
}

.contact-info {
  flex: 1;
}

.contact-info p {
  margin-bottom: var(--spacing-sm);
}

.contact-form {
  flex: 1;
  border: 1px solid var(--color-muted);
  border-radius: var(--border-radius);
  padding: var(--spacing-lg);
}

.form-field {
  margin-bottom: var(--spacing-md);
}

.form-field label {
  display: block;
  margin-bottom: var(--spacing-sm);
}

.form-field input,
.form-field textarea {
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--color-muted);
  border-radius: var(--border-radius);
  font-family: var(--font-family-base);
  font-size: 1rem;
}

.form-field input:focus,
.form-field textarea:focus {
  outline: none;
  border-color: var(--color-primary);
}

.form-field textarea {
  resize: vertical;
}

.submit-button {
  padding: var(--spacing-sm) var(--spacing-lg);
  border: none;
  border-radius: var(--border-radius);
  background-color: var(--color-primary);
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
}

.submit-button:hover {
  background-color: var(--color-secondary);
}
</style>
