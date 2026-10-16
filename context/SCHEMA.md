# SCHEMA.md

> Sumber kebenaran struktur data SAAT INI untuk portal **Demo Biro Umroh dan Haji**. Proyek ini TIDAK memakai database: seluruh entitas di bawah merujuk pada struktur file JSON di `src/data/`. Dokumen ini WAJIB selalu sinkron dengan file data aktual di kode.

**Terakhir disinkronkan:** 2026-10-16 — Transformasi Scope ke Biro Haji & Umroh

---

## agencies.json (objek tunggal: registry profil multi-client mockup)
Menyimpan konfigurasi profil biro perjalanan haji & umroh multi-tenant untuk kebutuhan presentasi/mockup klien via URL path (contoh: `/:agencySlug` seperti `/surya-biro`).

| Field | Tipe | Constraint | Keterangan |
|---|---|---|---|
| default | string | wajib | Slug profil default (mis. `"default-biro"`) |
| agencies | object | wajib | Map `slug` ke objek profil biro (`default-biro`, `surya-biro`, dll.) |
| agencies[slug].name | string | wajib | Nama lengkap biro (mis. `"Surya Biro Umroh & Haji"`) |
| agencies[slug].shortName | string | opsional | Akronim / nama singkat navbar (mis. `"SURYA"`) |
| agencies[slug].subName | string | opsional | Subjudul navbar (mis. `"Haramain Travel"`) |
| agencies[slug].tagline | string | opsional | Slogan resmi biro |
| agencies[slug].about | string | opsional | Ringkasan profil biro |
| agencies[slug].logo | string | opsional | Path SVG / gambar logo di `/public/images/logos/` |
| agencies[slug].colors | object | wajib | `{ brand: "#hex", accent: "#hex" }` palet warna tema |
| agencies[slug].contact | object | opsional | Override nomor telepon, WhatsApp, email, dan alamat kantor |

## company.json (objek tunggal)
Menyimpan identitas resmi biro perjalanan, legalitas Kementerian Agama RI, kontak operasional, jam pelayanan, visi-misi, sejarah, dan lisensi resmi.

| Field | Tipe | Constraint | Keterangan |
|---|---|---|---|
| name | string | wajib | Nama resmi biro: `"Demo Biro Umroh dan Haji"` |
| tagline | string | wajib | Slogan khidmah jamaah |
| about | string | wajib | Ringkasan profil biro perjalanan haji & umroh |
| vision | string | wajib | Visi pelayanan ibadah ke Tanah Suci |
| mission | string[] | wajib | Butir-butir misi pelayanan dan bimbingan ibadah |
| contact | object | wajib | `{ address, phone, tollFree, email, whatsapp }` |
| workingHours | string | wajib | Jam operasional pendaftaran dan konsultasi |
| social | object[] | opsional | `{ name, url, icon }` link kanal sosial resmi |
| history | object[] | wajib | `{ year, title, description }` jejak tonggak sejarah biro |
| certifications | object[] | wajib | `{ name, issuer, image }` (SK Izin PPIU, SK Izin PIHK, Akreditasi A Kemenag, Lisensi IATA, Sertifikat Asosiasi) |

## home.json (objek tunggal)
Menyimpan konfigurasi konten dinamis untuk landing page beranda.

| Field | Tipe | Constraint | Keterangan |
|---|---|---|---|
| heroSlides | object[] | wajib, 3 item | `{ id, headline, subheadline, image, ctaLabel, ctaLink }` slide visual paket ibadah Tanah Suci |
| scoreCards | object[] | wajib, 3 item | `{ number, title, description, score }`; pilar keunggulan (Legalitas 5 Pasti Umroh, Muthawif Sesuai Sunnah, Hotel Pelataran Bintang 5), `score` angka 0–100 |
| stats | object[] | wajib | `{ label, value, suffix }` statistik jamaah diberangkatkan, tingkat kepuasan, & ketepatan jadwal |
| workProcess | object[] | wajib, 4 item | `{ number, title, description, image }` 4 langkah alur pendaftaran & bimbingan ibadah |

## services.json (array)
Menyimpan kategori layanan utama yang diselenggarakan oleh biro perjalanan.

| Field | Tipe | Constraint | Keterangan |
|---|---|---|---|
| id | number | PK | ID unik layanan |
| slug | string | unik | Slug url identitas layanan |
| title | string | wajib | Nama layanan (mis. Umroh Reguler, Umroh Plus, Haji Khusus & Furoda, Badal Haji & Umroh, Wisata Halal) |
| summary | string | wajib | Ringkasan singkat untuk kartu beranda |
| description | string | wajib | Penjelasan detail program ibadah |
| scope | string[] | wajib | Poin-poin cakupan fasilitas & pelayanan (tiket PP, visa, hotel, bimbingan, perlengkapan) |
| icon | string | wajib | Nama ikon representatif (Lucide icon identifier) |
| image | string | wajib | URL visual representasi layanan |

## projects.json (array — Katalog Paket Ibadah & Keberangkatan)
Menyimpan katalog paket perjalanan ibadah haji khusus, umroh reguler, umroh plus, dan wisata religi.

| Field | Tipe | Constraint | Keterangan |
|---|---|---|---|
| id | number | PK | ID unik paket perjalanan |
| slug | string | unik | Dipakai di rute detail `/proyek/:slug` |
| title | string | wajib | Nama paket keberangkatan (mis. "Paket Umroh Reguler Bintang 5 Awal Musim") |
| category | string | wajib | Kategori paket untuk filter: `Umroh Reguler`, `Umroh Plus`, `Haji Khusus`, `Wisata Halal` |
| location | string | wajib | Rute perjalanan ibadah (mis. `"Makkah - Madinah"`, `"Makkah - Madinah - Istanbul"`) |
| year | number | wajib | Musim keberangkatan / tahun kalender (mis. `1446` / `2025`) |
| client | string | wajib | Maskapai penerbangan & kelas (mis. `"Saudia Airlines (Direct Flight)"`, `"Garuda Indonesia"`) |
| duration | string | wajib | Durasi hari perjalanan (mis. `"9 Hari"`, `"12 Hari"`, `"25 Hari"`) |
| status | string | wajib | Status seat (mis. `"Pendaftaran Dibuka"`, `"Seat Terbatas"`, `"Pasti Berangkat"`) |
| summary | string | wajib | Deskripsi ringkas fasilitas & hotel |
| description | string | wajib | Rincian lengkap itinerary, hotel Makkah-Madinah, & pembimbing ibadah |
| images | string[] | wajib, min 1 | Array URL galeri foto (foto pertama sebagai thumbnail utama) |
| featured | boolean | wajib | `true` → tampil di section Paket Unggulan Beranda (FR-2.7) |

## team.json (array — Dewan Pembimbing Ibadah & Manajemen)
Menyimpan profil Asatidz/Ulama Pembina, Muthawif berlisensi, dan pimpinan manajemen biro.

| Field | Tipe | Constraint | Keterangan |
|---|---|---|---|
| id | number | PK | ID unik personil |
| name | string | wajib | Nama lengkap beserta gelar (mis. "Ustadz H. Ahmad Fauzi, Lc., M.A.") |
| position | string | wajib | Amanah/posisi (mis. "Pembina & Pembimbing Ibadah", "Muthawif Senior Makkah", "Direktur Utama") |
| photo | string | wajib | URL foto profil formal & bersahaja |

## testimonials.json (array — Testimoni Jamaah)
Menyimpan kesan dan pengalaman spiritual jamaah yang telah menunaikan ibadah bersama biro.

| Field | Tipe | Constraint | Keterangan |
|---|---|---|---|
| id | number | PK | ID unik testimoni |
| name | string | wajib | Nama jamaah atau perwakilan keluarga |
| role | string | wajib | Keterangan paket/keberangkatan (mis. "Jamaah Umroh Ramadhan 1445 H - Jakarta") |
| quote | string | wajib | Kutipan pengalaman bimbingan ibadah, fasilitas hotel, dan pelayanan muthawif |
| avatar | string | wajib | URL foto avatar jamaah |

---

## Relasi & Konsistensi Data
```
projects.category   → Daftar pilihan filter katalog paket ibadah (FR-5.2), nilainya harus sinkron dengan tombol filter UI.
services.title      → Opsi dropdown opsi select "Jenis Layanan / Paket Ibadah" pada form kontak pendaftaran (FR-6.1).
projects.featured   → Menentukan 3 paket perjalanan yang di-highlight pada Beranda (FR-2.7).
```

## Catatan Migrasi & Kompatibilitas
- Skema data mempertahankan properti `projects.json` untuk merepresentasikan **Katalog Paket Ibadah & Keberangkatan**. Hal ini dilakukan untuk menjaga keutuhan antarmuka Vue SFC (`ProjectCard.vue`, `ProjectFilter.vue`, `ProjectDetailView.vue`) dan rute `/proyek/:slug` sehingga transisi konten dapat berlangsung tanpa risiko regresi kode.
- Field `client` dialokasikan untuk mendeskripsikan maskapai penerbangan mitra (direct flight) dan klasifikasi layanan, menjaga konsistensi tampilan kartu paket yang telah ada.
- Field `location` dialokasikan untuk rincian rute kota suci dan ziarah (contoh: Makkah, Madinah, Jeddah, Thaif).
