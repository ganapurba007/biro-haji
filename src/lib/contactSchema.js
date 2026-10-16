import { z } from 'zod'
import servicesData from '@/data/services.json'

const validServiceTitles = servicesData.map(s => s.title)

export const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(3, { message: 'Nama wajib diisi (minimal 3 karakter)' })
    .max(60, { message: 'Nama maksimal 60 karakter' }),
  
  email: z
    .string()
    .trim()
    .min(1, { message: 'Format email tidak valid' })
    .email({ message: 'Format email tidak valid' }),

  phone: z
    .string()
    .trim()
    .regex(/^(\+62|62|08)[0-9]{8,12}$/, { message: 'Nomor telepon tidak valid' }),

  serviceType: z
    .string()
    .refine((val) => validServiceTitles.includes(val), { message: 'Pilih jenis layanan' }),

  budget: z
    .string()
    .optional(),

  message: z
    .string()
    .trim()
    .min(20, { message: 'Pesan minimal 20 karakter' })
    .max(1000, { message: 'Pesan maksimal 1000 karakter' }),

  agreement: z
    .boolean()
    .refine((val) => val === true, { message: 'Anda harus menyetujui sebelum mengirim' }),

  honeypot: z
    .string()
    .max(0, { message: 'Spam detected' })
    .optional()
})
