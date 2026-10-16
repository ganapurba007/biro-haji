import { describe, it, expect } from 'vitest'
import { contactSchema } from '@/lib/contactSchema'

describe('Contact Form Validation Schema (Zod) (FR-6.1)', () => {
  const validFormData = {
    fullName: 'Ir. Hendra Gunawan',
    email: 'hendra@perusahaan.co.id',
    phone: '081234567890',
    serviceType: 'Paket Umroh Reguler Bintang 5',
    budget: 'Rp 2 Miliar - Rp 10 Miliar',
    message: 'Kami berencana membangun gedung kantor 5 lantai di kawasan Jakarta Selatan.',
    agreement: true,
    honeypot: ''
  }

  it('validates successfully with correct data', () => {
    const result = contactSchema.safeParse(validFormData)
    expect(result.success).toBe(true)
  })

  it('fails when fullName is less than 3 characters', () => {
    const result = contactSchema.safeParse({
      ...validFormData,
      fullName: 'Al'
    })
    expect(result.success).toBe(false)
    expect(result.error.issues[0].message).toBe('Nama wajib diisi (minimal 3 karakter)')
  })

  it('fails when email format is invalid', () => {
    const result = contactSchema.safeParse({
      ...validFormData,
      email: 'bukan-email'
    })
    expect(result.success).toBe(false)
    expect(result.error.issues[0].message).toBe('Format email tidak valid')
  })

  it('fails when phone number does not match 08xx or +62xx format', () => {
    const result = contactSchema.safeParse({
      ...validFormData,
      phone: '12345'
    })
    expect(result.success).toBe(false)
    expect(result.error.issues[0].message).toBe('Nomor telepon tidak valid')
  })

  it('fails when serviceType is not one of existing services', () => {
    const result = contactSchema.safeParse({
      ...validFormData,
      serviceType: 'Layanan Fiktif'
    })
    expect(result.success).toBe(false)
    expect(result.error.issues[0].message).toBe('Pilih jenis layanan')
  })

  it('fails when message is shorter than 20 characters', () => {
    const result = contactSchema.safeParse({
      ...validFormData,
      message: 'Halo bos'
    })
    expect(result.success).toBe(false)
    expect(result.error.issues[0].message).toBe('Pesan minimal 20 karakter')
  })

  it('fails when agreement checkbox is false', () => {
    const result = contactSchema.safeParse({
      ...validFormData,
      agreement: false
    })
    expect(result.success).toBe(false)
    expect(result.error.issues[0].message).toBe('Anda harus menyetujui sebelum mengirim')
  })

  it('fails when honeypot field is filled (bot spam)', () => {
    const result = contactSchema.safeParse({
      ...validFormData,
      honeypot: 'bot-content'
    })
    expect(result.success).toBe(false)
  })
})
