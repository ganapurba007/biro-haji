<script setup>
import { RouterLink } from 'vue-router'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Linkedin, 
  Instagram, 
  Facebook, 
  Youtube,
  ShieldCheck,
  ChevronRight
} from 'lucide-vue-next'
import { useAgency } from '@/composables/useAgency'
import companyData from '@/data/company.json'

const { agency, agencyLink } = useAgency()
const currentYear = new Date().getFullYear()

const quickLinks = [
  { name: 'Beranda', path: '/' },
  { name: 'Tentang Kami', path: '/tentang' },
  { name: 'Layanan Ibadah', path: '/layanan' },
  { name: 'Katalog Paket', path: '/proyek' },
  { name: 'Pendaftaran & Kontak', path: '/kontak' }
]

const getSocialIcon = (name) => {
  switch (name.toLowerCase()) {
    case 'linkedin': return Linkedin
    case 'instagram': return Instagram
    case 'facebook': return Facebook
    case 'youtube': return Youtube
    default: return Instagram
  }
}
</script>

<template>
  <footer class="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
        
        <!-- Kolom 1: Profil Singkat & Sosial (lg:col-span-5) -->
        <div class="lg:col-span-5 space-y-5">
          <RouterLink :to="agencyLink('/')" class="flex items-center gap-3 group inline-flex" :aria-label="agency.name">
            <div v-if="agency.logo" class="w-10 h-10 rounded-xl overflow-hidden bg-white shadow flex items-center justify-center p-1">
              <img :src="agency.logo" :alt="agency.name" class="w-full h-full object-contain" />
            </div>
            <div v-else class="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950 font-bold shadow text-sm">
              <span>{{ agency.initials || 'DB' }}</span>
            </div>
            <div>
              <div class="text-xl font-extrabold text-white tracking-tight">
                {{ agency.shortName }}
              </div>
              <div class="text-[10px] tracking-widest text-amber-400 font-bold uppercase -mt-0.5">
                {{ agency.subName }}
              </div>
            </div>
          </RouterLink>

          <p class="text-sm text-slate-400 leading-relaxed pr-4">
            {{ agency.about }}
          </p>

          <div class="flex items-center gap-2 text-xs text-amber-400 bg-slate-900/80 px-3.5 py-2 rounded-lg border border-slate-800 w-fit">
            <ShieldCheck class="w-4 h-4 text-amber-400 shrink-0" />
            <span>Izin Resmi Kemenag RI (PPIU & PIHK) • Akreditasi A</span>
          </div>

          <!-- Social Media Links -->
          <div class="pt-2">
            <h4 class="text-xs uppercase font-bold tracking-wider text-slate-300 mb-3">Media Sosial</h4>
            <div class="flex items-center space-x-3">
              <a
                v-for="item in companyData.social"
                :key="item.name"
                :href="item.url"
                target="_blank"
                rel="noopener noreferrer"
                class="w-9 h-9 rounded-lg bg-slate-900 hover:bg-amber-500 text-slate-400 hover:text-slate-950 flex items-center justify-center transition-all duration-200 border border-slate-800"
                :aria-label="item.name"
              >
                <component :is="getSocialIcon(item.name)" class="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <!-- Kolom 2: Tautan Cepat & Layanan (lg:col-span-3) -->
        <div class="lg:col-span-3 space-y-4">
          <h3 class="text-base font-bold text-white tracking-wide border-l-2 border-amber-500 pl-3">
            Tautan Cepat
          </h3>
          <ul class="space-y-2.5 text-sm">
            <li v-for="link in quickLinks" :key="link.name">
              <RouterLink 
                :to="agencyLink(link.path)" 
                class="hover:text-amber-400 transition-colors flex items-center gap-1.5 group"
              >
                <ChevronRight class="w-3.5 h-3.5 text-slate-600 group-hover:text-amber-400 transition-colors" />
                <span>{{ link.name }}</span>
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Kolom 3: Info Kontak (lg:col-span-4) -->
        <div class="lg:col-span-4 space-y-4">
          <h3 class="text-base font-bold text-white tracking-wide border-l-2 border-amber-500 pl-3">
            Kantor & Kontak
          </h3>
          <ul class="space-y-3.5 text-sm">
            <li class="flex items-start gap-3">
              <MapPin class="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <span>{{ agency.contact.address }}</span>
            </li>
            <li class="flex items-center gap-3">
              <Phone class="w-4 h-4 text-amber-500 shrink-0" />
              <a :href="`tel:${agency.contact.phone.replace(/[^0-9+]/g, '')}`" class="hover:text-amber-400 transition-colors">
                {{ agency.contact.phone }}
              </a>
            </li>
            <li class="flex items-center gap-3">
              <Mail class="w-4 h-4 text-amber-500 shrink-0" />
              <a :href="`mailto:${agency.contact.email}`" class="hover:text-amber-400 transition-colors">
                {{ agency.contact.email }}
              </a>
            </li>
            <li class="flex items-start gap-3">
              <Clock class="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span>{{ agency.workingHours || companyData.workingHours }}</span>
            </li>
          </ul>
        </div>

      </div>

      <!-- Copyright Bar -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <p>
          &copy; {{ currentYear }} <span class="text-slate-400 font-semibold">{{ agency.name }}</span>. All rights reserved.
        </p>
        <div class="flex items-center text-slate-500">
          <span class="text-amber-500 font-medium">Biro Perjalanan Haji & Umroh Resmi Berizin Kemenag RI</span>
        </div>
      </div>
    </div>
  </footer>
</template>
