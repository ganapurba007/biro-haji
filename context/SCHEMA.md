# SCHEMA.md

> Sumber kebenaran struktur data SAAT INI. Proyek ini TIDAK memakai database: "tabel" di bawah adalah struktur file JSON di `src/data/`. Berbeda dari §4 PRD.md yang cuma rencana awal — file ini WAJIB selalu sinkron dengan file JSON aktual di kode. Update file ini di sesi yang sama setiap kali struktur data berubah.

**Terakhir disinkronkan:** 2026-10-09 — Fase 0 (rencana awal, belum ada kode)

---

## company.json (objek tunggal)
| Field | Tipe | Constraint | Keterangan |
|---|---|---|---|
| name | string | wajib | "PT Adhirajasa Karya Mandiri" |
| tagline | string | wajib | |
| about | string | wajib | Ringkasan profil |
| vision | string | wajib | |
| mission | string[] | wajib | |
| contact | object | wajib | `{ address, phone, tollFree, email }` |
| workingHours | string | wajib | |
| social | object[] | opsional | `{ name, url, icon }` |
| history | object[] | wajib | `{ year, title, description }` |
| certifications | object[] | wajib | `{ name, issuer, image }` (semua dummy) |

## home.json (objek tunggal)
| Field | Tipe | Constraint | Keterangan |
|---|---|---|---|
| heroSlides | object[] | wajib, 3 item | `{ id, headline, subheadline, image, ctaLabel, ctaLink }` |
| scoreCards | object[] | wajib, 3 item | `{ number, title, description, score }`; `score` angka 0–100 |
| stats | object[] | wajib | `{ label, value, suffix }` untuk animasi hitung |
| workProcess | object[] | wajib, 4 item | `{ number, title, description, image }` |

## services.json (array)
| Field | Tipe | Constraint | Keterangan |
|---|---|---|---|
| id | number | PK | |
| slug | string | unik | |
| title | string | wajib | |
| summary | string | wajib | Dipakai di kartu beranda |
| description | string | wajib | |
| scope | string[] | wajib | Poin cakupan pekerjaan |
| icon | string | wajib | Nama ikon atau path gambar |
| image | string | wajib | |

## projects.json (array)
| Field | Tipe | Constraint | Keterangan |
|---|---|---|---|
| id | number | PK | |
| slug | string | unik | Dipakai di rute `/proyek/:slug` |
| title | string | wajib | |
| category | string | wajib | Salah satu: Gedung, Renovasi, Infrastruktur, Interior |
| location | string | wajib | |
| year | number | wajib | |
| client | string | wajib | Nama fiktif |
| duration | string | wajib | |
| status | string | wajib | Mis. "Selesai", "Berjalan" |
| summary | string | wajib | |
| description | string | wajib | |
| images | string[] | wajib, min 1 | Gambar pertama jadi thumbnail |
| featured | boolean | wajib | `true` → tampil di Beranda (FR-2.7) |

## team.json (array)
| Field | Tipe | Constraint | Keterangan |
|---|---|---|---|
| id | number | PK | |
| name | string | wajib | |
| position | string | wajib | |
| photo | string | wajib | |

## testimonials.json (array)
| Field | Tipe | Constraint | Keterangan |
|---|---|---|---|
| id | number | PK | |
| name | string | wajib | |
| role | string | wajib | Jabatan klien |
| quote | string | wajib | |
| avatar | string | wajib | |

---

## Relasi (ringkas)
```
projects.category   → daftar kategori filter (FR-5.2), nilai harus konsisten dengan filter UI
services.title      → opsi select "Jenis layanan" di form kontak (FR-6.1)
projects.featured   → memilih proyek yang tampil di Beranda (FR-2.7)
```
Tidak ada foreign key; hubungan antar file dijaga lewat nilai string di atas.

## Catatan Migrasi Penting
- Belum ada kode, jadi belum ada catatan. Tambahkan di sini keputusan struktur yang tidak obvious (mis. kenapa suatu field opsional) supaya AI tidak "membetulkannya".
