# PRD.md — Company Profile PT Adhirajasa Karya Mandiri (Dummy Portfolio)

> Dokumen ini adalah RENCANA. Untuk kebenaran struktur data saat ini, selalu rujuk `SCHEMA.md`, bukan §4 di bawah. Kalau ada perbedaan antara section manapun di sini dengan kode aktual, catat di §9 Amandemen — jangan biarkan diam-diam berbeda.

## Daftar Isi
- §1 Overview
- §2 Tech Stack
- §3 Functional Requirements
- §4 Data Model (rencana awal — lihat SCHEMA.md untuk aktual)
- §5 Security & Constraints
- §6 Milestone
- §7 Non-Goals (di luar scope)
- §8 Development Guidelines
- §9 Amandemen (log perubahan scope dari rencana awal)
- §10 Referensi Tampilan

---

## 1. Overview
**Apa yang dibangun:** Website company profile multi-halaman untuk perusahaan kontraktor fiktif, PT Adhirajasa Karya Mandiri, memakai Vue 3 dan Tailwind CSS. Semua konten (teks, proyek, tim, testimoni) adalah data dummy dari file JSON lokal; tidak ada backend.
**Untuk siapa:** (1) calon klien perorangan/instansi/korporat yang menilai kredibilitas kontraktor; (2) reviewer portfolio (HRD/engineer) yang menilai kualitas UI dan kode.
**Masalah yang diselesaikan:** Menjadi bukti kemampuan membangun website profesional yang responsif, aksesibel, dan terstruktur rapi (komponen reusable, routing, form dengan validasi) untuk portfolio.

## 2. Tech Stack
| Layer | Pilihan | Alasan singkat |
|---|---|---|
| Backend | — (tidak ada) | Scope frontend saja, data dari JSON lokal |
| Frontend | Vue 3 (Vite), Tailwind CSS, Vue Router, Pinia | Sesuai target portfolio; reactive & routing multi-halaman |
| Form & validasi | Vue Composition API + Zod | Validasi deklaratif & type-safe, mudah dites |
| Database | — (tidak ada) | Data dummy di `src/data/*.json` |
| Auth | — (tidak ada) | Tidak ada area login |
| Hosting/Deploy | Vercel atau Netlify | Gratis, deploy dari GitHub |

Pendukung: Lucide Vue Next (ikon), Vitest + @vue/test-utils.

## 3. Functional Requirements

> Format: FR-[nomor modul].[nomor urut] — [judul]. Jangan ubah nomor FR yang sudah ada meskipun requirement-nya diubah — tambahkan FR baru dengan nomor lanjutan dan catat di §9.

### 3.1 Layout Global
- **FR-1.1** — Top bar kecil di atas navbar berisi telepon, email, dan jam kerja (dummy); disembunyikan di layar mobile.
- **FR-1.2** — Navbar sticky: logo, menu (Beranda, Tentang, Layanan, Proyek, Kontak), dan tombol CTA "Konsultasi Gratis" menuju `/kontak`. Di mobile berubah menjadi hamburger menu yang bisa ditutup via tombol, klik link, dan tombol Esc.
- **FR-1.3** — Menu aktif diberi penanda visual sesuai rute.
- **FR-1.4** — Footer tiga kolom: ringkasan perusahaan + ikon media sosial (dummy), kontak (alamat, email, telepon), tautan cepat; baris hak cipta di bawah.
- **FR-1.5** — Scroll kembali ke atas saat pindah halaman, plus tombol *scroll to top* yang muncul setelah scroll 400px.
- **FR-1.6** — Setiap halaman punya `<title>` dan meta description sendiri.
- **FR-1.7** — Halaman 404 dengan tautan kembali ke Beranda.

### 3.2 Beranda
- **FR-2.1** — Hero slider 3 slide (gambar latar, headline, subheadline, tombol "Lihat Proyek"). Auto-play 6 detik, dapat dikontrol manual (panah dan indikator), dan berhenti saat di-hover/fokus.
- **FR-2.2** — Tiga kartu skor yang menumpuk di bawah hero (mis. Kualitas Konstruksi, Keselamatan Kerja, Ketepatan Waktu) dengan nomor urut, deskripsi singkat, dan persentase.
- **FR-2.3** — Section "Tentang Kami": judul, paragraf singkat, dua tombol ("Profil Perusahaan" → `/tentang`, "Cara Kami Bekerja" → anchor alur kerja), dan gambar.
- **FR-2.4** — Section layanan: 4 kartu bernomor (gambar, ikon, judul, deskripsi singkat, tautan "Selengkapnya" → `/layanan`).
- **FR-2.5** — Section alur kerja 4 langkah bernomor (Konsultasi, Perencanaan, Pelaksanaan, Serah Terima) dengan gambar per langkah.
- **FR-2.6** — Strip CTA: angka statistik (mis. proyek selesai) yang beranimasi hitung saat terlihat di layar, dan nomor telepon bebas pulsa dummy.
- **FR-2.7** — Section proyek unggulan (3 proyek dari data `featured: true`) menaut ke halaman detail.
- **FR-2.8** — Section testimoni klien (slider atau grid; foto, nama, jabatan, kutipan).
- **FR-2.9** — Banner CTA penutup menuju `/kontak`.

### 3.3 Tentang Kami
- **FR-3.1** — Profil perusahaan, visi, dan misi.
- **FR-3.2** — Timeline sejarah perusahaan (data `history`).
- **FR-3.3** — Daftar tim inti (foto, nama, jabatan).
- **FR-3.4** — Legalitas dan sertifikasi (SBU, ISO, K3 — seluruhnya dummy).

### 3.4 Layanan
- **FR-4.1** — Daftar layanan: Pembangunan Gedung, Renovasi, Infrastruktur dan Jalan, Interior dan Finishing, Konsultan dan Pengawasan; tiap layanan berisi ikon, deskripsi, dan poin cakupan pekerjaan.
- **FR-4.2** — Section alur kerja (data yang sama dengan FR-2.5) dan banner CTA ke `/kontak`.

### 3.5 Proyek
- **FR-5.1** — Grid kartu proyek (gambar, nama, lokasi, tahun, kategori), 3 kolom di desktop.
- **FR-5.2** — Filter kategori (Semua, Gedung, Renovasi, Infrastruktur, Interior) tanpa reload halaman.
- **FR-5.3** — Halaman detail `/proyek/:slug`: galeri gambar, deskripsi, data proyek (klien, lokasi, durasi, status), dan proyek terkait.
- **FR-5.4** — Slug tidak ditemukan menampilkan halaman 404.

### 3.6 Kontak
- **FR-6.1** — Form kontak dengan field dan aturan validasi sesuai tabel di bawah.
- **FR-6.2** — Validasi berjalan saat blur dan saat submit; pesan error tampil di bawah field terkait.
- **FR-6.3** — Saat submit: tombol loading dan nonaktif; pengiriman disimulasikan (`setTimeout` 1–2 detik). Sukses → toast + form reset. Tersedia skenario gagal (simulasi) untuk menunjukkan penanganan error.
- **FR-6.4** — Saat submit gagal validasi, fokus pindah ke field error pertama.
- **FR-6.5** — Aksesibilitas form: label terhubung ke input, `aria-invalid` dan `aria-describedby` untuk error.
- **FR-6.6** — Blok info kontak (alamat, telepon, email, jam kerja) dan peta (embed iframe atau gambar statis, lokasi dummy).

**Field form kontak (FR-6.1):**

| Field | Tipe | Aturan | Pesan error |
|---|---|---|---|
| Nama lengkap | text | Wajib, 3–60 karakter | "Nama wajib diisi (minimal 3 karakter)" |
| Email | email | Wajib, format valid | "Format email tidak valid" |
| Telepon/WA | tel | Wajib, `08xx` atau `+62xx`, 10–14 digit | "Nomor telepon tidak valid" |
| Jenis layanan | select | Wajib, salah satu dari data layanan | "Pilih jenis layanan" |
| Perkiraan anggaran | select | Opsional | — |
| Pesan | textarea | Wajib, 20–1000 karakter, ada penghitung karakter | "Pesan minimal 20 karakter" |
| Persetujuan | checkbox | Wajib dicentang | "Anda harus menyetujui sebelum mengirim" |
| Honeypot | hidden | Harus kosong (anti-spam sederhana) | — |

## 4. Data Model (Rencana Awal)

> ⚠️ Section ini rencana awal saat proyek dimulai. Untuk struktur AKTUAL saat ini, selalu cek `SCHEMA.md`. Proyek ini tidak memakai database; "data model" berarti struktur file JSON di `src/data/`.

```
src/data/
├── company.json       (identitas, kontak, jam kerja, sosial, visi-misi, history, sertifikasi)
├── home.json          (heroSlides, scoreCards, stats, workProcess)
├── services.json      (daftar layanan)
├── projects.json      (daftar proyek)
├── team.json          (tim inti)
└── testimonials.json  (testimoni klien)
```

Volume data dummy minimal: 8 proyek, 5 layanan, 4 anggota tim, 4 testimoni, 3 hero slide, 4 langkah alur kerja.

## 5. Security & Constraints
- Tidak ada auth, backend, atau penyimpanan data pengguna; form kontak hanya simulasi dan tidak mengirim data ke mana pun.
- Semua input form divalidasi di sisi klien dengan skema Zod; output dirender oleh React (tanpa `dangerouslySetInnerHTML`).
- Semua nama perusahaan, klien, nomor telepon, dan sertifikat bersifat fiktif. Gambar wajib bebas lisensi (Unsplash/Pexels) atau placeholder; atribusi dicatat di README.
- Batas performa gambar: format WebP, ukuran tiap gambar idealnya < 200 KB, `loading="lazy"` kecuali gambar hero pertama.
- Target Lighthouse (Performance, Accessibility, Best Practices, SEO) minimal 90.

## 6. Milestone
| Fase | Fitur | Status |
|---|---|---|
| 0 | Setup: Vite, Tailwind (token tema), Vue Router, Pinia, Lucide, Vitest, struktur folder & data JSON | ✅ |
| 1 | Layout global (FR-1.x) + komponen UI dasar (Button, Card, SectionTitle, Badge) | ✅ |
| 2 | Data dummy JSON + Beranda (FR-2.x) | ✅ |
| 3 | Tentang dan Layanan (FR-3.x, FR-4.x) | ✅ |
| 4 | Proyek: grid, filter, detail (FR-5.x) | ✅ |
| 5 | Kontak: form, validasi, simulasi submit (FR-6.x) | ✅ |
| 6 | Polishing: responsif, aksesibilitas, SEO, optimasi gambar | ✅ |
| 7 | Rilis: deploy, README, screenshot, tautan demo | ✅ |

## 7. Non-Goals
Hal-hal yang SENGAJA tidak dibangun di scope ini, supaya AI tidak menambahkannya secara tidak diminta:
- Backend, database, panel admin/CMS, dan autentikasi.
- Pengiriman email sungguhan (EmailJS/Formspree hanya pengembangan lanjutan, bukan v1.0).
- Blog/artikel, dark mode, dan multi bahasa.
- Halaman toko/cart/checkout, pricing, FAQ, dan halaman klien terpisah.
- Form newsletter di footer.
- Animasi berat atau library animasi tambahan di luar transisi Tailwind, kecuali diminta.

## 8. Development Guidelines

### 8.1 Alur Kerja Per Fase
1. Baca FR terkait di §3
2. Tulis rencana singkat (langkah + cara verifikasi)
3. Implementasi
4. Jalankan test, pastikan lolos
5. Update dokumentasi (lihat 8.4)
6. Commit

### 8.2 Standar Kode
Rujuk `rules.md`. Catatan spesifik proyek:
- Komponen Vue SFC (Single File Component) dengan nama PascalCase; satu komponen per file di `src/components/` (`layout/`, `ui/`, `sections/`, `forms/`).
- Tampilan halaman di `src/views/` atau `src/pages/`; composable di `src/composables/`; skema validasi Zod dan helper di `src/lib/`.
- Konten selalu dibaca dari `src/data/*.json`, tidak ditulis keras (hardcode) di komponen.
- Warna, font, dan spasi utama didefinisikan sebagai token di `tailwind.config`, bukan nilai acak di tiap komponen.
- Rute halaman lazy-loaded via `() => import(...)` di Vue Router.

### 8.3 Testing
- Minimum test per fitur baru: skema Zod form kontak (valid dan tiap aturan invalid), perilaku form kontak (error tampil, submit sukses, status loading), dan logika filter proyek.
- Pemeriksaan manual per fase: tampilan di 360, 768, 1024, 1280 px; Lighthouse pada fase 6.
- Cara menjalankan test: `npm run test:unit`

### 8.4 Definition of Done Per Fase
Fase dianggap selesai jika:
- [ ] Fitur berjalan sesuai FR terkait
- [ ] Test lolos (sebutkan jumlah di CHANGELOG)
- [ ] Tidak ada regresi di fitur lama
- [ ] Docs updated: [Ya/Tidak — sebutkan file mana yang diupdate: PRD §9 / SCHEMA.md / keduanya / tidak ada perubahan scope]
- [ ] Entri baru ditambahkan di CHANGELOG.md

## 9. Amandemen

> Log semua perubahan/penambahan yang menyimpang dari rencana awal di §3/§4. Setiap entri baru ditambah di ATAS (paling baru di paling atas).

- **2026-10-09 (Fase 0):** Penyesuaian Tech Stack dari React.js ke **Vue 3 + Tailwind CSS + Vue Router + Pinia + Lucide Vue Next** sesuai dengan base template aktif proyek. Validasi form menggunakan Vue Composition API + Zod, testing menggunakan Vitest + @vue/test-utils.

## 10. Referensi Tampilan

Acuan visual: https://kargonwp.websitelayout.net/ (tema WordPress logistik). Yang DIADOPSI adalah pola layout dan urutan section; konten, nama, dan aset visual dibuat sendiri dan sesuai tema konstruksi. Jangan menyalin gambar, logo, atau teks dari situs referensi.

| Pola di referensi | Dipakai sebagai |
|---|---|
| Header dengan menu dan tombol "Free Quote" | FR-1.2 (CTA "Konsultasi Gratis") |
| Hero slider 3 slide dengan tombol "Get Started" | FR-2.1 |
| 3 kartu skor bernomor yang menumpuk di hero | FR-2.2 |
| "More about us" dengan dua tombol dan gambar | FR-2.3 |
| 4 kartu layanan bernomor (gambar + ikon + Read More) | FR-2.4 |
| "Work process" 4 langkah bernomor | FR-2.5 |
| Strip angka/telepon "Toll Free call" | FR-2.6 |
| Testimoni (avatar, kutipan, nama, jabatan) | FR-2.8 |
| Footer: About, Contact Us, tautan cepat | FR-1.4 |

Tidak diadopsi dari referensi: blog "Updated articles", newsletter, shop/cart, dan halaman pricing/FAQ (lihat §7).

Palet dan tipografi final diputuskan di Fase 0 setelah mengamati referensi secara langsung; usulan awal: slate gelap sebagai warna utama, oranye/kuning *safety* sebagai aksen, satu font heading tegas dan satu font body. Semua dijadikan token di `tailwind.config`.
