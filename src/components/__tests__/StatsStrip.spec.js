import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import StatsStrip from '@/components/sections/StatsStrip.vue'
import homeData from '@/data/home.json'
import companyData from '@/data/company.json'

describe('StatsStrip Component (FR-2.6)', () => {
  it('renders all stat labels and toll-free contact number', () => {
    const wrapper = mount(StatsStrip)
    homeData.stats.forEach(item => {
      expect(wrapper.text()).toContain(item.label)
    })
    expect(wrapper.text()).toContain(companyData.contact.tollFree)
  })
})
