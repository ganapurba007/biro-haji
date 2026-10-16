<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { Menu, X, ArrowRight, Phone } from 'lucide-vue-next'
import { useAgency } from '@/composables/useAgency'

const { agency, agencyLink } = useAgency()
const route = useRoute()
const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

const navLinks = [
  { name: 'Beranda', path: '/' },
  { name: 'Tentang', path: '/tentang' },
  { name: 'Layanan', path: '/layanan' },
  { name: 'Proyek', path: '/proyek' },
  { name: 'Kontak', path: '/kontak' },
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const handleKeyDown = (e) => {
  if (e.key === 'Escape' && isMobileMenuOpen.value) {
    closeMobileMenu()
  }
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

// Close menu when route changes
if (route) {
  watch(() => route.path, () => {
    closeMobileMenu()
  })
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
  window.removeEventListener('scroll', handleScroll)
})

const isActive = (path) => {
  if (!route || !route.path) return false
  const target = agencyLink(path)
  if (path === '/') {
    return route.path === '/' || route.path === `/${agency.value.slug}`
  }
  return route.path === target || route.path.startsWith(`${target}/`)
}
</script>

<template>
  <header 
    class="sticky top-0 z-40 transition-all duration-300 bg-white/95 backdrop-blur-md"
    :class="[isScrolled ? 'shadow-md py-3' : 'shadow-sm py-4']"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <RouterLink 
          :to="agencyLink('/')" 
          class="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg p-1"
          :aria-label="`${agency.name} - Kembali ke Beranda`"
        >
          <div v-if="agency.logo" class="w-10 h-10 rounded-xl overflow-hidden shadow-md flex items-center justify-center bg-white group-hover:scale-105 transition-transform duration-200">
            <img :src="agency.logo" :alt="agency.name" class="w-full h-full object-contain" />
          </div>
          <div v-else class="w-10 h-10 rounded-xl bg-gradient-to-tr from-slate-900 to-slate-800 flex items-center justify-center text-amber-500 shadow-md group-hover:scale-105 transition-transform duration-200 font-extrabold text-sm tracking-wider">
            <span>{{ agency.initials || 'DB' }}</span>
          </div>
          <div>
            <div class="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 leading-tight">
              {{ agency.shortName }}
            </div>
            <div class="text-[10px] tracking-widest text-amber-600 font-bold uppercase -mt-0.5">
              {{ agency.subName }}
            </div>
          </div>
        </RouterLink>

        <!-- Desktop Navigation Links -->
        <nav class="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Navigasi Utama">
          <RouterLink
            v-for="link in navLinks"
            :key="link.path"
            :to="agencyLink(link.path)"
            class="px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 relative"
            :class="[
              isActive(link.path)
                ? 'text-amber-600 bg-amber-50/80 font-bold'
                : 'text-slate-700 hover:text-amber-600 hover:bg-slate-50'
            ]"
          >
            {{ link.name }}
            <span
              v-if="isActive(link.path)"
              class="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-500 rounded-full"
            />
          </RouterLink>
        </nav>

        <!-- Right Side CTA (Desktop) -->
        <div class="hidden md:flex items-center gap-4">
          <RouterLink
            :to="agencyLink('/kontak')"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 text-sm font-bold shadow-sm hover:shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
          >
            <span>Konsultasi Gratis</span>
            <ArrowRight class="w-4 h-4" />
          </RouterLink>
        </div>

        <!-- Mobile Hamburger Button -->
        <div class="flex items-center md:hidden">
          <button
            type="button"
            @click="toggleMobileMenu"
            class="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
            :aria-expanded="isMobileMenuOpen"
            aria-controls="mobile-menu"
            aria-label="Toggle navigasi menu"
          >
            <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
            <X v-else class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Drawer / Menu Overlay -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div 
        v-if="isMobileMenuOpen" 
        id="mobile-menu"
        class="md:hidden border-t border-slate-200 bg-white shadow-xl px-4 pt-3 pb-6 space-y-3"
      >
        <div class="space-y-1">
          <RouterLink
            v-for="link in navLinks"
            :key="link.path"
            :to="agencyLink(link.path)"
            @click="closeMobileMenu"
            class="block px-4 py-3 rounded-lg text-base font-semibold transition-colors duration-150"
            :class="[
              isActive(link.path)
                ? 'bg-amber-50 text-amber-700 font-bold border-l-4 border-amber-500'
                : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
            ]"
          >
            {{ link.name }}
          </RouterLink>
        </div>

        <div class="pt-3 border-t border-slate-100 flex flex-col gap-3">
          <RouterLink
            :to="agencyLink('/kontak')"
            @click="closeMobileMenu"
            class="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-center shadow transition-colors"
          >
            <span>Konsultasi Gratis</span>
            <ArrowRight class="w-4 h-4" />
          </RouterLink>

          <a 
            :href="`tel:${agency.contact.phone.replace(/[^0-9+]/g, '')}`"
            class="flex items-center justify-center gap-2 py-2 text-xs text-slate-600 font-medium"
          >
            <Phone class="w-3.5 h-3.5 text-amber-500" />
            <span>{{ agency.contact.phone }} (Hubungi Langsung)</span>
          </a>
        </div>
      </div>
    </transition>
  </header>
</template>
