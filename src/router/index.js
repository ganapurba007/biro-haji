import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: {
      title: 'Beranda | PT Adhirajasa Karya Mandiri',
      description: 'Kontraktor umum terpercaya untuk pembangunan gedung, infrastruktur, renovasi, dan interior berkualitas tinggi di Indonesia.'
    }
  },
  {
    path: '/tentang',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: 'Tentang Kami | PT Adhirajasa Karya Mandiri',
      description: 'Mengenal profil, visi, misi, legalitas resmi, dan jajaran tim manajemen PT Adhirajasa Karya Mandiri.'
    }
  },
  {
    path: '/layanan',
    name: 'services',
    component: () => import('../views/ServicesView.vue'),
    meta: {
      title: 'Layanan Konstruksi | PT Adhirajasa Karya Mandiri',
      description: 'Layanan konstruksi komprehensif mulai dari pembangunan gedung, jalan & infrastruktur, renovasi, interior, hingga pengawasan proyek.'
    }
  },
  {
    path: '/proyek',
    name: 'projects',
    component: () => import('../views/ProjectsView.vue'),
    meta: {
      title: 'Portfolio Proyek | PT Adhirajasa Karya Mandiri',
      description: 'Eksplorasi rekam jejak proyek konstruksi prestisius yang telah berhasil diselesaikan oleh PT Adhirajasa Karya Mandiri.'
    }
  },
  {
    path: '/proyek/:slug',
    name: 'project-detail',
    component: () => import('../views/ProjectDetailView.vue'),
    meta: {
      title: 'Detail Proyek | PT Adhirajasa Karya Mandiri',
      description: 'Informasi detail spesifikasi, ruang lingkup, dan galeri dokumentasi proyek konstruksi.'
    }
  },
  {
    path: '/kontak',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    meta: {
      title: 'Hubungi Kami | PT Adhirajasa Karya Mandiri',
      description: 'Konsultasikan kebutuhan proyek konstruksi Anda bersama tim ahli PT Adhirajasa Karya Mandiri.'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFoundView.vue'),
    meta: {
      title: '404 - Halaman Tidak Ditemukan | PT Adhirajasa Karya Mandiri',
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

// Update title and meta description dynamically
router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription && to.meta && to.meta.description) {
    metaDescription.setAttribute('content', to.meta.description)
  }
  next()
})

export default router
