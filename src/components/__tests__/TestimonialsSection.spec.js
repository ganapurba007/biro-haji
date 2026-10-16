import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue'
import testimonialsData from '@/data/testimonials.json'

describe('TestimonialsSection Component (FR-2.8)', () => {
  it('renders all testimonials with names, quotes, and roles', () => {
    const wrapper = mount(TestimonialsSection)
    testimonialsData.forEach(item => {
      expect(wrapper.text()).toContain(item.name)
      expect(wrapper.text()).toContain(item.role)
      expect(wrapper.text()).toContain(item.quote)
    })
  })
})
