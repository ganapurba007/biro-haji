<script setup>
import { ref, computed } from 'vue'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  PhoneCall, 
  MessageSquare, 
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  CheckCircle2
} from 'lucide-vue-next'
import companyData from '@/data/company.json'
import PageHeader from '@/components/ui/PageHeader.vue'
import ContactForm from '@/components/forms/ContactForm.vue'
import ToastNotification from '@/components/ui/ToastNotification.vue'
import { useAgency } from '@/composables/useAgency'

const { activeAgency } = useAgency()

const toast = ref({
  show: false,
  type: 'success',
  title: '',
  message: ''
})

const agencyName = computed(() => activeAgency.value?.name || companyData.name)
const contactPhone = computed(() => activeAgency.value?.phone || companyData.contact.phone)
const contactWhatsapp = computed(() => activeAgency.value?.whatsapp || companyData.contact.whatsapp)
const contactEmail = computed(() => activeAgency.value?.email || companyData.contact.email)
const contactAddress = computed(() => activeAgency.value?.address || companyData.contact.address)

const handleSuccess = ({ title, message }) => {
  toast.value = {
    show: true,
    type: 'success',
    title,
    message
  }
}

const handleError = ({ title, message }) => {
  toast.value = {
    show: true,
    type: 'error',
    title,
    message
  }
}

const closeToast = () => {
  toast.value.show = false
}

const faqs = [
  {
    q: 'Apakah konsultasi dan pendaftaran awal dikenakan biaya?',
    a: 'Tidak. Seluruh sesi konsultasi paket, jadwal keberangkatan, dan estimasi biaya bimbingan manasik disediakan gratis tanpa ikatan.'
  },
  {
    q: 'Berapa lama proses penerbitan visa dan kepastian tiket?',
    a: 'Kepastian jadwal penerbangan dan manifest visa umroh/haji khusus diterbitkan secara transparan 2-4 minggu sebelum tanggal keberangkatan.'
  },
  {
    q: 'Bagaimana standar bimbingan manasik dan muthawwif?',
    a: 'Setiap jamaah didampingi oleh asatidz pembimbing bersertifikat Kemenag dan muthawwif mukim berpengalaman di Tanah Suci sesuai sunnah.'
  }
]
</script>

<template>
  <div class="space-y-0">
    <!-- Page Header Banner -->
    <PageHeader
      title="Hubungi Kami"
      subtitle="Diskusikan rencana ibadah haji & umroh Anda dan keluarga bersama konsultan dan pembimbing ibadah kami."
      backgroundImage="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1600&q=80"
    />

    <!-- Main Contact Section -->
    <section class="py-16 sm:py-20 lg:py-24 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <!-- Left Column: Contact Information & Map (lg:col-span-5) -->
          <div class="lg:col-span-5 space-y-8">
            
            <!-- Contact Info Box -->
            <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg space-y-6">
              <div class="border-b border-slate-100 pb-4">
                <span class="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">Informasi Layanan Jamaah</span>
                <h3 class="text-2xl font-extrabold text-slate-900">Kantor Layanan {{ agencyName }}</h3>
              </div>

              <ul class="space-y-5 text-sm">
                <!-- Alamat -->
                <li class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin class="w-5 h-5" />
                  </div>
                  <div>
                    <span class="text-xs text-slate-400 font-bold uppercase block">Alamat Kantor</span>
                    <span class="font-bold text-slate-900 leading-snug block mt-0.5">
                      {{ contactAddress }}
                    </span>
                  </div>
                </li>

                <!-- Telepon -->
                <li class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone class="w-5 h-5" />
                  </div>
                  <div>
                    <span class="text-xs text-slate-400 font-bold uppercase block">Telepon Layanan</span>
                    <a :href="`tel:${contactPhone.replace(/[^0-9+]/g, '')}`" class="font-bold text-slate-900 hover:text-amber-600 transition-colors block mt-0.5">
                      {{ contactPhone }}
                    </a>
                  </div>
                </li>

                <!-- WhatsApp -->
                <li class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <MessageSquare class="w-5 h-5" />
                  </div>
                  <div>
                    <span class="text-xs text-slate-400 font-bold uppercase block">WhatsApp Konsultasi Cepat</span>
                    <a :href="`https://wa.me/${contactWhatsapp.replace(/[^0-9]/g, '')}`" target="_blank" rel="noopener noreferrer" class="font-bold text-slate-900 hover:text-emerald-600 transition-colors block mt-0.5">
                      {{ contactWhatsapp }} (Chat Langsung)
                    </a>
                  </div>
                </li>

                <!-- Email -->
                <li class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail class="w-5 h-5" />
                  </div>
                  <div>
                    <span class="text-xs text-slate-400 font-bold uppercase block">Email Resmi</span>
                    <a :href="`mailto:${contactEmail}`" class="font-bold text-slate-900 hover:text-amber-600 transition-colors block mt-0.5">
                      {{ contactEmail }}
                    </a>
                  </div>
                </li>

                <!-- Jam Kerja -->
                <li class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock class="w-5 h-5" />
                  </div>
                  <div>
                    <span class="text-xs text-slate-400 font-bold uppercase block">Jam Operasional</span>
                    <span class="font-medium text-slate-700 block mt-0.5">
                      {{ companyData.workingHours }}
                    </span>
                  </div>
                </li>
              </ul>

              <!-- Toll Free Strip -->
              <div class="p-4 rounded-2xl bg-slate-950 text-white flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <PhoneCall class="w-5 h-5 text-amber-400" />
                  <div>
                    <span class="text-[10px] text-amber-400 font-bold uppercase block">Bebas Pulsa</span>
                    <span class="text-sm font-extrabold">{{ companyData.contact.tollFree }}</span>
                  </div>
                </div>
                <span class="text-[11px] text-slate-400 font-medium">Layanan Bantuan 24 Jam</span>
              </div>
            </div>

            <!-- Map Location Container (FR-6.6) -->
            <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-md space-y-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <MapPin class="w-4 h-4 text-amber-600" />
                  <span>Peta Lokasi Kantor Layanan Jamaah</span>
                </div>
                <span class="text-xs text-amber-600 font-bold">Jakarta Selatan</span>
              </div>

              <!-- Map Visual Embed -->
              <div class="relative h-56 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                <iframe
                  title="Peta Lokasi Kantor Layanan"
                  class="w-full h-full border-0 filter grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                  src="https://maps.google.com/maps?q=Menara%20Karya%20Rasuna%20Said%20Jakarta&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div class="text-[11px] text-slate-500 flex items-center justify-between pt-1">
                <span>Gedung Menara Madinah Lt. 5, Kuningan</span>
                <a 
                  href="https://maps.google.com/?q=Menara+Karya+Rasuna+Said+Jakarta" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="text-amber-600 font-bold hover:underline inline-flex items-center gap-1"
                >
                  <span>Buka di Google Maps</span>
                  <ExternalLink class="w-3 h-3" />
                </a>
              </div>
            </div>

            <!-- FAQ Accordion / Quick List -->
            <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-md space-y-4">
              <div class="flex items-center gap-2 text-slate-900 font-bold text-sm border-b border-slate-100 pb-3">
                <HelpCircle class="w-4 h-4 text-amber-600" />
                <span>Pertanyaan yang Sering Diajukan (FAQ)</span>
              </div>

              <div class="space-y-3 text-xs">
                <div v-for="(item, idx) in faqs" :key="idx" class="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
                  <h4 class="font-bold text-slate-900 mb-1 flex items-start gap-1.5">
                    <CheckCircle2 class="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span>{{ item.q }}</span>
                  </h4>
                  <p class="text-slate-600 leading-relaxed pl-5">
                    {{ item.a }}
                  </p>
                </div>
              </div>
            </div>

          </div>

          <!-- Right Column: Contact Form (lg:col-span-7) -->
          <div class="lg:col-span-7">
            <ContactForm
              @submit-success="handleSuccess"
              @submit-error="handleError"
            />
          </div>

        </div>
      </div>
    </section>

    <!-- Floating Toast Notification -->
    <ToastNotification
      :show="toast.show"
      :type="toast.type"
      :title="toast.title"
      :message="toast.message"
      @close="closeToast"
    />
  </div>
</template>
