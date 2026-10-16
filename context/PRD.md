# PRD.md — Demo Biro Umroh dan Haji

> Dokumen ini adalah SPESIFIKASI & RENCANA SISTEM. Untuk kebenaran struktur data saat ini, selalu rujuk `SCHEMA.md`, bukan §4 di bawah. Setiap perbedaan antara dokumen dan implementasi aktual dicatat di §9 Amandemen.

## Daftar Isi
- §1 Overview
- §2 Tech Stack
- §3 Functional Requirements
- §4 Data Model (struktur file JSON lokal di `src/data/`)
- §5 Security & Constraints
- §6 Milestone
- §7 Non-Goals (di luar scope)
- §8 Development Guidelines
- §9 Amandemen (log perubahan scope)
- §10 Referensi Tampilan & Desain

---

## 1. Overview
**Apa yang dibangun:** Website company profile dan portal katalog paket ibadah multi-halaman untuk biro perjalanan haji dan umroh, **Demo Biro Umroh dan Haji** (Izin Resmi Kemenag RI: PPIU No. 812/2020 & PIHK No. 245/2022). Website ini dibangun menggunakan Vue 3 dan Tailwind CSS. Seluruh konten (profil biro, katalog paket umroh & haji, pembimbing ibadah, testimoni jamaah) dikelola melalui file JSON lokal tanpa backend database.
**Untuk siapa:** 
1. Calon jamaah dan keluarga yang membutuhkan informasi paket umroh, haji khusus/furoda, jadwal keberangkatan, fasilitas hotel Makkah & Madinah, legalitas izin Kemenag RI (5 Pasti Umroh), serta konsultasi pendaftaran online.
2. Reviewer portfolio (HRD/engineering lead) yang menilai kualitas arsitektur frontend, responsivitas, aksesibilitas, deklarasi data, dan kebersihan kode.
**Masalah yang diselesaikan:** Memberikan media informasi digital yang kredibel, transparan, dan menenangkan bagi calon jamaah dalam memilih biro ibadah berizin resmi dengan fasilitas pasti, kepastian jadwal, pembimbing ibadah berkompeten sesuai sunnah, dan formulir konsultasi yang mudah diisi.

## 2. Tech Stack
| Layer | Pilihan | Alasan singkat |
|---|---|---|
| Backend | — (tidak ada) | Scope frontend murni, data terisolasi di file JSON lokal |
| Frontend | Vue 3 (Vite), Tailwind CSS, Vue Router, Pinia | Komponen modern & reaktif, routing SPA multi-halaman cepat |
| Form & validasi | Vue Composition API + Zod | Validasi deklaratif, type-safe, pesan error spesifik |
| Database | — (tidak ada) | Data dummy terstruktur di `src/data/*.json` |
| Auth | — (tidak ada) | Publik portal tanpa area login berbayar |
| Hosting/Deploy | Vercel / Netlify | Continuous deployment dari repository Git |

Pendukung: Lucide Vue Next (ikonografi), Vitest + @vue/test-utils (pengujian unit).

## 3. Functional Requirements

> Format: FR-[nomor modul].[nomor urut] — [judul]. Nomor FR yang sudah ada dipertahankan untuk menjamin stabilitas pengujian dan penelusuran fitur.

### 3.1 Layout Global
- **FR-1.1** — Top bar di atas navbar berisi nomor legalitas resmi (PPIU/PIHK Kemenag), nomor telepon kantor, hotline WhatsApp 24/7, email resmi, dan jam layanan kantor; disembunyikan di layar mobile.
- **FR-1.2** — Navbar sticky: logo biro haji & umroh, menu utama (Beranda, Tentang Kami, Layanan, Paket Ibadah, Kontak), dan tombol CTA "Konsultasi / Daftar" menuju `/kontak`. Di layar mobile bertransformasi menjadi hamburger drawer dengan penutupan via tombol close, klik navigasi, atau tombol Esc.
- **FR-1.3** — Menu aktif ditandai secara visual sesuai rute aktif.
- **FR-1.4** — Footer tiga kolom: profil singkat biro + nomor perizinan Kemenag & asosiasi haji/umroh (HIMPUH/AMPHURI), kontak kantor pusat & layanan darurat jamaah, tautan cepat katalog paket; baris hak cipta di bagian bawah.
- **FR-1.5** — Scroll kembali ke atas saat navigasi pindah rute, serta tombol mengambang *scroll to top* yang muncul setelah scroll 400px.
- **FR-1.6** — Setiap rute halaman memiliki tag `<title>` dan meta description dinamis yang relevan dengan kebutuhan SEO ibadah haji & umroh.
- **FR-1.7** — Halaman 404 (Not Found) yang informatif dengan tombol kembali ke Beranda atau bantuan ke halaman kontak.

### 3.2 Beranda
- **FR-2.1** — Hero slider 3 slide (Paket Umroh Reguler Bintang 5, Umroh Plus Turki/Thaif, Haji Khusus & Furoda Tanpa Antre). Dilengkapi autoplay 6 detik, navigasi panah & titik indikator, serta fitur jeda (pause) saat kursor hover atau elemen berfokus.
- **FR-2.2** — Tiga kartu skor / pilar keunggulan yang menumpuk di bawah hero:
  1. *Legalitas & 5 Pasti Umroh* (Pasti Travelnya, Jadwalnya, Terbangnya, Hotelnya, Visanya - 100%)
  2. *Pembimbing Ibadah Sesuai Sunnah* (Muthawif & Asatidz Berpengalaman - 100%)
  3. *Akomodasi Nyaman & Penerbangan Langsung* (Hotel Ring 1 & Direct Flight - 98%)
- **FR-2.3** — Section "Tentang Kami": ringkasan profil biro, komitmen pelayanan amanah, dua tombol aksi ("Profil Lengkap" → `/tentang`, "Alur Pendaftaran" → anchor `#alur-pendaftaran`), dan visual representasi Tanah Suci/jamaah.
- **FR-2.4** — Section layanan: 4 kartu layanan ibadah bernomor (Umroh Reguler, Umroh Plus, Haji Khusus, Badal Haji & Umroh) lengkap dengan ikon, deskripsi singkat, dan tombol "Detail Layanan" → `/layanan`.
- **FR-2.5** — Section alur bimbingan & pendaftaran 4 langkah bernomor (Konsultasi & Pilih Paket, Pendaftaran & Paspor, Bimbingan Manasik, Keberangkatan Menuju Tanah Suci) dengan visual per langkah.
- **FR-2.6** — Strip statistik pencapaian (total jamaah diberangkatkan, persentase kepuasan, indeks ketepatan jadwal) dengan animasi hitung otomatis saat masuk ke viewport, dan nomor hotline konsultasi bebas pulsa/WhatsApp.
- **FR-2.7** — Section paket ibadah unggulan (3 paket pilihan dari data `featured: true` di katalog paket) menaut ke halaman detail paket.
- **FR-2.8** — Section testimoni jamaah (kartu review berisi kutipan kesan ibadah, nama jamaah, profesi/asal kota, rating kepuasan, dan foto avatar).
- **FR-2.9** — Banner penutup (CTA) dengan ajakan mendaftar atau berkonsultasi menuju rute `/kontak`.

### 3.3 Tentang Kami
- **FR-3.1** — Profil lengkap biro perjalanan, visi khidmah melayani tamu Allah, dan misi penyelenggaraan ibadah sesuai tuntunan syariat.
- **FR-3.2** — Timeline rekam jejak biro perjalanan (sejarah pendirian, pencapaian izin Kemenag RI, akreditasi A, hingga inovasi layanan jamaah).
- **FR-3.3** — Jajaran Dewan Pembimbing Ibadah (Asatidz, Ulama Pembina, Muthawif berlisensi) dan tim operasional profesional.
- **FR-3.4** — Legalitas resmi: SK Izin PPIU (Umroh), SK Izin PIHK (Haji Khusus), Sertifikat Akreditasi Kemenag, Lisensi IATA, dan Keanggotaan Asosiasi Haji Umroh (HIMPUH/AMPHURI).

### 3.4 Layanan
- **FR-4.1** — Katalog lengkap layanan ibadah: Umroh Reguler (9–12 hari), Umroh Plus Mancanegara (Turki, Dubai, Mesir, Thaif), Haji Khusus Kuota Resmi & Haji Mujamalah (Furoda), Program Badal Haji & Badal Umroh Bersertifikat, serta Wisata Halal / Muslim Tour. Masing-masing mencakup deskripsi, fasilitas unggulan, dan rincian cakupan pelayanan.
- **FR-4.2** — Integrasi alur pendaftaran ibadah terpadu dan banner konsultasi gratis menuju `/kontak`.

### 3.5 Paket Ibadah & Perjalanan (Katalog Paket)
- **FR-5.1** — Grid katalog paket perjalanan ibadah (menampilkan foto hotel/Makkah-Madinah, nama paket, durasi perjalanan, musim keberangkatan, maskapai penerbangan, kategori paket), responsif 3-kolom di desktop.
- **FR-5.2** — Filter kategori paket (Semua, Umroh Reguler, Umroh Plus, Haji Khusus, Wisata Halal) dengan pembaruan tampilan instan tanpa reload halaman dan penghitung jumlah paket per kategori.
- **FR-5.3** — Halaman detail paket `/proyek/:slug`: galeri foto akomodasi hotel Makkah & Madinah, itinerary perjalanan hari demi hari, rincian fasilitas (termasuk tiket pesawat, visa, visa tasreh, hotel, makan 3x full board, muthawif, perlengkapan), status ketersediaan seat, tombol pendaftaran langsung ke kontak, serta rekomendasi paket ibadah terkait.
- **FR-5.4** — Penanganan kondisi jika slug paket tidak ditemukan dengan menampilkan tampilan informasi 404 paket dan tombol navigasi kembali ke katalog paket.

### 3.6 Kontak & Form Pendaftaran Calon Jamaah
- **FR-6.1** — Form konsultasi & pendaftaran calon jamaah dengan field terstruktur dan validasi skema Zod.
- **FR-6.2** — Validasi dijalankan saat event *blur* dan saat *submit*; pesan error informatif berbahasa Indonesia tampil di bawah field yang bersangkutan.
- **FR-6.3** — Saat pengiriman formulir: tombol beralih ke status loading dan nonaktif; pengiriman disimulasikan (`setTimeout` 1–2 detik) untuk menampilkan simulasi toast sukses serta reset form. Disediakan toggle simulasi skenario gagal untuk memverifikasi penanganan error antarmuka.
- **FR-6.4** — Saat submit gagal validasi, fokus otomatis berpindah ke field input pertama yang mengalami error.
- **FR-6.5** — Aksesibilitas form penuh: relasi `id` dan `for` pada label, serta pemanfaatan `aria-invalid` dan `aria-describedby` pada elemen yang tidak valid.
- **FR-6.6** — Blok informasi kontak kantor pusat & perwakilan (alamat, telepon kantor, WhatsApp Konsultan, jam layanan pendaftaran) serta embed peta lokasi kantor (Google Maps).

**Field form pendaftaran & konsultasi (FR-6.1):**

| Field | Tipe | Aturan | Pesan error |
|---|---|---|---|
| Nama lengkap | text | Wajib, 3–60 karakter | "Nama wajib diisi (minimal 3 karakter)" |
| Email | email | Wajib, format valid | "Format email tidak valid" |
| Telepon/WhatsApp | tel | Wajib, format `08xx` atau `+62xx`, 10–14 digit | "Nomor telepon tidak valid" |
| Pilihan program/paket | select | Wajib, memilih salah satu paket layanan | "Pilih jenis layanan" |
| Perkiraan rencana keberangkatan | select | Opsional | — |
| Pesan / Pertanyaan | textarea | Wajib, 20–1000 karakter, dilengkapi counter | "Pesan minimal 20 karakter" |
| Persetujuan ketentuan | checkbox | Wajib dicentang | "Anda harus menyetujui sebelum mengirim" |
| Honeypot | hidden | Harus kosong (pencegahan spam) | — |

### 3.7 Dynamic Client Mockup Branding & Whitelabel Subpath System
- **FR-7.1 — Subpath & Query Routing (`/:agencySlug` & `?biro=...`)**: Website mendukung pengaksesan profil biro dinamis melalui URL subpath (contoh: `exhaji.vercel.app/surya-biro`, `exhaji.vercel.app/surya-biro/proyek`, `exhaji.vercel.app/surya-biro/kontak`) atau melalui query parameter `?biro=surya-biro` / `?mockup=surya-biro` / `?client=surya-biro`.
- **FR-7.2 — Dynamic Palette Injection (CSS Variables)**: Sistem menghitung varian warna 50–950 dari kode hex warna brand utama (`brand`) dan aksen (`accent`) biro, lalu menginjeksinya sebagai CSS Variables ke root DOM (`:root`) sehingga warna tombol, badge, navbar, ikon, dan aksen tema berubah instan tanpa perlu re-compile CSS.
- **FR-7.3 — Dynamic Identity & Logo Switching**: Nama biro (`name`, `shortName`, `subName`, `tagline`), nomor kontak WhatsApp konsultasi, nomor telepon, alamat kantor, email, dan logo (SVG/PNG) otomatis berganti sesuai profil biro yang aktif. Jika file logo khusus belum tersedia, antarmuka otomatis merender emblem monogram profesional berbasis inisial nama biro.
- **FR-7.4 — Auto-Synthesis untuk Slug Tak Terdaftar**: Jika calon klien atau user mengakses URL slug yang belum terdaftar di registry data (misal `/al-ikhlas-travel`), sistem secara cerdas menyintesis nama Title Case ("Al Ikhlas Travel"), inisial nama, tagline default, serta palet warna fallback yang serasi tanpa menghasilkan error 404.
- **FR-7.5 — Context-Aware Navigation**: Semua tautan menu (Navbar, Footer, Card, CTA Button) secara otomatis mendeteksi dan mempertahankan prefix subpath aktif saat berpindah halaman (misal dari `/surya-biro`, klik tombol paket akan mengarah ke `/surya-biro/proyek`).

---

## 4. Data Model (Rencana Struktur Data)

> ⚠️ Seluruh data dummy disimpan di `src/data/` tanpa database backend. Struktur aktual wajib selalu merujuk pada `SCHEMA.md`.

```
src/data/
├── agencies.json      (registry profil multi-client biro: slug, nama, warna brand/accent, logo, kontak override)
├── company.json       (profil biro default, legalitas PPIU/PIHK, alamat, telepon, visi-misi, sejarah, akreditasi)
├── home.json          (heroSlides paket umroh/haji, scoreCards 5 pasti umroh, stats jamaah, workProcess alur)
├── services.json      (daftar kategori layanan ibadah: Umroh, Haji, Badal, Halal Tour)
├── projects.json      (daftar katalog paket keberangkatan umroh & haji khusus)
├── team.json          (dewan pembimbing asatidz, ulama pembina, muthawif, dan manajemen)
└── testimonials.json  (testimoni & pengalaman ibadah para jamaah)
```

Volume data dummy minimal:
- 8 paket ibadah (kombinasi Umroh Reguler, Umroh Plus, Haji Khusus, Wisata Halal)
- 5 kategori layanan ibadah
- 4 pembimbing ibadah / pimpinan biro
- 4 testimoni jamaah
- 3 hero slide keberangkatan
- 4 langkah alur pendaftaran & bimbingan

---

## 5. Security & Constraints
- Tanpa backend server atau pengumpulan database pribadi; form pendaftaran bersifat simulasi frontend yang aman.
- Seluruh input divalidasi dengan Zod skema ketat di sisi klien; sanitasi rendering ditangani secara aman oleh Vue templating engine.
- Penomoran izin perizinan PPIU/PIHK, nomor telepon, dan identitas menggunakan format realistis untuk keperluan portfolio kredibel.
- Seluruh aset gambar (Masjidil Haram, Masjid Nabawi, hotel, pesawat) menggunakan lisensi bebas royalti (Unsplash/Pexels) dengan format WebP teroptimasi dan atribut `loading="lazy"`.
- Standar skor audit Lighthouse (Performance, Accessibility, Best Practices, SEO) ditargetkan minimal 90+.

---

## 6. Milestone
| Fase | Fitur | Status |
|---|---|---|
| 0 | Setup arsitektur: Vue 3, Tailwind CSS, Vue Router, Pinia, Lucide, Vitest, skema JSON | ✅ Selesai |
| 1 | Layout global (TopBar legalitas, Navbar drawer, Footer biro, UI atoms) | ✅ Selesai |
| 2 | Beranda & Homepage Sections (Hero slider ibadah, 5 pasti umroh, statistik jamaah) | ✅ Selesai |
| 3 | Halaman Tentang Kami (Visi, sejarah, pembimbing asatidz, legalitas Kemenag) & Layanan Ibadah | ✅ Selesai |
| 4 | Katalog Paket Ibadah (Grid paket, filter kategori, detail paket & itinerary) | ✅ Selesai |
| 5 | Halaman Kontak & Form Pendaftaran Calon Jamaah (Validasi Zod & simulasi) | ✅ Selesai |
| 6 | Polishing: SEO Haji Umroh, responsivitas mobile-first, aksesibilitas ARIA | ✅ Selesai |
| 7 | Deployment & Dokumentasi Rilis | ✅ Selesai |
| 8 | Transformasi Scope & Rebranding: Migrasi Konteks Biro Haji & Umroh | 🔄 Dalam Proses (Docs Sync) |

---

## 7. Non-Goals
Hal-hal yang berada di luar lingkup fungsional proyek ini:
- Payment gateway online (pembayaran DP/pelunasan langsung di web).
- Sistem autentikasi / portal login jamaah (dashboard monitoring visa/status jamaah).
- CMS / Admin panel dinamis (semua pembaruan data dilakukan melalui file JSON lokal).
- Layanan pengiriman email sungguhan (hanya simulasi frontend).
- Booking mesin tiket maskapai penerbangan secara live API.

---

## 8. Development Guidelines
- Rujuk selalu `context/rules.md` untuk pedoman standar koding dan alur kerja.
- Perubahan komponen harus mempertahankan kompatibilitas dengan test unit (`npm run test:unit`).
- Komponen Vue wajib bersifat modular, dapat digunakan kembali, dan memisahkan logika dari presentasi visual.

---

## 9. Amandemen
- **2026-10-16 (Dynamic Client Mockup Branding & Whitelabel Subpath):** Menambahkan spesifikasi sistem branding multi-client dinamis berbasis URL subpath (`/:agencySlug` contoh `/surya-biro`) mengacu pada arsitektur `gerayana-rent`. Meliputi registry `src/data/agencies.json`, injeksi CSS variables dinamis (`theme.js`), composable `useAgency.js`, modul resolusi data `agencies.js`, dan rute subpath Vue Router dengan fallback sintesis otomatis.
- **2026-10-16 (Fase 8 - Rebranding Scope):** Transformasi keseluruhan spesifikasi proyek dari profil perusahaan kontraktor umum menjadi **Demo Biro Umroh dan Haji**. Menyelaraskan seluruh requirement fungsional (FR-1 s/d FR-6), skema data dummy JSON (`SCHEMA.md`), dan panduan perizinan resmi Kemenag RI (5 Pasti Umroh) dengan tetap menjaga kompatibilitas struktur komponen dan suite pengujian yang ada.
- **2026-10-09 (Fase 0):** Penyesuaian Tech Stack ke **Vue 3 + Tailwind CSS + Vue Router + Pinia + Lucide Vue Next + Zod + Vitest**.

---

## 10. Referensi Tampilan & Desain
- **Pola Layout:** Mengadopsi arsitektur landing page modern: Header sticky terpadu dengan top bar legalitas resmi, hero slider visual megah Tanah Suci, kartu pilar jaminan ibadah, showcase paket bernomor, alur pendaftaran step-by-step, review jamaah terpercaya, dan form konsultasi responsif.
- **Palet Warna & Nuansa:**
  - Warna primer: Hijau zamrud Islami / *Emerald Deep Green* (`#064e3b` / `#047857`) mencerminkan kedamaian, amanah, dan nuansa religius.
  - Warna aksen: Emas elegan / *Warm Gold* (`#d97706` / `#b45309` / `#f59e0b`) melambangkan kemuliaan Baitullah dan pelayanan VIP.
  - Warna netral: Slate bersih dan putih lembut untuk kontras tinggi, keterbacaan optimal, serta kenyamanan mata calon jamaah.
