import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import HeroSlider from '@/components/sections/HeroSlider.vue'
import homeData from '@/data/home.json'

describe('HeroSlider Component (FR-2.1)', () => {
  const globalMocks = {
    stubs: {
      RouterLink: {
        template: '<a :href="to"><slot /></a>',
        props: ['to']
      }
    }
  }

  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders all slides from data', () => {
    const wrapper = mount(HeroSlider, { global: globalMocks })
    homeData.heroSlides.forEach(slide => {
      expect(wrapper.text()).toContain(slide.headline)
    })
  })

  it('navigates to next and prev slides when clicking arrow buttons', async () => {
    const wrapper = mount(HeroSlider, { global: globalMocks })
    const nextBtn = wrapper.find('button[aria-label="Slide berikutnya"]')
    const prevBtn = wrapper.find('button[aria-label="Slide sebelumnya"]')

    expect(nextBtn.exists()).toBe(true)
    expect(prevBtn.exists()).toBe(true)

    await nextBtn.trigger('click')
    expect(wrapper.vm.currentSlide).toBe(1)

    await prevBtn.trigger('click')
    expect(wrapper.vm.currentSlide).toBe(0)
  })

  it('advances slide automatically after 6 seconds autoplay', async () => {
    const wrapper = mount(HeroSlider, { global: globalMocks })
    expect(wrapper.vm.currentSlide).toBe(0)

    vi.advanceTimersByTime(6000)
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.currentSlide).toBe(1)
  })
})
