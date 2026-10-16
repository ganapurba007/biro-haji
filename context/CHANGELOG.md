# CHANGELOG.md

> Riwayat aktif proyek — hanya simpan ~10-15 fase terbaru di sini. Fase lama dipindahkan ke `CHANGELOG-archive.md` (ringkas, jangan copy-paste detail penuh). Entri terbaru selalu di PALING ATAS.

<!--
Format tiap entri:

## Fase [N] — [judul singkat] ([tanggal])
**FR terkait:** [nomor FR dari PRD.md §3, kalau ada]
**Yang dikerjakan:**
- [poin singkat]
**File yang berubah:** [daftar file utama]
**Test:** [X passed / Y total]
**Docs updated:** [PRD §9 / SCHEMA.md / tidak ada perubahan scope]
-->

## Refactoring — Corporate Aesthetic Polish & Image Audit (2026-10-09)
**Yang dikerjakan:**
- Menghilangkan style pill/capsule badge generic ("AI slop") di seluruh website dan menggantinya dengan sleek corporate typography, eyebrow subheaders bergaris aksen minimalis, dan rounded-md micro-tags yang profesional
- Membersihkan penggunaan tanda dash/strip berlebihan (`--`) pada placeholder form input dan opsi dropdown
- Membuat icon tab browser (favicon) custom bertema helm kontraktor & struktur geometris arsitektur ([favicon.svg](file:///d:/compro/public/favicon.svg)) dan mengintegrasikannya di [index.html](file:///d:/compro/index.html)
- Memperbarui [BaseBadge.vue](file:///d:/compro/src/components/ui/BaseBadge.vue), [SectionTitle.vue](file:///d:/compro/src/components/ui/SectionTitle.vue), [AboutSection.vue](file:///d:/compro/src/components/sections/AboutSection.vue), [CtaBanner.vue](file:///d:/compro/src/components/sections/CtaBanner.vue), [HeroSlider.vue](file:///d:/compro/src/components/sections/HeroSlider.vue), [ContactForm.vue](file:///d:/compro/src/components/forms/ContactForm.vue), [VisionMission.vue](file:///d:/compro/src/components/about/VisionMission.vue), dan [CompanyHistory.vue](file:///d:/compro/src/components/about/CompanyHistory.vue)
- Menjalankan audit menyeluruh pada 39 URL gambar di dataset JSON: memperbaiki 3 URL Unsplash yang 404 (hero slider, work process step 3, project 2 gallery) dan memastikan seluruh gambar 100% valid HTTP 200
- Menjalankan full unit test suite (46 passed / 46 total) & production build verification (`npm run build`)
**File yang berubah:** BaseBadge.vue, SectionTitle.vue, AboutSection.vue, CtaBanner.vue, HeroSlider.vue, ContactForm.vue, VisionMission.vue, CompanyHistory.vue, ProjectFilter.vue, favicon.svg, index.html, company.json, home.json, projects.json, CHANGELOG.md
**Test:** 46 passed / 46 total
**Docs updated:** CHANGELOG.md

## Fase 7 — Rilis & Dokumentasi Akhir Proyek (2026-10-09)
**Yang dikerjakan:**
- Menyusun dokumentasi komprehensif `README.md` (deskripsi proyek, fitur unggulan per modul, arsitektur folder, tech stack, panduan instalasi/pengujian, panduan deployment SPA Vercel & Netlify, dan atribusi lisensi)
- Menyiapkan konfigurasi rewrite routing SPA untuk Vercel (`vercel.json`) dan Netlify (`public/_redirects`)
- Menjalankan verifikasi akhir test suite (46 passed / 46 total) dan production build
- Sinkronisasi final seluruh dokumen proyek (`PRD.md`, `SCHEMA.md`, `CHANGELOG.md`, `AGENTS.md`)
**File yang berubah:** README.md, vercel.json, public/_redirects, context/CHANGELOG.md, context/PRD.md, AGENTS.md
**Test:** 46 passed / 46 total
**Docs updated:** PRD §6 dan AGENTS.md

## Fase 6 — Polishing, Responsivitas, SEO & Aksesibilitas (2026-10-09)
**FR terkait:** FR-1.6, FR-1.7, FR-6.5
**Yang dikerjakan:**
- Audit & optimasi responsivitas mobile-first dan desktop layout di seluruh viewport (360px, 768px, 1024px, 1280px+) dengan pencegahan horizontal overflow
- Penambahan OpenGraph meta tags, Twitter Cards, robots meta, dan Schema.org JSON-LD Structured Data `GeneralContractor` di `index.html`
- Polishing tampilan halaman 404 `NotFoundView.vue` (FR-1.7) dengan navigasi kembali ke beranda dan bantuan kontak
- Penguatan aksesibilitas ARIA labels, semantic landmark tags, touch target standard, dan kontras warna
- Menambahkan unit test untuk `NotFoundView.spec.js`
- Verifikasi bundle production build (`npm run build`)
**File yang berubah:** index.html, src/views/NotFoundView.vue, src/components/__tests__/NotFoundView.spec.js, context/CHANGELOG.md, context/PRD.md, AGENTS.md
**Test:** 46 passed / 46 total
**Docs updated:** PRD §6 dan AGENTS.md

## Fase 5 — Halaman Kontak, Form Validasi Zod, & Simulasi Pengiriman (2026-10-09)
**FR terkait:** FR-6.1, FR-6.2, FR-6.3, FR-6.4, FR-6.5, FR-6.6
**Yang dikerjakan:**
- Membuat skema validasi `contactSchema.js` dengan Zod sesuai aturan field, regex telepon `08xx`/`+62xx`, dan pesan error spesifik (FR-6.1)
- Membuat komponen `ContactForm.vue` (FR-6.1 s/d FR-6.5): validasi *realtime on-blur* & submit, counter karakter dinamis, anti-spam honeypot, aksesibilitas penuh (`aria-invalid`, `aria-describedby`), status loading/disabled saat submit, pemindahan fokus otomatis ke field error pertama, serta toggle simulasi skenario gagal/sukses
- Membuat komponen `ToastNotification.vue` untuk popup notifikasi sukses/error
- Menyusun halaman `src/views/ContactView.vue` (FR-6.6: blok info kontak lengkap, jam kerja, bebas pulsa, FAQ konsultasi, dan peta interaktif embed Google Maps)
- Menambahkan 3 file unit test baru di `src/components/__tests__/` (`contactSchema.spec.js`, `ContactForm.spec.js`, `ContactView.spec.js`)
**File yang berubah:** src/lib/contactSchema.js, src/components/forms/ContactForm.vue, src/components/ui/ToastNotification.vue, src/views/ContactView.vue, src/components/__tests__/*, context/CHANGELOG.md, context/PRD.md, AGENTS.md
**Test:** 45 passed / 45 total
**Docs updated:** PRD §6 dan AGENTS.md

## Fase 4 — Portfolio Proyek (Grid, Filter Kategori, & Detail Proyek) (2026-10-09)
**FR terkait:** FR-5.1, FR-5.2, FR-5.3, FR-5.4
**Yang dikerjakan:**
- Membuat komponen `ProjectCard.vue` (FR-5.1: visual thumbnail, badge kategori & status, lokasi, tahun, durasi pengerjaan, judul, ringkasan, dan link detail)
- Membuat komponen `ProjectFilter.vue` (FR-5.2: tombol filter interaktif per kategori dengan penghitung jumlah proyek dinamis)
- Menyusun halaman `src/views/ProjectsView.vue` (FR-5.1 & FR-5.2: grid responsif 3-kolom, filter realtime tanpa reload, empty state handling, dan banner CTA)
- Menyusun halaman `src/views/ProjectDetailView.vue` (FR-5.3: galeri foto dengan thumbnail switcher, ringkasan spesifikasi klien/lokasi/durasi, deskripsi rekayasa teknis, tombol salin tautan, dan section proyek terkait)
- Menambahkan penanganan 404 pada `ProjectDetailView.vue` (FR-5.4: tampilan informatif bila slug proyek tidak ditemukan dengan tombol kembali ke katalog proyek)
- Menambahkan file unit tests di `src/components/__tests__/` (`ProjectsView.spec.js` dan `ProjectDetailView.spec.js`)
**File yang berubah:** src/components/projects/*, src/views/ProjectsView.vue, src/views/ProjectDetailView.vue, src/components/__tests__/*, context/CHANGELOG.md, context/PRD.md, AGENTS.md
**Test:** 32 passed / 32 total
**Docs updated:** PRD §6 dan AGENTS.md

## Fase 3 — Halaman Tentang Kami & Layanan Konstruksi (2026-10-09)
**FR terkait:** FR-3.1, FR-3.2, FR-3.3, FR-3.4, FR-4.1, FR-4.2
**Yang dikerjakan:**
- Membuat komponen reusable `PageHeader.vue` dengan background overlay dan navigasi breadcrumb
- Membuat komponen `VisionMission.vue` (FR-3.1: visi perusahaan, 4 pilar misi strategis, dan nilai integritas)
- Membuat komponen `CompanyHistory.vue` (FR-3.2: timeline vertikal interaktif jejak sejarah perusahaan 2012–2024)
- Membuat komponen `TeamSection.vue` (FR-3.3: profil jajaran manajemen dan tenaga ahli teknik berlisensi)
- Membuat komponen `CertificationsSection.vue` (FR-3.4: legalitas resmi SBU Kualifikasi Besar & sertifikasi ISO 9001, 14001, 45001)
- Menyusun halaman `src/views/AboutView.vue` secara utuh
- Menyusun halaman `src/views/ServicesView.vue` (FR-4.1: showcase 5 layanan spesialis dengan ruang lingkup lengkap; FR-4.2: integrasi alur kerja & CTA banner)
- Menambahkan 3 file unit test baru di `src/components/__tests__/` (`PageHeader.spec.js`, `AboutView.spec.js`, `ServicesView.spec.js`)
**File yang berubah:** src/components/ui/PageHeader.vue, src/components/about/*, src/views/AboutView.vue, src/views/ServicesView.vue, src/components/__tests__/*, context/CHANGELOG.md, context/PRD.md, AGENTS.md
**Test:** 28 passed / 28 total
**Docs updated:** PRD §6 dan AGENTS.md

## Fase 2 — Beranda & Homepage Sections (2026-10-09)
**FR terkait:** FR-2.1, FR-2.2, FR-2.3, FR-2.4, FR-2.5, FR-2.6, FR-2.7, FR-2.8, FR-2.9
**Yang dikerjakan:**
- Membuat komponen `HeroSlider.vue` (FR-2.1: slider 3 slide, autoplay 6 detik, kontrol panah & indikator, pause saat hover)
- Membuat komponen `ScoreCards.vue` (FR-2.2: 3 kartu skor bernomor yang menumpuk di bawah hero slider)
- Membuat komponen `AboutSection.vue` (FR-2.3: ringkasan profil, highlight poin keunggulan, dual CTAs ke profil dan alur kerja)
- Membuat komponen `ServicesSection.vue` (FR-2.4: 4 kartu layanan bernomor dengan ikon, deskripsi, dan link detail)
- Membuat komponen `WorkProcessSection.vue` (FR-2.5: 4 langkah kerja terstruktur dengan gambar dan anchor id `#alur-kerja`)
- Membuat komponen `StatsStrip.vue` (FR-2.6: statistik hitung otomatis saat masuk viewport via IntersectionObserver & bebas pulsa)
- Membuat komponen `FeaturedProjects.vue` (FR-2.7: grid 3 proyek unggulan dengan kategori, status, dan link detail)
- Membuat komponen `TestimonialsSection.vue` (FR-2.8: kartu testimoni klien dengan bintang rating dan avatar)
- Membuat komponen `CtaBanner.vue` (FR-2.9: banner penutup ajakan konsultasi menuju `/kontak`)
- Merakit seluruh section secara mulus di `src/views/HomeView.vue`
- Menambahkan 5 file unit test baru di `src/components/__tests__/`
**File yang berubah:** src/components/sections/*, src/views/HomeView.vue, src/components/__tests__/*, vite.config.js, context/CHANGELOG.md, context/PRD.md, AGENTS.md
**Test:** 21 passed / 21 total
**Docs updated:** PRD §6 dan AGENTS.md

## Fase 1 — Layout Global & UI Components Dasar (2026-10-09)
**FR terkait:** FR-1.1, FR-1.2, FR-1.3, FR-1.4, FR-1.5, FR-1.6, FR-1.7
**Yang dikerjakan:**
- Membuat komponen `TopBar.vue` (FR-1.1: kontak telepon, email, jam kerja, bebas pulsa; hidden on mobile)
- Membuat komponen `Navbar.vue` (FR-1.2, FR-1.3: sticky navigation, logo branding, indikator menu aktif, CTA Konsultasi Gratis, mobile drawer dengan escape listener & backdrop close)
- Membuat komponen `Footer.vue` (FR-1.4: 3-kolom tentang perusahaan, media sosial, tautan cepat, info kontak lengkap, baris hak cipta)
- Membuat komponen `ScrollToTop.vue` (FR-1.5: tombol melayang smooth-scroll yang muncul setelah scroll 400px)
- Membuat komponen UI dasar: `BaseButton.vue`, `BaseCard.vue`, `SectionTitle.vue`, `BaseBadge.vue`
- Mengintegrasikan seluruh layout global ke dalam `src/App.vue`
- Menambahkan unit tests lengkap untuk seluruh komponen layout dan UI dasar
**File yang berubah:** src/components/layout/*, src/components/ui/*, src/components/__tests__/*, src/App.vue, context/CHANGELOG.md, context/PRD.md, AGENTS.md
**Test:** 14 passed / 14 total
**Docs updated:** PRD §6 dan AGENTS.md

## Fase 0 — Setup Dasar Proyek & Data JSON (2026-10-09)
**Yang dikerjakan:**
- Konfigurasi Tech Stack Vue 3 + Tailwind CSS + Vue Router + Pinia + Lucide Icons + Vitest
- Integrasi Tailwind CSS v4 dengan custom design tokens (warna brand, tipografi Outfit/Inter)
- Setup struktur data dummy JSON lengkap di `src/data/` (`company.json`, `home.json`, `services.json`, `projects.json`, `team.json`, `testimonials.json`) sesuai `SCHEMA.md`
- Inisialisasi rute dan dynamic meta title di Vue Router
- Verifikasi build dan unit test
**File yang berubah:** AGENTS.md, context/PRD.md, context/CHANGELOG.md, package.json, postcss.config.js, tailwind.config.js, src/assets/main.css, src/router/index.js, src/views/*, src/data/*.json
**Test:** 1 passed / 1 total
**Docs updated:** PRD §9 (Amandemen stack Vue 3) dan AGENTS.md
