<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { 
  MapPin, 
  Calendar, 
  Clock, 
  UserCheck, 
  ShieldCheck, 
  Layers, 
  ArrowLeft, 
  ArrowRight, 
  Share2, 
  CheckCircle2,
  AlertCircle,
  ExternalLink
} from 'lucide-vue-next'
import projectsData from '@/data/projects.json'
import PageHeader from '@/components/ui/PageHeader.vue'
import ProjectCard from '@/components/projects/ProjectCard.vue'
import BaseBadge from '@/components/ui/BaseBadge.vue'
import CtaBanner from '@/components/sections/CtaBanner.vue'
import { useAgency } from '@/composables/useAgency'

const { agencyLink } = useAgency()
const route = useRoute()
const activeImageIndex = ref(0)
const isCopied = ref(false)

const project = computed(() => {
  const slug = route?.params?.slug
  if (!slug) return null
  return projectsData.find((p) => p.slug === slug) || null
})

// Reset active image index when slug changes
if (route) {
  watch(() => route?.params?.slug, () => {
    activeImageIndex.value = 0
  })
}

const relatedProjects = computed(() => {
  if (!project.value) return []
  return projectsData
    .filter((p) => p.id !== project.value.id && p.category === project.value.category)
    .slice(0, 3)
    .concat(
      projectsData
        .filter((p) => p.id !== project.value.id && p.category !== project.value.category)
    )
    .slice(0, 3)
})

const copyShareLink = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href)
    isCopied.value = true
    setTimeout(() => {
      isCopied.value = false
    }, 2500)
  } catch (e) {
    // ignore
  }
}
</script>

<template>
  <div>
    <!-- FR-5.4: 404 Handler if project slug not found -->
    <div 
      v-if="!project" 
      class="min-h-[70vh] flex flex-col items-center justify-center py-20 px-4 text-center bg-slate-50"
    >
      <div class="w-20 h-20 rounded-3xl bg-rose-100 text-rose-600 flex items-center justify-center mx-auto mb-6 shadow-sm">
        <AlertCircle class="w-10 h-10" />
      </div>
      <div class="text-xs font-bold uppercase tracking-widest text-rose-600 mb-2">Error 404</div>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
        Paket Ibadah Tidak Ditemukan
      </h1>
      <p class="text-slate-600 max-w-md mx-auto mb-8 text-sm sm:text-base leading-relaxed">
        Maaf, paket ibadah dengan tautan <code class="bg-slate-200 px-2 py-0.5 rounded text-amber-700 font-mono">{{ route.params.slug }}</code> tidak terdaftar dalam database katalog kami.
      </p>
      <RouterLink
        :to="agencyLink('/proyek')"
        class="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-md transition-colors"
      >
        <ArrowLeft class="w-4 h-4" />
        <span>Kembali ke Katalog Paket</span>
      </RouterLink>
    </div>

    <!-- FR-5.3: Project Detail View if Project Found -->
    <div v-else class="space-y-0 bg-slate-50">
      
      <!-- Page Header Banner -->
      <PageHeader
        :title="project.title"
        :subtitle="`Kategori: ${project.category} • Maskapai & Hotel: ${project.client}`"
        :backgroundImage="project.images[0]"
      />

      <!-- Main Content Container -->
      <section class="py-16 sm:py-20 lg:py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <!-- Back Link & Share Action -->
          <div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6">
            <RouterLink
              :to="agencyLink('/proyek')"
              class="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-amber-600 transition-colors"
            >
              <ArrowLeft class="w-4 h-4" />
              <span>Kembali ke Daftar Paket</span>
            </RouterLink>

            <button
              type="button"
              @click="copyShareLink"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:text-amber-600 hover:bg-slate-50 shadow-sm transition-colors cursor-pointer"
            >
              <Share2 class="w-4 h-4 text-amber-500" />
              <span>{{ isCopied ? 'Tautan Disalin!' : 'Bagikan Paket' }}</span>
            </button>
          </div>

          <!-- Top Section: Image Gallery (Left) & Metadata Card (Right) -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            <!-- Gallery Section (lg:col-span-8) -->
            <div class="lg:col-span-8 space-y-4">
              <!-- Active Hero Photo -->
              <div class="relative h-80 sm:h-[480px] lg:h-[520px] rounded-3xl overflow-hidden bg-slate-900 shadow-xl border border-slate-200">
                <img
                  :src="project.images[activeImageIndex] || project.images[0]"
                  :alt="project.title"
                  class="w-full h-full object-cover transition-all duration-500"
                />
                
                <!-- Overlay Badges -->
                <div class="absolute top-4 left-4">
                  <BaseBadge variant="amber">
                    {{ project.category }}
                  </BaseBadge>
                </div>

                <div class="absolute top-4 right-4">
                  <BaseBadge variant="green">
                    Status: {{ project.status }}
                  </BaseBadge>
                </div>
              </div>

              <!-- Thumbnails Preview (if multiple images) -->
              <div 
                v-if="project.images.length > 1"
                class="flex items-center gap-4 pt-2 overflow-x-auto pb-2"
              >
                <button
                  v-for="(img, idx) in project.images"
                  :key="idx"
                  type="button"
                  @click="activeImageIndex = idx"
                  class="relative w-24 h-20 rounded-xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer"
                  :class="[
                    activeImageIndex === idx
                      ? 'border-amber-500 shadow-md scale-105'
                      : 'border-slate-200 opacity-70 hover:opacity-100'
                  ]"
                >
                  <img :src="img" :alt="`Foto ${idx + 1}`" class="w-full h-full object-cover" />
                </button>
              </div>
            </div>

            <!-- Metadata Specifications Sidebar (lg:col-span-4) -->
            <div class="lg:col-span-4 space-y-6">
              <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xl space-y-6">
                <h3 class="text-xl font-extrabold text-slate-900 border-b border-slate-100 pb-4">
                  Informasi Paket Ibadah
                </h3>

                <ul class="space-y-4 text-sm">
                  <!-- Maskapai & Hotel -->
                  <li class="flex items-start gap-3.5">
                    <div class="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                      <UserCheck class="w-4 h-4" />
                    </div>
                    <div>
                      <span class="text-xs text-slate-400 font-bold uppercase block">Maskapai & Akomodasi</span>
                      <span class="font-bold text-slate-900">{{ project.client }}</span>
                    </div>
                  </li>

                  <!-- Lokasi -->
                  <li class="flex items-start gap-3.5">
                    <div class="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin class="w-4 h-4" />
                    </div>
                    <div>
                      <span class="text-xs text-slate-400 font-bold uppercase block">Destinasi Ibadah</span>
                      <span class="font-bold text-slate-900">{{ project.location }}</span>
                    </div>
                  </li>

                  <!-- Tahun / Musim -->
                  <li class="flex items-start gap-3.5">
                    <div class="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Calendar class="w-4 h-4" />
                    </div>
                    <div>
                      <span class="text-xs text-slate-400 font-bold uppercase block">Musim / Tahun</span>
                      <span class="font-bold text-slate-900">{{ project.year }}</span>
                    </div>
                  </li>

                  <!-- Durasi -->
                  <li class="flex items-start gap-3.5">
                    <div class="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock class="w-4 h-4" />
                    </div>
                    <div>
                      <span class="text-xs text-slate-400 font-bold uppercase block">Durasi Program</span>
                      <span class="font-bold text-slate-900">{{ project.duration }}</span>
                    </div>
                  </li>

                  <!-- Kategori -->
                  <li class="flex items-start gap-3.5">
                    <div class="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Layers class="w-4 h-4" />
                    </div>
                    <div>
                      <span class="text-xs text-slate-400 font-bold uppercase block">Kategori Paket</span>
                      <span class="font-bold text-slate-900">{{ project.category }}</span>
                    </div>
                  </li>
                </ul>

                <!-- CTA Button -->
                <div class="pt-2">
                  <RouterLink
                    :to="agencyLink('/kontak')"
                    class="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm shadow hover:shadow-md transition-all text-center"
                  >
                    <span>Daftar / Konsultasi Paket Ini</span>
                    <ArrowRight class="w-4 h-4" />
                  </RouterLink>
                </div>
              </div>
            </div>

          </div>

          <!-- Project Description & Narrative -->
          <div class="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-md space-y-6">
            <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Deskripsi & Fasilitas Program Ibadah
            </h2>

            <p class="text-base sm:text-lg text-slate-700 font-medium leading-relaxed border-l-4 border-amber-500 pl-6 py-1 bg-amber-50/40 rounded-r-xl">
              {{ project.summary }}
            </p>

            <p class="text-sm sm:text-base text-slate-600 leading-relaxed">
              {{ project.description }}
            </p>

            <div class="pt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 border-t border-slate-100">
              <div class="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                <CheckCircle2 class="w-4 h-4 text-amber-500 shrink-0" />
                <span>Bimbingan Manasik Sesuai Sunnah</span>
              </div>
              <div class="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                <CheckCircle2 class="w-4 h-4 text-amber-500 shrink-0" />
                <span>Hotel Dekat Masjid & Transportasi Nyaman</span>
              </div>
              <div class="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                <CheckCircle2 class="w-4 h-4 text-amber-500 shrink-0" />
                <span>Kepastian Tiket & Visa Terdaftar Resmi</span>
              </div>
            </div>
          </div>

          <!-- Related Projects Section -->
          <div v-if="relatedProjects.length > 0" class="space-y-8 pt-8 border-t border-slate-200">
            <div class="flex items-center justify-between">
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-amber-600">Pilihan Terkait</span>
                <h3 class="text-2xl font-extrabold text-slate-900">Paket Lainnya yang Mungkin Anda Minati</h3>
              </div>
              <RouterLink
                :to="agencyLink('/proyek')"
                class="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-amber-600 transition-colors uppercase tracking-wider"
              >
                <span>Semua Paket</span>
                <ExternalLink class="w-3.5 h-3.5" />
              </RouterLink>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ProjectCard
                v-for="relProject in relatedProjects"
                :key="relProject.id"
                :project="relProject"
              />
            </div>
          </div>

        </div>
      </section>

      <!-- Bottom CTA Banner -->
      <CtaBanner />
    </div>
  </div>
</template>
