import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Navbar from '@/components/layout/Navbar.vue'

vi.mock('vue-router', () => ({
  useRoute: () => ({ path: '/' }),
  RouterLink: {
    template: '<a :href="to"><slot /></a>',
    props: ['to']
  }
}))

describe('Navbar Component (FR-1.2, FR-1.3)', () => {
  it('renders logo and company name', () => {
    const wrapper = mount(Navbar)
    expect(wrapper.text()).toContain('DEMO')
    expect(wrapper.text()).toContain('Biro Umroh & Haji')
  })

  it('renders all 5 main navigation links and CTA button', () => {
    const wrapper = mount(Navbar)
    expect(wrapper.text()).toContain('Beranda')
    expect(wrapper.text()).toContain('Tentang')
    expect(wrapper.text()).toContain('Layanan')
    expect(wrapper.text()).toContain('Proyek')
    expect(wrapper.text()).toContain('Kontak')
    expect(wrapper.text()).toContain('Konsultasi Gratis')
  })

  it('toggles mobile menu on button click', async () => {
    const wrapper = mount(Navbar)
    const toggleButton = wrapper.find('button[aria-label="Toggle navigasi menu"]')
    
    expect(wrapper.find('#mobile-menu').exists()).toBe(false)
    await toggleButton.trigger('click')
    expect(wrapper.find('#mobile-menu').exists()).toBe(true)
    
    await toggleButton.trigger('click')
    expect(wrapper.find('#mobile-menu').exists()).toBe(false)
  })
})
