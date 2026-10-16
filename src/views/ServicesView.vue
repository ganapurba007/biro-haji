<script setup>
import { RouterLink } from 'vue-router'
import { 
  Building2, 
  Hammer, 
  Truck, 
  Paintbrush, 
  ClipboardCheck, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-vue-next'
import servicesData from '@/data/services.json'
import PageHeader from '@/components/ui/PageHeader.vue'
import WorkProcessSection from '@/components/sections/WorkProcessSection.vue'
import CtaBanner from '@/components/sections/CtaBanner.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { useAgency } from '@/composables/useAgency'

const { agencyLink } = useAgency()
const services = servicesData

const getServiceIcon = (iconName) => {
  switch (iconName) {
    case 'Building2': return Building2
    case 'Hammer': return Hammer
    case 'Truck': return Truck
    case 'Paintbrush': return Paintbrush
    case 'ClipboardCheck': return ClipboardCheck
    default: return Building2
  }
}
</script>

<template>
  <div class="space-y-0">
    <!-- Page Header Banner with Breadcrumbs -->
    <PageHeader
      title="Layanan Ibadah Haji & Umroh"
      subtitle="Penyelenggaraan ibadah umroh reguler, paket plus wisata halal, haji khusus/furoda, badal, serta bimbingan manasik intensif sesuai sunnah."
      :breadcrumbs="[{ name: 'Layanan Ibadah' }]"
      backgroundImage="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1600&q=80"
    />

    <!-- FR-4.1: Daftar Layanan Lengkap (Detailed Services Showcase) -->
    <section class="py-20 lg:py-28 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <!-- Intro Section Title -->
        <SectionTitle
          badge="Program & Layanan Unggulan"
          title="Penyelenggaraan Ibadah Terpadu Berizin Resmi Kemenag"
          description="Didukung oleh asatidz pembimbing bersertifikat, muthawwif mukim berpengalaman, dan fasilitas akomodasi hotel pelataran bintang 5."
          align="center"
        />

        <!-- Detailed Services List -->
        <div class="space-y-16">
          <div
            v-for="(service, index) in services"
            :key="service.id"
            :id="service.slug"
            class="bg-slate-50 rounded-3xl p-8 sm:p-10 lg:p-12 border border-slate-200/80 shadow-lg hover:border-amber-400 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center scroll-mt-24"
            :class="[index % 2 === 1 ? 'lg:grid-flow-dense' : '']"
          >
            <!-- Image Column (lg:col-span-5) -->
            <div 
              class="lg:col-span-5 relative overflow-hidden rounded-2xl shadow-md group"
              :class="[index % 2 === 1 ? 'lg:col-start-8' : '']"
            >
              <img
                :src="service.image"
                :alt="service.title"
                class="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              
              <!-- Floating Icon -->
              <div class="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold shadow-lg">
                <component :is="getServiceIcon(service.icon)" class="w-6 h-6" />
              </div>
            </div>

            <!-- Details Column (lg:col-span-7) -->
            <div 
              class="lg:col-span-7 space-y-5"
              :class="[index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : '']"
            >
              <div class="flex items-center gap-3">
                <span class="w-8 h-8 rounded-lg bg-slate-900 text-amber-400 font-heading font-black text-xs flex items-center justify-center">
                  0{{ index + 1 }}
                </span>
                <span class="text-xs font-bold uppercase tracking-wider text-amber-600">Program Pilihan</span>
              </div>

              <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                {{ service.title }}
              </h2>

              <p class="text-sm sm:text-base text-slate-600 leading-relaxed">
                {{ service.description }}
              </p>

              <!-- Scope of Work Bullet Points -->
              <div class="pt-2">
                <h3 class="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                  Fasilitas & Keunggulan Program:
                </h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div
                    v-for="(item, i) in service.scope"
                    :key="i"
                    class="flex items-start gap-2 text-xs sm:text-sm font-medium text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200/60"
                  >
                    <CheckCircle2 class="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>{{ item }}</span>
                  </div>
                </div>
              </div>

              <!-- Action Link -->
              <div class="pt-4">
                <RouterLink
                  :to="agencyLink('/kontak')"
                  class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm shadow hover:shadow-md transition-all"
                >
                  <span>Daftar / Konsultasi {{ service.title }}</span>
                  <ArrowRight class="w-4 h-4" />
                </RouterLink>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- FR-4.2: Section Alur Kerja Terpadu (Reused Component) -->
    <WorkProcessSection />

    <!-- FR-4.2: Banner CTA Penutup (Reused Component) -->
    <CtaBanner />
  </div>
</template>
