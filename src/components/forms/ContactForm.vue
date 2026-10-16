<script setup>
import { ref, reactive, computed, nextTick } from 'vue'
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles, Sliders } from 'lucide-vue-next'
import servicesData from '@/data/services.json'
import { contactSchema } from '@/lib/contactSchema'

const emit = defineEmits(['submit-success', 'submit-error'])

const form = reactive({
  fullName: '',
  email: '',
  phone: '',
  serviceType: '',
  budget: '',
  message: '',
  agreement: false,
  honeypot: ''
})

const errors = reactive({
  fullName: '',
  email: '',
  phone: '',
  serviceType: '',
  budget: '',
  message: '',
  agreement: '',
  honeypot: ''
})

const isSubmitting = ref(false)
const simulateError = ref(false) // Toggle for demonstrator failure simulation (FR-6.3)

const budgetOptions = [
  'Di bawah Rp 30 Juta (Reguler Hemat)',
  'Rp 30 Juta - Rp 40 Juta (Reguler Bintang 5)',
  'Rp 40 Juta - Rp 60 Juta (Umroh Plus Wisata)',
  'Di atas Rp 150 Juta (Haji Khusus / Furoda)',
  'Belum Ditentukan'
]

const messageLength = computed(() => form.message.length)

// Validate single field on blur (FR-6.2)
const validateField = (field) => {
  const fieldSchema = contactSchema.shape[field]
  if (fieldSchema) {
    const res = fieldSchema.safeParse(form[field])
    if (!res.success) {
      errors[field] = res.error.issues[0]?.message || 'Input tidak valid'
    } else {
      errors[field] = ''
    }
  }
}

// Reset entire form
const resetForm = () => {
  form.fullName = ''
  form.email = ''
  form.phone = ''
  form.serviceType = ''
  form.budget = ''
  form.message = ''
  form.agreement = false
  form.honeypot = ''

  Object.keys(errors).forEach((key) => {
    errors[key] = ''
  })
}

// Focus to first invalid field (FR-6.4)
const focusFirstError = (errorKeys) => {
  const fieldOrder = ['fullName', 'email', 'phone', 'serviceType', 'message', 'agreement']
  const firstFailed = fieldOrder.find((k) => errorKeys.includes(k))
  if (firstFailed) {
    const el = document.getElementById(firstFailed)
    if (el) {
      el.focus()
    }
  }
}

// Handle Form Submission (FR-6.2, FR-6.3, FR-6.4)
const handleSubmit = async () => {
  // Clear previous errors
  Object.keys(errors).forEach((k) => (errors[k] = ''))

  const result = contactSchema.safeParse(form)

  if (!result.success) {
    const formattedErrors = result.error.format()
    const failedFields = []

    Object.keys(formattedErrors).forEach((key) => {
      if (key !== '_errors' && formattedErrors[key]?._errors?.[0]) {
        errors[key] = formattedErrors[key]._errors[0]
        failedFields.push(key)
      }
    })

    await nextTick()
    focusFirstError(failedFields)
    return
  }

  // If honeypot filled -> ignore spam
  if (form.honeypot) {
    return
  }

  isSubmitting.value = true

  // Simulate network request (1.5 seconds)
  setTimeout(() => {
    isSubmitting.value = false

    if (simulateError.value) {
      emit('submit-error', {
        title: 'Pengiriman Gagal (Simulasi)',
        message: 'Terjadi gangguan jaringan saat mengirim formulir. Silakan coba beberapa saat lagi atau hubungi via WhatsApp.'
      })
    } else {
      emit('submit-success', {
        title: 'Pesan Terkirim!',
        message: `Terima kasih Bapak/Ibu ${form.fullName}. Permintaan konsultasi Anda telah kami terima dan tim konsultan ibadah kami akan menghubungi dalam waktu 1x24 jam.`
      })
      resetForm()
    }
  }, 1500)
}
</script>

<template>
  <div class="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200 shadow-xl relative">
    
    <!-- Header info -->
    <div class="mb-8">
      <div class="text-xs font-extrabold uppercase tracking-widest text-amber-600 mb-2">
        Konsultasi Ibadah Gratis
      </div>
      <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
        Formulir Konsultasi & Pendaftaran
      </h3>
      <p class="text-sm text-slate-600 mt-1">
        Isi data singkat berikut untuk mendapatkan informasi jadwal keberangkatan, rincian fasilitas hotel, dan estimasi biaya ibadah transparan.
      </p>
    </div>

    <!-- Toggle Demo Mode Simulation (FR-6.3) -->
    <div class="mb-8 p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
      <div class="flex items-center gap-2 text-slate-700 font-semibold">
        <Sliders class="w-4 h-4 text-amber-600" />
        <span>Simulasi Mode Error (Demo)</span>
      </div>
      <label class="relative inline-flex items-center cursor-pointer select-none">
        <input 
          type="checkbox" 
          v-model="simulateError" 
          class="sr-only peer"
        />
        <div class="w-9 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-rose-500"></div>
        <span class="ml-2 text-[11px] font-bold" :class="simulateError ? 'text-rose-600' : 'text-slate-500'">
          {{ simulateError ? 'Aktif (Gagal)' : 'Normal (Sukses)' }}
        </span>
      </label>
    </div>

    <!-- Form -->
    <form @submit.prevent="handleSubmit" novalidate class="space-y-6">
      
      <!-- Honeypot Field for Anti-Spam (Hidden) -->
      <div class="hidden" aria-hidden="true">
        <label for="honeypot">Jangan isi bidang ini</label>
        <input 
          id="honeypot" 
          type="text" 
          v-model="form.honeypot" 
          tabindex="-1" 
          autocomplete="off" 
        />
      </div>

      <!-- Row 1: Nama Lengkap & Email -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        
        <!-- Nama Lengkap -->
        <div>
          <label for="fullName" class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Nama Lengkap <span class="text-rose-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            v-model="form.fullName"
            @blur="validateField('fullName')"
            :disabled="isSubmitting"
            placeholder="Contoh: Ir. Budi Santoso"
            :aria-invalid="!!errors.fullName"
            :aria-describedby="errors.fullName ? 'fullName-error' : null"
            class="w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 disabled:bg-slate-100 disabled:cursor-not-allowed"
            :class="[
              errors.fullName 
                ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-400 focus:border-rose-500 text-rose-900' 
                : 'border-slate-200 focus:ring-amber-400 focus:border-amber-500 text-slate-900'
            ]"
          />
          <p v-if="errors.fullName" id="fullName-error" class="mt-1.5 text-xs text-rose-600 flex items-center gap-1 font-medium">
            <AlertCircle class="w-3.5 h-3.5 shrink-0" />
            <span>{{ errors.fullName }}</span>
          </p>
        </div>

        <!-- Email -->
        <div>
          <label for="email" class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Alamat Email <span class="text-rose-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            v-model="form.email"
            @blur="validateField('email')"
            :disabled="isSubmitting"
            placeholder="nama@perusahaan.co.id"
            :aria-invalid="!!errors.email"
            :aria-describedby="errors.email ? 'email-error' : null"
            class="w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 disabled:bg-slate-100 disabled:cursor-not-allowed"
            :class="[
              errors.email 
                ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-400 focus:border-rose-500 text-rose-900' 
                : 'border-slate-200 focus:ring-amber-400 focus:border-amber-500 text-slate-900'
            ]"
          />
          <p v-if="errors.email" id="email-error" class="mt-1.5 text-xs text-rose-600 flex items-center gap-1 font-medium">
            <AlertCircle class="w-3.5 h-3.5 shrink-0" />
            <span>{{ errors.email }}</span>
          </p>
        </div>

      </div>

      <!-- Row 2: Nomor Telepon & Jenis Layanan -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        
        <!-- Nomor Telepon / WA -->
        <div>
          <label for="phone" class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Nomor Telepon / WA <span class="text-rose-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            v-model="form.phone"
            @blur="validateField('phone')"
            :disabled="isSubmitting"
            placeholder="08123456789 atau +62812..."
            :aria-invalid="!!errors.phone"
            :aria-describedby="errors.phone ? 'phone-error' : null"
            class="w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 disabled:bg-slate-100 disabled:cursor-not-allowed"
            :class="[
              errors.phone 
                ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-400 focus:border-rose-500 text-rose-900' 
                : 'border-slate-200 focus:ring-amber-400 focus:border-amber-500 text-slate-900'
            ]"
          />
          <p v-if="errors.phone" id="phone-error" class="mt-1.5 text-xs text-rose-600 flex items-center gap-1 font-medium">
            <AlertCircle class="w-3.5 h-3.5 shrink-0" />
            <span>{{ errors.phone }}</span>
          </p>
        </div>

        <!-- Jenis Layanan (Select) -->
        <div>
          <label for="serviceType" class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Jenis Layanan <span class="text-rose-500">*</span>
          </label>
          <select
            id="serviceType"
            v-model="form.serviceType"
            @change="validateField('serviceType')"
            @blur="validateField('serviceType')"
            :disabled="isSubmitting"
            :aria-invalid="!!errors.serviceType"
            :aria-describedby="errors.serviceType ? 'serviceType-error' : null"
            class="w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 disabled:bg-slate-100 disabled:cursor-not-allowed cursor-pointer"
            :class="[
              errors.serviceType 
                ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-400 focus:border-rose-500 text-rose-900' 
                : 'border-slate-200 focus:ring-amber-400 focus:border-amber-500 text-slate-900'
            ]"
          >
            <option value="" disabled>Pilih Jenis Layanan</option>
            <option 
              v-for="service in servicesData" 
              :key="service.id" 
              :value="service.title"
            >
              {{ service.title }}
            </option>
          </select>
          <p v-if="errors.serviceType" id="serviceType-error" class="mt-1.5 text-xs text-rose-600 flex items-center gap-1 font-medium">
            <AlertCircle class="w-3.5 h-3.5 shrink-0" />
            <span>{{ errors.serviceType }}</span>
          </p>
        </div>

      </div>

      <!-- Perkiraan Anggaran (Select Opsional) -->
      <div>
        <label for="budget" class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
          Perkiraan Anggaran / Paket Pilihan <span class="text-slate-400 font-normal">(Opsional)</span>
        </label>
        <select
          id="budget"
          v-model="form.budget"
          :disabled="isSubmitting"
          class="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-500 text-slate-900 disabled:bg-slate-100 cursor-pointer"
        >
          <option value="">Pilih Estimasi Anggaran / Paket</option>
          <option v-for="b in budgetOptions" :key="b" :value="b">
            {{ b }}
          </option>
        </select>
      </div>

      <!-- Pesan Kebutuhan Ibadah (Textarea) -->
      <div>
        <div class="flex items-center justify-between mb-2">
          <label for="message" class="block text-xs font-bold uppercase tracking-wider text-slate-700">
            Rincian Kebutuhan / Pertanyaan Jamaah <span class="text-rose-500">*</span>
          </label>
          <span 
            class="text-xs font-mono font-medium"
            :class="[messageLength < 20 ? 'text-amber-600' : 'text-slate-400']"
          >
            {{ messageLength }} / 1000 karakter
          </span>
        </div>
        <textarea
          id="message"
          v-model="form.message"
          @blur="validateField('message')"
          :disabled="isSubmitting"
          rows="4"
          placeholder="Tuliskan rencana bulan keberangkatan, jumlah anggota keluarga/jamaah, atau permintaan kamar khusus yang Anda butuhkan..."
          :aria-invalid="!!errors.message"
          :aria-describedby="errors.message ? 'message-error' : null"
          class="w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 disabled:bg-slate-100 disabled:cursor-not-allowed"
          :class="[
            errors.message 
              ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-400 focus:border-rose-500 text-rose-900' 
              : 'border-slate-200 focus:ring-amber-400 focus:border-amber-500 text-slate-900'
          ]"
        ></textarea>
        <p v-if="errors.message" id="message-error" class="mt-1.5 text-xs text-rose-600 flex items-center gap-1 font-medium">
          <AlertCircle class="w-3.5 h-3.5 shrink-0" />
          <span>{{ errors.message }}</span>
        </p>
      </div>

      <!-- Persetujuan Kebijakan Privasi (Checkbox) -->
      <div>
        <div class="flex items-start gap-3">
          <div class="flex items-center h-5">
            <input
              id="agreement"
              type="checkbox"
              v-model="form.agreement"
              @change="validateField('agreement')"
              :disabled="isSubmitting"
              :aria-invalid="!!errors.agreement"
              :aria-describedby="errors.agreement ? 'agreement-error' : null"
              class="w-4 h-4 rounded border-slate-300 text-amber-600 focus:ring-amber-500 cursor-pointer disabled:cursor-not-allowed mt-0.5"
            />
          </div>
          <label for="agreement" class="text-xs text-slate-600 leading-relaxed cursor-pointer select-none">
            Saya menyetujui bahwa data yang saya masukkan digunakan oleh tim PT Adhirajasa Karya Mandiri untuk menghubungi saya perihal konsultasi proyek ini. <span class="text-rose-500">*</span>
          </label>
        </div>
        <p v-if="errors.agreement" id="agreement-error" class="mt-1.5 text-xs text-rose-600 flex items-center gap-1 font-medium pl-7">
          <AlertCircle class="w-3.5 h-3.5 shrink-0" />
          <span>{{ errors.agreement }}</span>
        </p>
      </div>

      <!-- Submit Button -->
      <div class="pt-2">
        <button
          type="submit"
          :disabled="isSubmitting"
          class="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-base shadow-lg hover:shadow-amber-500/25 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
        >
          <Loader2 v-if="isSubmitting" class="w-5 h-5 animate-spin shrink-0" />
          <Send v-else class="w-5 h-5 shrink-0" />
          <span>{{ isSubmitting ? 'Mengirimkan Permintaan...' : 'Kirim Permintaan Konsultasi' }}</span>
        </button>
      </div>

    </form>
  </div>
</template>
