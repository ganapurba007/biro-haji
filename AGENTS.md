# AGENTS.md

> File ini adalah pintu masuk pertama untuk AI agent. Baca file ini SEBELUM membaca file lain.

## Proyek
**Nama:** Company Profile PT Adhirajasa Karya Mandiri (dummy portfolio)
**Tujuan:** Website company profile perusahaan kontraktor fiktif untuk portfolio, menampilkan kemampuan membangun website multi-halaman yang responsif, aksesibel, dan terstruktur rapi.
**Stack:** Vue 3 (Vite), Tailwind CSS, Vue Router, Pinia, Zod, data dummy JSON lokal (tanpa backend/database), Vitest + @vue/test-utils

## Status Saat Ini
- **Fase aktif:** Selesai — Seluruh Fase 0–7 Selesai (Proyek Siap Rilis)
- **Test:** 46 passed / 46 total
- **Sedang dikerjakan:** Seluruh milestone & dokumentasi selesai terverifikasi
- **Update terakhir:** 2026-10-09

> Update 3 baris di atas setiap kali fase/task berubah. Jangan biarkan basi.

## Urutan Baca Dokumentasi (WAJIB diikuti urutannya)

1. **`context/rules.md`** — WAJIB dibaca setiap sesi, sebelum coding apapun. Berisi cara kerja (bukan apa yang dibangun).
2. **`context/PRD.md`** — baca HANYA section yang relevan dengan task saat ini. Gunakan daftar isi di bagian atas PRD untuk lompat langsung ke section terkait. **Jangan baca seluruh file** kecuali diminta eksplisit.
3. **`context/SCHEMA.md`** — rujukan struktur data AKTUAL (file JSON di `src/data/`, tanpa database). Gunakan ini untuk detail teknis data, bukan §4 PRD (PRD hanya rencana awal, bisa basi).
4. **`context/CHANGELOG.md`** — baca 3-5 entri PALING BARU saja untuk konteks kerja terbaru. Jangan baca lebih dari itu kecuali diminta eksplisit.
5. **`context/CHANGELOG-archive.md`** — JANGAN dibaca sama sekali kecuali diminta eksplisit oleh user. Ini riwayat lama, tidak relevan untuk kerja aktif.

## Aturan Wajib (Anti-Halu & Anti-Drift)

- **Jangan asumsikan kode yang tidak kamu baca sendiri.** Kalau butuh tahu apakah sebuah fungsi/komponen/file data sudah ada, baca kodenya langsung — jangan menebak dari nama file atau dari ingatan sesi sebelumnya.
- **Jangan percaya PRD 100% untuk "apa yang sudah ada."** PRD adalah rencana, bisa basi. Kode dan `SCHEMA.md` adalah kebenaran. Kalau PRD dan kode berbeda, kode yang benar — laporkan selisihnya ke user, jangan diam-diam mengikuti salah satu.
- **Kalau tidak yakin, berhenti dan tanya.** Jangan lanjut coding dengan asumsi yang belum dikonfirmasi.
- **Setiap task yang mengubah scope** (fitur baru, field data baru, halaman baru) **wajib update dokumentasi di sesi yang sama**: `context/PRD.md` (section Amandemen) dan/atau `context/SCHEMA.md`. Jangan ditunda.
- **Jangan reproduksi ulang seluruh file besar ke dalam context percakapan** kalau hanya butuh satu bagian kecil — baca section spesifik saja untuk menghemat token.
- **Konten selalu dari `src/data/*.json`**, jangan hardcode di komponen. Referensi tampilan (PRD §10) hanya untuk pola layout; jangan menyalin gambar, logo, atau teks dari situs referensi.

## Referensi Cepat
| Butuh tahu... | Baca file/section |
|---|---|
| Cara kerja & gaya kode | `context/rules.md` |
| Requirement fitur X | `context/PRD.md` § terkait |
| Struktur data (file JSON) | `context/SCHEMA.md` |
| Acuan tampilan / pola layout | `context/PRD.md` §10 |
| Apa yang baru dikerjakan | `context/CHANGELOG.md` (3-5 entri terakhir) |
| Riwayat lama proyek | `context/CHANGELOG-archive.md` (hanya jika diminta) |
