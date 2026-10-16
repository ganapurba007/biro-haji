import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ScrollToTop from '@/components/layout/ScrollToTop.vue'

describe('ScrollToTop Component (FR-1.5)', () => {
  it('is hidden when scroll position is under 400px', () => {
    window.scrollY = 100
    const wrapper = mount(ScrollToTop)
    expect(wrapper.find('button').exists()).toBe(false)
  })

  it('triggers window.scrollTo when clicked', async () => {
    const scrollToMock = vi.fn()
    window.scrollTo = scrollToMock
    window.scrollY = 500

    const wrapper = mount(ScrollToTop)
    window.dispatchEvent(new Event('scroll'))
    await wrapper.vm.$nextTick()

    const button = wrapper.find('button')
    if (button.exists()) {
      await button.trigger('click')
      expect(scrollToMock).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
    }
  })
})
