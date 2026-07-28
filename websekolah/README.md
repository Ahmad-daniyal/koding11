# 🏫 Web Sekolah

yo guys, jadi ini project website sekolah yang masih tahap belajar ya. basically ceritanya kita lagi bikin website buat sekolah SMA/SMK gitu deh. masih kosongan sih tapi udah ada structure-nya.

## 🤔 ini apaan sih?

ini web sekolah sederhana yang dibuat pake vanilla JavaScript tanpa pake framework apapun. iya, murni JS + HTML doang, no React, no Vue, no Angular. bikin dari nol biar paham konsep dasarnya.

## 🛠️ Tech Stack

| Teknologi | Keterangan |
|-----------|------------|
| **HTML5** | Markup-nya |
| **JavaScript (ES6+)** | Bahasa pemrogramannya, pake modules juga |
| **Custom Router** | Routing sendiri pake hash (`#/home`, `#/about`, `#/kontak`) |
| **Custom Component** | Sistem component sendiri tanpa framework |

> note: belum ada CSS ya guys, jadi tampilannya masih polosan. nantiInsyaallah bakal ditambahin.

## 📁 Struktur Project

```
websekolah/
├── index.html              <- entry point, buka ini
├── app.js                  <- bootstrap app-nya
├── router.js               <- router custom pake hash
├── components/
│   ├── component.js        <- base class buat semua component
│   ├── navbar.js           <- navigasi atas
│   └── footer.js           <- footer bawah
└── pages/
    ├── HomePage.js         <- halaman utama / beranda
    ├── AboutPage.js        <- halaman tentang sekolah
    └── KontakPage.js       <- halaman kontak
```

## 🚀 Cara Jalankan

karena ini pake ES6 modules, gabisa cuma double-click `index.html`-nya ya (bakal error CORS). jadi harus pake server local.

### pake Python:
```bash
python3 -m http.server 8000
```
terus buka `http://localhost:8000` di browser.

### pake Node.js:
```bash
npx serve .
```

### pake VS Code:
install extension **Live Server** terus klik "Go Live".

## ✨ Fitur (yang udah ada)

- **Routing SPA** - pindah halaman tanpa reload, pake hash router
- **Navbar** - navigasi yang highlight halaman aktif
- **Footer** - copyright tahun otomatis (dinamis dong pastinya)
- **3 Halaman** - Home, About, sama Kontak

## 📌 Note

- ini masih project tutorial / tugas sekolah, jadi jangan expect yang wah ya hehe
- belum ada backend, jadi semua masih statis
- belum ada styling sama sekali, masih mentah
- insyaallah bakal terus dikembangkan

## 👤 Author

**Daniyal** - pelajar yang lagi belajar bikin web

---

*stay tuned terus ya buat perkembangannya!*
