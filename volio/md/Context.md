# Context

> Aturan data JSON, routing, centralized configuration, dan aturan penting. Sumber kebenaran tertinggi adalah `CONCLUSION.md` — file ini hanya memisahkan bagian konteks dari index.

---

## Aturan Data JSON

### Prinsip Utama

- **Data shared (dipakai 2+ halaman)** → simpan di `public/data/` atau folder data shared, semua halaman fetch dari sana
- **Data spesifik (hanya dipakai 1 halaman)** → simpan di dalam `src/modules/nama-modul/nama-modul.json`
- **Jangan duplikasi data** — jika dua halaman butuh data yang sama, keduanya fetch dari file yang sama
- **Jangan copy-paste field** dari satu JSON ke JSON lain
- Jika sebuah halaman butuh subset data dari JSON besar, ambil seluruh file lalu filter di JS

### Kapan Membuat JSON Baru

Sebelum membuat file JSON baru, tanya dua pertanyaan:

1. **Apakah data ini dipakai oleh lebih dari satu halaman?** → Ya: simpan di shared data folder. Tidak: simpan di `src/modules/nama/`
2. **Apakah data ini sudah ada di JSON lain?** → Ya: fetch dari JSON yang sudah ada, jangan buat file baru

### Contoh Benar

```js
// Modul dengan data spesifik sendiri
const data = await fetchData('/src/modules/help/help.json');

// Modul yang butuh data shared
const [pageData, sharedData] = await Promise.all([
  fetchData('/src/modules/home/home.json'),
  fetchData('/data/shared.json'),
]);
```

### Contoh Salah

```js
// SALAH — duplikasi field yang sudah ada di shared JSON
// home.json: { "items": [{ "title": "...", "description": "..." }] }
// Jika title & description sudah ada di shared JSON — ambil dari sana

// SALAH — data dipakai dua halaman tapi disimpan di modules/
// src/modules/chat/chat.json ← tidak boleh jika dm juga butuh → pindah ke data shared
```

### Data Map

| File JSON | Dibaca oleh | Jenis | Canonical source |
|---|---|---|---|
| `src/data/portfolio.json` | `src/main.js` → semua komponen | shared | ya |

> **Catatan:** Semua data konten (profile, about, skills, projects, experiences, contact) disimpan dalam satu file JSON.
> Setiap komponen menerima data sebagai parameter dari `main.js`.
> Jika data spesifik modul diperlukan, buat file JSON terpisah di `src/data/` dan catat di sini.

### Komponen Shared Map

| Komponen | Path | Dipakai oleh |
|---|---|---|
| `social-links` | `src/components/social-links/` | hero, profile, contact (semua via router) |

---

## Routing

- Menggunakan **Hash Routing** (`/#/route`) untuk kompatibilitas penuh dengan static hosting
- Router mendengar `hashchange` event — bukan `popstate`
- `navigateTo(path)` dari `src/utils/url.js` adalah satu-satunya fungsi yang boleh mengubah URL
- `getHashPath()` mengembalikan path tanpa hash dan tanpa query string (e.g. `/home`)
- Setiap halaman di-render oleh route handler saat hash berubah
- Header navigation menggunakan href `#/path` yang memicu `hashchange` otomatis
- Header memiliki `updateActive(path)` untuk sync active state dengan route aktif
- Back/forward browser tetap berfungsi karena browser merekam setiap perubahan hash di history stack

### Route Table

| Path | Komponen | File |
|---|---|---|
| `/home` | HeroSection | `src/components/hero/hero.js` |
| `/profile` | ProfileSection | `src/components/profile/profile.js` |
| `/about` | AboutSection | `src/components/about/about.js` |
| `/skills` | SkillsSection | `src/components/skills/skills.js` |
| `/projects` | ProjectsSection | `src/components/projects/projects.js` |
| `/experience` | ExperienceSection | `src/components/experience/experience.js` |
| `/contact` | ContactSection | `src/components/contact/contact.js` |

Route didaftarkan di `src/main.js` menggunakan `registerRoute(path, renderFn)`.

---

## Centralized Configuration

Semua data konten disimpan di `src/data/portfolio.json` sebagai satu sumber data terpusat. Setiap komponen menerima data sebagai parameter, tidak hardcode di JS.

```js
import data from './data/portfolio.json'
// data.profile, data.about, data.skills, data.projects, data.experiences, data.contact, data.profilePage
```

### Base Path

- Path relatif digunakan untuk semua import (e.g. `../../utils/url.js`)
- JSON data di-import langsung via Vite (e.g. `import data from './data/portfolio.json'`)
- Static assets di-reference dari `src/assets/` atau `public/`

---

## Aturan Penting

- Jangan menaruh semua logic di satu file besar
- Jangan mencampur style global dengan style komponen
- Jangan re-render komponen layout (navbar, footer) setiap pindah halaman — header dan footer di-mount sekali
- Jangan hardcode konten halaman di JS — selalu baca dari JSON
- Jangan duplikasi data JSON — jika dua halaman butuh data yang sama, keduanya fetch dari file yang sama
- Data shared → shared data folder. Data spesifik satu halaman → `src/modules/nama/nama.json`
- Jaga konsistensi penamaan folder dan file
- Komponen di `src/components/` tidak boleh mengandung logic spesifik halaman
- CSS partial (prefix `_`) hanya di-inject dari file JS fiturnya — tidak standalone
- `src/utils/` adalah pure functions — tidak boleh mengimport dari `services/`, `data/`, atau `core/`
- Gunakan `navigateTo()` dari `src/utils/url.js` untuk navigasi — jangan ubah hash langsung
- Setiap route di-render oleh fungsi yang mengembalikan DOM element, bukan innerHTML string

---

## Aturan Komponen Shared

### Prinsip: Reuse, Jangan Duplikasi

Jika sebuah komponen dibutuhkan di **2 atau lebih section/halaman berbeda**, komponen tersebut harus ditempatkan di lokasi shared dan di-import oleh setiap section yang membutuhkannya.

### Kapan Komponen Masuk Shared vs Lokal

| Kondisi | Lokasi |
|---|---|
| Dipakai oleh 2+ section/halaman | `src/components/[nama]/` (shared) |
| Hanya dipakai 1 section | `src/components/[section]/` (lokal di folder section) |

### Contoh Benar

```js
// social-links.js ada di src/components/social-links/
// Dipakai oleh hero, profile, dan contact

// hero.js
import { SocialLinksInline } from '../social-links/social-links.js'

// profile.js
import { SocialLinks } from '../social-links/social-links.js'

// contact.js
import { SocialLinksInline } from '../social-links/social-links.js'
```

### Contoh Salah

```js
// SALAH — copy-paste kode social-links ke hero.js, profile.js, contact.js
// SALAH — membuat folder social-links/ di dalam hero/, profile/, contact/ secara terpisah
```

### Aturan Import

- Komponen shared boleh di-import dari **section mana pun**
- Komponen lokal (`src/components/[section]/`) tidak boleh di-import oleh section lain
- Jika sebuah komponen lokal mulai dipakai oleh 2+ section, pindahkan ke shared
