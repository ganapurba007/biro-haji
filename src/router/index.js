import { createRouter, createWebHistory } from 'vue-router'
import { useAgency } from '../composables/useAgency'

const basePageRoutes = [
  {
    path: '',
    nameSuffix: 'home',
    component: () => import('../views/HomeView.vue'),
    title: 'Beranda | Biro Perjalanan Haji Khusus & Umroh Resmi',
    description: 'Penyelenggara perjalanan ibadah umroh dan haji khusus resmi terpercaya dengan kepastian 5 Pasti Umroh, hotel pelataran bintang 5, dan bimbingan ibadah sesuai sunnah.'
  },
  {
    path: 'tentang',
    nameSuffix: 'about',
    component: () => import('../views/AboutView.vue'),
    title: 'Tentang Kami | Profil, Visi, Misi & Legalitas Resmi',
    description: 'Mengenal profil amanah, visi misi khidmah jamaah, legalitas izin Kemenag RI, serta jajaran dewan pembimbing ibadah asatidz.'
  },
  {
    path: 'layanan',
    nameSuffix: 'services',
    component: () => import('../views/ServicesView.vue'),
    title: 'Layanan Ibadah | Umroh Reguler, Umroh Plus & Haji Khusus',
    description: 'Layanan ibadah komprehensif mulai dari Umroh Reguler, Umroh Plus Mancanegara, Haji Khusus Kuota Kemenag, Haji Furoda, hingga Badal Umroh & Haji.'
  },
  {
    path: 'proyek',
    nameSuffix: 'projects',
    component: () => import('../views/ProjectsView.vue'),
    title: 'Katalog Paket Ibadah | Jadwal & Fasilitas Keberangkatan',
    description: 'Eksplorasi pilihan paket perjalanan ibadah umroh dan haji khusus dengan fasilitas hotel pelataran dan maskapai penerbangan langsung tanpa transit.'
  },
  {
    path: 'proyek/:slug',
    nameSuffix: 'project-detail',
    component: () => import('../views/ProjectDetailView.vue'),
    title: 'Detail Paket Ibadah | Itinerary & Fasilitas Hotel',
    description: 'Informasi lengkap spesifikasi kamar, maskapai penerbangan, hotel Makkah-Madinah, dan jadwal keberangkatan.'
  },
  {
    path: 'kontak',
    nameSuffix: 'contact',
    component: () => import('../views/ContactView.vue'),
    title: 'Pendaftaran & Konsultasi Jamaah | Hubungi Kami',
    description: 'Konsultasikan rencana ibadah suci Anda bersama konsultan ibadah berpengalaman kami.'
  }
]

const routes = [
  // 1. Standard Root Routes (Default Demo Biro)
  ...basePageRoutes.map((r) => ({
    path: r.path ? `/${r.path}` : '/',
    name: r.nameSuffix,
    component: r.component,
    meta: {
      title: r.title,
      description: r.description
    }
  })),

  // 2. Dynamic Client Mockup Subpath Routes (e.g. /:agencySlug/...)
  ...basePageRoutes.map((r) => ({
    path: r.path ? `/:agencySlug/${r.path}` : '/:agencySlug',
    name: `agency-${r.nameSuffix}`,
    component: r.component,
    meta: {
      title: r.title,
      description: r.description
    }
  })),

  // 3. Catch-all 404 Route
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFoundView.vue'),
    meta: {
      title: '404 - Halaman Tidak Ditemukan',
      description: 'Halaman yang Anda tuju tidak ditemukan.'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0, behavior: 'smooth' }
  }
})

// Navigation Guard: Synchronize active agency state on route navigation
router.beforeEach((to, from, next) => {
  const { setAgency, agency } = useAgency()

  // 1. Extract from route param
  let slug = to.params.agencySlug

  // 2. Fallback to query param (?biro=... or ?client=... or ?mockup=...)
  if (!slug && (to.query.biro || to.query.client || to.query.mockup)) {
    slug = to.query.biro || to.query.client || to.query.mockup
  }

  if (slug) {
    setAgency(slug)
  } else {
    setAgency('default-biro')
  }

  // Update document title and meta description
  const activeAgencyName = agency.value?.name || 'Demo Biro Umroh dan Haji'
  if (to.meta && to.meta.title) {
    document.title = `${to.meta.title} — ${activeAgencyName}`
  } else {
    document.title = activeAgencyName
  }

  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription && to.meta && to.meta.description) {
    metaDescription.setAttribute('content', to.meta.description)
  }

  next()
})

export default router
