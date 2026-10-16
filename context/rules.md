# rules.md — Pedoman Cara Kerja & Standar Rekayasa

> Dokumen ini mengatur **CARA KERJA** (standar teknis, etika koding, dan prosedur pengerjaan), bukan spesifikasi fitur. Wajib dibaca di awal setiap sesi sebelum menyentuh kode.

---

## 1. Prinsip Utama (Anti-Halu & Anti-Drift)

1. **Kode adalah Kebenaran Terakhir:** Jangan berasumsi fungsi, komponen, atau properti data sudah ada hanya berdasarkan nama file atau memori sesi sebelumnya. Selalu periksa kode atau skema data (`context/SCHEMA.md`) terlebih dahulu.
2. **Kesesuaian Dokumentasi (Docs-First & Docs-Sync):** Setiap perubahan ruang lingkup (fitur baru, field data baru, perubahan entitas) wajib didokumentasikan di `context/PRD.md` (§9 Amandemen) dan `context/SCHEMA.md` pada sesi yang sama.
3. **Kemandirian Frontend (Zero-Backend):** Aplikasi ini berjalan 100% di sisi klien (Client-Side Rendering) dengan Vue 3. Semua data bersifat statis dummy berbasis file JSON lokal di `src/data/`. Tidak diperkenankan menambah API backend, koneksi database, atau library server tanpa instruksi eksplisit.
4. **Sentuhan Konten:** Jangan melakukan hardcode teks konten langsung di dalam komponen Vue SFC. Seluruh teks perusahaan, paket, layanan, pembimbing, dan testimoni harus bersumber dari `src/data/*.json`.

---

## 2. Standar Arsitektur & Struktur Kode

- **Komponen Vue:**
  - Ditulis dalam bentuk Single File Component (SFC) menggunakan `<script setup>` (Composition API).
  - Penamaan file menggunakan `PascalCase` (contoh: `PackageCard.vue`, `Navbar.vue`).
  - Pemisahan folder rapi:
    - `src/components/layout/` : Header, Navbar, TopBar, Footer, dsb.
    - `src/components/ui/` : Komponen atomik/reusable (Button, Badge, Card, Toast).
    - `src/components/sections/` : Blok tampilan halaman beranda/landing.
    - `src/components/forms/` : Form input dan elemen interaktif form.
    - `src/views/` : Komponen level rute halaman (HomeView, AboutView, PackagesView, ContactView, dsb.).
- **Pengelolaan State:**
  - Gunakan composable Vue (`src/composables/`) untuk logika stateful lokal atau reusable.
  - Gunakan Pinia jika diperlukan state global lintas modul.
- **Validasi Form & Form Handling:**
  - Validasi form wajib menggunakan **Zod** yang didefinisikan secara deklaratif di `src/lib/`.
  - Validasi terjadi *on-blur* dan *on-submit*. Tampilkan pesan error yang jelas dan spesifik dalam bahasa Indonesia.
  - Tangani aksesibilitas form: tautkan label ke input (`id` / `for`), serta sediakan atribut `aria-invalid` dan `aria-describedby`.
- **Styling & Desain:**
  - Gunakan utilitas Tailwind CSS.
  - Hindari penulisan inline CSS atau nilai warna/font acak; gunakan token warna dan konfigurasi pada `tailwind.config.js`.
  - Nuansa desain harus bernuansa premium, islami, elegan, dan menenangkan (warna hijau zamrud/emerald atau biru navy dipadu emas/gold, tipografi modern yang mudah dibaca).

---

## 3. Standar Pengujian (Testing) & Kualitas

1. **Unit Test (Vitest + @vue/test-utils):**
   - Setiap fitur inti (skema validasi, filter paket/layanan, interaksi form, navigasi halaman) wajib memiliki test unit di `src/components/__tests__/`.
   - Jalankan `npm run test:unit` sebelum menganggap suatu task selesai. Seluruh test harus berstatus **PASSED** (0 failed).
2. **Responsivitas:**
   - Desain harus mobile-first dan diverifikasi pada breakpoint:
     - Mobile: 360px – 480px
     - Tablet: 768px
     - Desktop: 1024px – 1280px+
   - Pastikan tidak ada horizontal scrolling yang tidak diinginkan (`overflow-x: hidden`).
3. **Aksesibilitas (a11y) & SEO:**
   - Gunakan tag semantik HTML5 (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`).
   - Setiap halaman memiliki meta title dan description yang dinamis dan relevan melalui router hook.
   - Sediakan teks alternatif (`alt`) untuk seluruh gambar ibadah, hotel, dan dokumentasi.

---

## 4. Alur Kerja (Workflow) Per Task

1. **Pahami Request:** Baca instruksi user dan periksa section relevan di `PRD.md` dan `SCHEMA.md`.
2. **Review Kode Terkait:** Buka dan teliti file yang bersangkutan sebelum melakukan perubahan.
3. **Eksekusi Bertahap:** Buat perubahan secara presisi dan terukur.
4. **Verifikasi:** Jalankan unit test dan pengecekan tampilan/linting.
5. **Catat Riwayat:** Tambahkan entri baru di `context/CHANGELOG.md` dan perbarui status di `AGENTS.md`.
