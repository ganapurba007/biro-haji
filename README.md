# PT Adhirajasa Karya Mandiri — Company Profile

> **Website Company Profile Modern Kontraktor Umum & Rekayasa Konstruksi Terpadu.**  
> Proyek portfolio frontend multi-halaman yang dibangun menggunakan **Vue 3, Vite, Tailwind CSS v4, Vue Router, Pinia, dan Zod**, dengan arsitektur data lokal JSON terstruktur serta cakupan 46 Unit Tests via **Vitest**.

---

## 🌟 Fitur Utama

### 1. Global Navigation & Layout Shell
- **Top Bar Kontak (FR-1.1):** Menampilkan nomor telepon kantor, email resmi, jam operasional, dan layanan bebas pulsa. Otomatis disembunyikan di layar mobile.
- **Sticky Navbar & Drawer Mobile (FR-1.2, FR-1.3):** Navigasi sticky dengan efek *backdrop blur*, active link indicator, CTA "Konsultasi Gratis", serta drawer mobile yang dapat ditutup via tombol, klik link, atau tombol `Escape`.
- **3-Column Footer (FR-1.4):** Informasi profil perusahaan, tautan cepat, layanan utama, detail kontak kantor, akun media sosial, dan hak cipta dinamis.
- **Floating Scroll to Top (FR-1.5):** Tombol melayang *smooth scroll* yang muncul otomatis saat scroll melewati 400px.
- **Dynamic SEO Per Route (FR-1.6):** Judul dokumen `<title>` dan `<meta name="description">` terupdate dinamis di setiap rute navigasi.
- **Halaman 404 Responsif (FR-1.7):** Halaman kesalahan rute dengan tombol kembali ke beranda dan opsi kontak bantuan.

### 2. Beranda Interaktif (FR-2.x)
- **Hero Slider (FR-2.1):** Slider 3 slide beresolusi tinggi dengan durasi *autoplay* 6 detik, kontrol navigasi panah & indikator, serta fitur *pause on hover/focus*.
- **Score Cards Berjenjang (FR-2.2):** 3 kartu skor pencapaian (*Kualitas Konstruksi 98%, Keselamatan K3 100%, Ketepatan Waktu 96%*) dengan progress indicator bar.
- **Highlight Perusahaan & Dual CTA (FR-2.3):** Profil ringkas, tagline resmi, poin keunggulan rekayasa (BIM, K3, SBU, ISO), dan kartu pengalaman 14+ tahun.
- **Layanan Unggulan (FR-2.4):** Kartu layanan bernomor dengan ikon Lucide dan ringkasan cakupan.
- **Alur Kerja 4 Langkah (FR-2.5):** Metodologi kerja sistematis (*Konsultasi, Perencanaan, Pelaksanaan, Serah Terima*) dengan target anchor `#alur-kerja`.
- **Statistik Hitung Dinamis (FR-2.6):** Counter animasi *count up* otomatis saat masuk ke viewport (`IntersectionObserver`) dan strip kontak Bebas Pulsa.
- **Portfolio Unggulan (FR-2.7):** Showcase proyek pilihan (*featured: true*) dengan badge kategori & status.
- **Testimoni Klien (FR-2.8):** Ulasan kepuasan mitra bisnis dengan rating bintang 5 dan profil avatar.
- **Banner CTA Penutup (FR-2.9):** Banner ajakan konsultasi proyek menuju `/kontak`.

### 3. Halaman Tentang Kami (`/tentang` - FR-3.x)
- **Visi & Misi Strategis (FR-3.1):** 4 pilar komitmen tata kelola mutu dan keselamatan kerja.
- **Timeline Sejarah Perusahaan (FR-3.2):** Jejak langkah dari awal pendirian (2012), ekspansi nasional (2016), sertifikasi ISO (2020), hingga era transformasi digital BIM (2024).
- **Jajaran Kepemimpinan (FR-3.3):** Profil direksi dan kepala divisi teknik berlisensi resmi.
- **Legalitas & Sertifikasi (FR-3.4):** Kredensial SBU Jasa Pelaksana Konstruksi Kualifikasi Besar (B2) serta integrasi ISO 9001, ISO 14001, dan ISO 45001.

### 4. Halaman Layanan Konstruksi (`/layanan` - FR-4.x)
- **Daftar Layanan Spesialis (FR-4.1):** Pembangunan Gedung, Renovasi & Rehabilitasi, Infrastruktur & Jalan, Interior & Finishing Presisi, serta Konsultasi & Pengawasan Proyek.
- **Rincian Ruang Lingkup (`scope`):** Detail teknis cakupan pekerjaan per layanan.
- **Metodologi Kerja & CTA:** Integrasi alur kerja dan banner konsultasi.

### 5. Halaman Portfolio Proyek (`/proyek` - FR-5.x)
- **Filter Kategori Realtime (FR-5.2):** Filter instan (*Semua, Gedung, Renovasi, Infrastruktur, Interior*) dengan penghitung jumlah proyek dinamis dan *empty state handler*.
- **Grid Proyek Responsif (FR-5.1):** Kartu proyek informatif dengan metadata lokasi, tahun, durasi, dan status.
- **Halaman Detail Proyek (`/proyek/:slug` - FR-5.3):** Galeri foto dengan thumbnail preview switcher, spesifikasi proyek terstruktur, narasi lingkup rekayasa, tombol salin tautan, serta rekomendasi 3 proyek terkait.
- **Penanganan Slug Tidak Ditemukan (FR-5.4):** Tampilan 404 spesifik dengan tombol navigasi kembali ke portfolio.

### 6. Halaman Kontak & Validasi Form Zod (`/kontak` - FR-6.x)
- **Validasi Skema Zod Deklaratif (FR-6.1, FR-6.2):** Validasi otomatis saat `blur` dan `submit` (Nama min 3 karakter, format email valid, regex telepon Indonesia `08xx`/`+62xx`, pemilihan layanan, pesan min 20 karakter, dan persetujuan privasi).
- **Aksesibilitas & Anti-Spam (FR-6.5):** Label terhubung `for`/`id`, `aria-invalid`, `aria-describedby`, serta field honeypot anti-bot.
- **Simulasi Pengiriman & Demo Failure Toggle (FR-6.3):** Indikator loading, tombol disabled saat submit, delay simulasi jaringan 1.5 detik, reset formulir, serta tombol sakelar simulasi skenario gagal untuk demonstrasi portfolio.
- **Fokus Otomatis ke Error Pertama (FR-6.4):** Kursor otomatis berpindah ke field pertama yang tidak valid saat form disubmit.
- **Info Kontak & Peta Interaktif (FR-6.6):** Alamat Kuningan Jakarta, telepon, link WhatsApp langsung, email resmi, jam operasional, FAQ accordion, dan embed Google Maps.

---

## 🛠️ Tech Stack

| Kategori | Teknologi | Deskripsi |
|---|---|---|
| **Framework** | Vue 3 (Composition API `<script setup>`) | Reaktif, modular, dan performa tinggi |
| **Build Tool** | Vite 8 | Fast HMR & bundling modular |
| **Styling** | Tailwind CSS v4 + PostCSS | Token desain kustom (warna brand, tipografi Outfit/Inter) |
| **Routing** | Vue Router 5 | Lazy-loaded views, auto scroll to top, & dynamic meta |
| **State & Store** | Pinia | Global state management |
| **Form Validation** | Zod | Type-safe schema validation |
| **Icons** | Lucide Icons (`lucide-vue-next` / `@lucide/vue`) | Ikon modern, clean, dan konsisten |
| **Testing** | Vitest + @vue/test-utils | 46 Unit tests lengkap (100% Passed) |

---

## 📁 Struktur Direktori

```
d:/compro/
├── context/               # Dokumentasi sistem (PRD, SCHEMA, CHANGELOG)
│   ├── PRD.md             # Product Requirements Document & Amandemen
│   ├── SCHEMA.md          # Struktur data JSON aktual
│   └── CHANGELOG.md       # Riwayat pengerjaan fase aktif
├── src/
│   ├── assets/            # File CSS (main.css dengan Tailwind v4 theme)
│   ├── components/
│   │   ├── layout/        # TopBar, Navbar, Footer, ScrollToTop
│   │   ├── ui/            # BaseButton, BaseCard, SectionTitle, BaseBadge, PageHeader, ToastNotification
│   │   ├── sections/      # HeroSlider, ScoreCards, AboutSection, ServicesSection, WorkProcessSection, StatsStrip, FeaturedProjects, TestimonialsSection, CtaBanner
│   │   ├── about/         # VisionMission, CompanyHistory, TeamSection, CertificationsSection
│   │   ├── projects/      # ProjectCard, ProjectFilter
│   │   ├── forms/         # ContactForm
│   │   └── __tests__/     # 20 file unit tests (46 tests total)
│   ├── data/              # Data dummy JSON lokal
│   │   ├── company.json   # Identitas perusahaan, visi misi, kontak, sejarah, sertifikasi
│   │   ├── home.json      # Slides hero, score cards, stats counter, work process
│   │   ├── services.json  # 5 daftar layanan konstruksi & scope pekerjaan
│   │   ├── projects.json  # 8 data proyek (Gedung, Infrastruktur, Renovasi, Interior)
│   │   ├── team.json      # Jajaran direksi & tim ahli
│   │   └── testimonials.json # Testimoni klien & ulasan mitra
│   ├── lib/               # contactSchema.js (Zod schema)
│   ├── router/            # index.js (Konfigurasi rute, lazy load, beforeEach SEO meta)
│   ├── views/             # HomeView, AboutView, ServicesView, ProjectsView, ProjectDetailView, ContactView, NotFoundView
│   ├── App.vue            # Layout shell utama
│   └── main.js            # Entry point aplikasi
├── index.html             # SEO Meta, OpenGraph, Twitter Cards, Schema.org JSON-LD
├── package.json           # Dependensi & script NPM
├── tailwind.config.js     # Token konfigurasi Tailwind
└── vite.config.js         # Konfigurasi Vite & Tailwind plugin
```

---

## 🚀 Panduan Memulai Secara Lokal

### Prasyarat:
- Node.js versi `^22.14.0` atau yang lebih baru
- NPM versi `9.x` / `10.x` / `12.x`

### 1. Instalasi Dependensi
```bash
npm install --legacy-peer-deps
```

### 2. Menjalankan Server Development
```bash
npm run dev
```
Aplikasi akan aktif di `http://localhost:5173/`.

### 3. Menjalankan Unit Tests (Vitest)
```bash
# Menjalankan seluruh 46 unit test dalam sekali run:
npx vitest run

# Atau mode watch:
npm run test:unit
```

### 4. Build untuk Produksi
```bash
npm run build
```
Bundle teroptimasi akan dihasilkan pada direktori `dist/`. Anda dapat mempratinjau hasil build dengan:
```bash
npm run preview
```

---

## 🌐 Panduan Deployment

### Deployment ke Vercel / Netlify:
Proyek ini adalah Single Page Application (SPA) Vue 3. Untuk memastikan *client-side routing* (seperti `/tentang`, `/proyek/menara-graha-nusantara`, `/kontak`) tidak menghasilkan error 404 saat di-refresh pada web server produksi:

#### Opsi Vercel (`vercel.json`):
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

#### Opsi Netlify (`public/_redirects`):
```
/*    /index.html   200
```

---

## 📄 Lisensi & Atribusi
- Proyek ini dibuat sebagai **dummy portfolio** demonstrasi pengembangan frontend web modern.
- Seluruh aset foto berasal dari [Unsplash](https://unsplash.com/) dengan lisensi penggunaan bebas.
- Seluruh nama perusahaan, nama klien, dan nomor kontak yang digunakan bersifat fiktif.

---
© 2026 PT Adhirajasa Karya Mandiri. Dikelola untuk Portfolio Rekayasa Frontend.
