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

## UI Refinement — Penghapusan Breadcrumbs di Seluruh Halaman (2026-10-16)
**FR terkait:** FR-1.1, Desain & Layout Halaman
**Yang dikerjakan:**
- **Penghapusan Breadcrumbs Global:**
  - Menghapus navigasi breadcrumb (`<nav aria-label="Breadcrumb">`) pada komponen header bersama [PageHeader.vue](file:///d:/Projects/umroh/src/components/ui/PageHeader.vue)
  - Membersihkan passing prop `:breadcrumbs` di seluruh view sub-halaman: [AboutView.vue](file:///d:/Projects/umroh/src/views/AboutView.vue), [ServicesView.vue](file:///d:/Projects/umroh/src/views/ServicesView.vue), [ProjectsView.vue](file:///d:/Projects/umroh/src/views/ProjectsView.vue), [ProjectDetailView.vue](file:///d:/Projects/umroh/src/views/ProjectDetailView.vue), dan [ContactView.vue](file:///d:/Projects/umroh/src/views/ContactView.vue)
  - Tampilan header pada seluruh sub-halaman kini lebih bersih, lapang, dan langsung menonjolkan judul serta deskripsi halaman
- **Testing & Build:** Seluruh 58 unit tests lolos (100% green) dan build produksi Vite sukses
**File yang berubah:** `src/components/ui/PageHeader.vue`, `src/components/__tests__/PageHeader.spec.js`, `src/views/AboutView.vue`, `src/views/ServicesView.vue`, `src/views/ProjectsView.vue`, `src/views/ProjectDetailView.vue`, `src/views/ContactView.vue`, `context/CHANGELOG.md`
**Test:** 58 passed / 58 total (23 test files)
**Docs updated:** CHANGELOG.md

## Content Update — Penggantian Foto Buah & Penyesuaian Profil Tim ke Laki-Laki (2026-10-16)
**FR terkait:** FR-2.1, FR-2.4, FR-3.3, FR-5.1
**Yang dikerjakan:**
- **Eliminasi Foto Buah/Supermarket:**
  - Mengganti seluruh referensi foto buah/supermarket (`photo-1542838132-92c53300491e`) dengan foto ibadah Islami autentik (Ka'bah Makkah, tawaf, dan mushaf Al-Qur'an) pada:
    - [home.json](file:///d:/Projects/umroh/src/data/home.json) (Slide 2: Haji Khusus & Furoda)
    - [services.json](file:///d:/Projects/umroh/src/data/services.json) (Layanan 3: Haji Khusus & Haji Furoda Mujamalah)
    - [projects.json](file:///d:/Projects/umroh/src/data/projects.json) (Paket Umroh Reguler, Umroh Ramadhan, Haji Furoda, Haji Kuota Kemenag, dan Badal Umroh)
    - [company.json](file:///d:/Projects/umroh/src/data/company.json) (SK Izin Resmi Haji Khusus PIHK)
- **Penyesuaian Profil Tim & Testimoni:**
  - Mengubah anggota tim ke-4 pada [team.json](file:///d:/Projects/umroh/src/data/team.json) dari *Hj. Siti Rahmawati, S.Psi.* menjadi figur pria: **H. Arif Rahman Hakim, S.E., M.M.** (Kepala Divisi Operasional & Pelayanan Jamaah) lengkap dengan foto profil pria profesional
  - Menyesuaikan testimoni ke-4 pada [testimonials.json](file:///d:/Projects/umroh/src/data/testimonials.json) menjadi **H. Bambang Irawan & Keluarga** dengan avatar pria
- **Testing & Build:** Seluruh 58 unit tests lolos (100% green) dan build produksi Vite sukses
**File yang berubah:** `src/data/home.json`, `src/data/services.json`, `src/data/projects.json`, `src/data/company.json`, `src/data/team.json`, `src/data/testimonials.json`, `context/CHANGELOG.md`
**Test:** 58 passed / 58 total (23 test files)
**Docs updated:** CHANGELOG.md

## UI Refinement — Penghapusan Badge & Perbaikan Spacing Navigasi Hero Slider (2026-10-16)
**FR terkait:** FR-2.1, Desain & Layout Hero Section
**Yang dikerjakan:**
- **Penghapusan Badge Eyebrow Tagline:**
  - Menghapus badge pill tagline (*"Melayani Tamu Allah Sepenuh Hati Menuju Ibadah yang Mabrur"*) di atas judul hero slider pada [HeroSlider.vue](file:///d:/Projects/umroh/src/components/sections/HeroSlider.vue) agar layout header hero lebih lapang, bersih, dan langsung fokus ke headline utama
- **Perbaikan Jarak & Posisi Navigasi Hero:**
  - Memindahkan tombol panah navigasi (`<` dan `>`) dari sudut kanan bawah (yang sebelumnya mepet dan bertabrakan dengan floating card `ScoreCards`) ke sisi kiri dan kanan layar secara vertikal terpusat (`top-1/2 -translate-y-1/2 left-4 lg:left-8` dan `right-4 lg:right-8`) dengan tampilan frosted glass circular mewah (`bg-slate-900/40 backdrop-blur-md border border-white/20 hover:bg-amber-500`)
  - Menaikkan indikator titik slide (*dots indicator*) ke `bottom-24 sm:bottom-28` agar berdiri aman dan terpisah di atas kartu `ScoreCards`
- **Testing & Build:** Seluruh 58 unit tests lolos (100% green) dan build produksi Vite sukses
**File yang berubah:** `src/components/sections/HeroSlider.vue`, `context/CHANGELOG.md`
**Test:** 58 passed / 58 total (23 test files)
**Docs updated:** CHANGELOG.md

## Style — Palet Warna Default Segar, Cerah & Bernuansa Islami (2026-10-16)
**FR terkait:** FR-8.1, Desain & Tema Visual
**Yang dikerjakan:**
- **Pembaruan Palet Warna Default:**
  - Mengubah warna primer default dari hijau zamrud gelap pekat (`#064e3b` Emerald 900) menjadi hijau zamrud Islami yang cerah, kaya, dan segar (`#047857` Emerald 700 / `#059669` Emerald 600) di `src/data/agencies.json`, `src/lib/agencies.js`, `src/assets/main.css`, `public/favicon.svg`, dan `public/images/logos/default-biro.svg`
  - Mengubah warna aksen default menjadi emas amber hangat yang bercahaya (`#f59e0b` Amber 500 & `#fbbf24` Amber 400)
- **Eliminasi Kesan Gelap & Monokrom:**
  - `HeroSlider.vue`: Mengganti overlay hitam pekat `slate-950/95` dengan gradien hijau zamrud Islami `from-emerald-950/90 via-emerald-950/65 to-slate-900/35` sehingga keindahan visual Masjidil Haram & Nabawi bersinar alami dan teks tetap memiliki kontras tinggi
  - `TopBar.vue`: Mengganti latar `bg-slate-900` dengan hijau zamrud `bg-emerald-950 text-emerald-100` beraksen emas
  - `WorkProcessSection.vue` & `CompanyHistory.vue`: Mengganti flat `bg-slate-900` dengan gradasi halus bernuansa zamrud dan pencahayaan radial ambient emas
  - `CtaBanner.vue`: Mengubah latar kartu menjadi gradien hijau zamrud `from-emerald-900 via-emerald-950 to-slate-900` dengan tombol emas amber menyala
  - `Footer.vue`: Menyelaraskan latar belakang dengan gradasi zamrud lembut `from-slate-950 to-emerald-950/80`
  - `AboutSection.vue`, `StatsStrip.vue`, `FeaturedProjects.vue`: Mengganti tombol atau badge hitam ke warna brand aktif (`bg-brand-600` / `bg-emerald-950`)
- **Fix Syntax Nilai CSS Variable Tailwind v4:**
  - Memperbaiki `shadesToCssVariables` di `src/lib/theme.js` agar menghasilkan kode warna hex valid (`#xxxxxx`) untuk `--color-${prefix}-${key}` sehingga utilitas Tailwind v4 seperti `bg-amber-500` dan `text-amber-400` teraplikasikan secara langsung tanpa fallback invalid
- **Testing & Build:** Seluruh 58 unit tests lolos (100% green) dan build produksi Vite sukses
**File yang berubah:** `src/data/agencies.json`, `src/lib/agencies.js`, `src/lib/theme.js`, `src/assets/main.css`, `public/favicon.svg`, `public/images/logos/default-biro.svg`, `index.html`, `src/components/layout/TopBar.vue`, `src/components/sections/HeroSlider.vue`, `src/components/sections/WorkProcessSection.vue`, `src/components/sections/CtaBanner.vue`, `src/components/layout/Footer.vue`, `src/components/sections/AboutSection.vue`, `src/components/sections/StatsStrip.vue`, `src/components/sections/FeaturedProjects.vue`, `src/views/ProjectDetailView.vue`, `src/components/__tests__/theme.spec.js`, `context/CHANGELOG.md`
**Test:** 58 passed / 58 total (23 test files)
**Docs updated:** CHANGELOG.md

## Fix — Favicon Islami, Logo Biro Preset, dan Visibilitas Hero Slider (2026-10-16)
**FR terkait:** FR-1.2, FR-2.1, FR-7.2
**Yang dikerjakan:**
- **Favicon & Logo Aplikasi:**
  - Membuat `public/favicon.svg` bertema Kubah Masjid & Bulan Sabit Emas berlatar hijau zamrud (menggantikan helm proyek)
  - Membuat aset SVG logo biro resmi di `public/images/logos/`: `default-biro.svg`, `surya-biro.svg`, `al-madinah-travel.svg`, dan `an-nur-mandiri.svg` sehingga logo pada navbar & footer tampil sempurna tanpa error 404
- **Perbaikan Visibilitas Teks & Tombol Hero Section:**
  - Mengatasi circular dependency pada CSS variables `@theme` dan `:root` di `src/assets/main.css` yang sebelumnya membuat nilai `--color-amber-400` dan `--color-amber-500` menjadi invalid/transparan di browser
  - Menyuntikkan token `--app-brand-*` dan `--app-amber-*` via `src/lib/theme.js` dengan fallback hex solid
  - Memperbarui `HeroSlider.vue` dengan menambahkan eyebrow badge pill berlatar blur kontras untuk tagline *"Melayani Tamu Allah Sepenuh Hati..."*, menambah tinggi hero slider (`min-h-[640px] sm:min-h-[700px] h-[80vh]`), dan memberikan padding bawah lapang (`pb-24 sm:pb-32`) agar tombol CTA tidak tertutup kartu `ScoreCards`
- **Testing:** Seluruh 58 unit tests lolos (100% green) dan build produksi Vite sukses
**File yang berubah:** `public/favicon.svg`, `public/images/logos/*.svg`, `src/assets/main.css`, `src/lib/theme.js`, `src/components/sections/HeroSlider.vue`, `context/CHANGELOG.md`
**Test:** 58 passed / 58 total (23 test files)
**Docs updated:** CHANGELOG.md

## Polish — Penyelarasan Menyeluruh Teks, Menu Navigasi, dan Gambar Haji & Umroh (2026-10-16)
**FR terkait:** FR-1.1 s/d FR-6.6
**Yang dikerjakan:**
- **Pembersihan Metadata & SEO Global:** Memperbarui `index.html` (Title, Meta Description, Keywords, OG Tags, Twitter Cards, Schema.org `TravelAgency` PPIU & PIHK) menggantikan seluruh jejak profil kontraktor
- **Pembaruan Menu Navigasi Navbar:** Mengubah nama menu menjadi `Beranda`, `Tentang Kami`, `Layanan Ibadah`, `Paket Umroh & Haji`, `Kontak` di `Navbar.vue`
- **Penyelarasan Teks Komponen:**
  - `ServicesSection.vue`: Mengganti badge "Program Ibadah Unggulan", deskripsi layanan ibadah, dan ikon yang relevan (`Compass`, `Globe`, `Award`, `HeartHandshake`)
  - `TestimonialsSection.vue`: Mengganti badge "Pengalaman Jamaah" dan deskripsi kekhusyukan ibadah
  - `TeamSection.vue`: Mengganti jajaran asatidz pembimbing haji/umroh dan nama agency dinamis
  - `CompanyHistory.vue`: Mengganti deskripsi sejarah khidmat melayani jamaah ke Baitullah
  - `StatsStrip.vue`: Mengganti teks "Layanan Konsultan Jamaah 24/7"
  - `WorkProcessSection.vue`: Mengganti header "Tahapan Pendaftaran: 4 Langkah Mudah Menuju Baitullah Bersama Kami"
  - `ContactForm.vue`: Mengganti header "Formulir Konsultasi & Pendaftaran", opsi perkiraan anggaran paket umroh/haji, dan placeholder kebutuhan ibadah
- **Pembaruan Gambar:** Mengganti foto tahapan alur kerja di `src/data/home.json` (Langkah 01 konsultasi dan Langkah 03 Al-Qur'an & bimbingan manasik)
- **Unit Testing:** Menyelaraskan test assertion di `Navbar.spec.js` dan `ServicesView.spec.js`, seluruh 58 unit tests lulus 100% dan build produksi sukses
**File yang berubah:** `index.html`, `src/components/layout/Navbar.vue`, `src/components/sections/ServicesSection.vue`, `src/components/sections/TestimonialsSection.vue`, `src/components/about/TeamSection.vue`, `src/components/about/CompanyHistory.vue`, `src/components/sections/StatsStrip.vue`, `src/components/sections/WorkProcessSection.vue`, `src/components/forms/ContactForm.vue`, `src/data/home.json`, unit tests
**Test:** 58 passed / 58 total (23 test files)
**Docs updated:** CHANGELOG.md

## Fase 8.2 — Implementasi Penuh Website Haji & Umroh + Dynamic Client Mockup Subpath (2026-10-16)
**FR terkait:** FR-1.x s/d FR-7.x (termasuk FR-7.1 s/d FR-7.6)
**Yang dikerjakan:**
- **Dynamic Multi-Client Branding Engine (`gerayana-rent` pattern):**
  - Membuat `src/data/agencies.json` berisi profil biro default (`default-biro`) dan biro khusus (`surya-biro`, `al-madinah-travel`, `an-nur-mandiri`)
  - Membuat `src/lib/theme.js` untuk konversi warna hex/rgb, generator 11 tingkat gradasi palette (50–950), dan injektor CSS variables (`--color-brand-*`, `--color-accent-*`, `--color-amber-*`) ke DOM
  - Membuat `src/lib/agencies.js` untuk resolver profil biro berdasarkan slug URL serta auto-sintesis nama/inisial/warna untuk slug baru/kustom
  - Membuat `src/composables/useAgency.js` sebagai state reaktif global, updater document title, dan helper rute `agencyLink(to)`
  - Mengonfigurasi `src/router/index.js` dengan rute mockup `/:agencySlug` dan navigation guard sinkronisasi aktif agency
- **Transformasi Data Domain Haji & Umroh:**
  - Mengubah `company.json` (Izin Kemenag PPIU No. 812/2020 & PIHK No. 245/2022, 5 Pasti Umroh, akreditasi A)
  - Mengubah `home.json` (hero slides Ka'bah & Nabawi, scorecard 5 Pasti Umroh, statistik jamaah, 4 langkah pendaftaran)
  - Mengubah `services.json` (5 layanan ibadah: Reguler, Plus, Haji Khusus/Furoda, Badal, Wisata Halal)
  - Mengubah `projects.json` (8 paket ibadah haji & umroh beserta hotel ring 1 pelataran dan maskapai penerbangan)
  - Mengubah `team.json` (pembimbing asatidz bersertifikat Kemenag & pimpinan manajemen)
  - Mengubah `testimonials.json` (testimoni jamaah haji & umroh)
- **Pembaruan Komponen & Halaman:**
  - Integrasi dynamic agency, logo monogram, kontak WhatsApp dan `agencyLink` di `Navbar.vue`, `TopBar.vue`, `Footer.vue`, `ProjectCard.vue`, `HeroSlider.vue`, `AboutSection.vue`, `FeaturedProjects.vue`, `CtaBanner.vue`
  - Penyesuaian `ProjectsView.vue`, `ProjectDetailView.vue`, `ContactView.vue`, `AboutView.vue`, `ServicesView.vue` ke terminologi paket ibadah haji & umroh
- **Testing & Validasi:**
  - Menambahkan unit test `agencies.spec.js`, `theme.spec.js`, `useAgency.spec.js`
  - Memperbarui assertions unit test eksisting yang relevan (`ProjectsView.spec.js`, `ContactForm.spec.js`, `contactSchema.spec.js`, `ProjectDetailView.spec.js`, `Footer.spec.js`)
  - Seluruh 58 unit tests lolos (100% green), dan bundle build produksi Vite sukses tanpa error
**File yang berubah:** `src/data/*.json`, `src/lib/*`, `src/composables/*`, `src/router/index.js`, `src/components/**/*`, `src/views/**/*`, `src/assets/main.css`, `AGENTS.md`, `context/CHANGELOG.md`
**Test:** 58 passed / 58 total (23 test files)
**Docs updated:** AGENTS.md, CHANGELOG.md

## Fase 8.1 — Transformasi Scope & Rebranding Biro Haji & Umroh + Spesifikasi Mockup Dinamis (2026-10-16)
**FR terkait:** FR-1.x s/d FR-7.x
**Yang dikerjakan:**
- Mengubah arah proyek dari profil perusahaan kontraktor umum menjadi portal company profile & katalog paket ibadah untuk **Demo Biro Umroh dan Haji** (Biro Penyelenggara Haji Khusus & Umroh Resmi Kemenag RI: PPIU & PIHK)
- Memperbarui `context/PRD.md` mencakup latar belakang ibadah haji/umroh, pilar keunggulan (5 Pasti Umroh Kemenag), alur pendaftaran 4 langkah, paket ibadah, profil pembimbing ibadah (asatidz/muthawif), form pendaftaran/konsultasi jamaah, serta modul **FR-7.x Dynamic Client Mockup Branding & Whitelabel Subpath System** (`/:agencySlug` seperti `/surya-biro`) mengacu pada arsitektur `gerayana-rent`
- Memperbarui `context/SCHEMA.md` untuk menyelaraskan skema data dummy JSON di `src/data/` ke domain biro perjalanan haji & umroh dan menambahkan skema `agencies.json` untuk multi-client mockup
- Membuat pedoman kerja baku `context/rules.md` (prinsip anti-halu, standar Vue 3 & Composition API, konvensi Tailwind, testing, dan alur docs-first)
- Memperbarui `AGENTS.md` agar mencerminkan identitas biro haji & umroh serta status fase terkini
- Memastikan tidak ada file kode program yang diubah sesuai instruksi user
**File yang berubah:** AGENTS.md, context/rules.md, context/PRD.md, context/SCHEMA.md, context/CHANGELOG.md
**Test:** 46 passed / 46 total (terjaga, tanpa perubahan kode)
**Docs updated:** PRD §3.7 & §9, SCHEMA.md, rules.md, AGENTS.md, CHANGELOG.md

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
