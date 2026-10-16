import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseButton from '@/components/ui/BaseButton.vue'

describe('BaseButton Component', () => {
  it('renders slot content and defaults to primary button', () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: 'Klik Saya'
      }
    })
    expect(wrapper.text()).toBe('Klik Saya')
    expect(wrapper.classes()).toContain('bg-amber-500')
  })

  it('renders dark and outline variants correctly', () => {
    const darkWrapper = mount(BaseButton, {
      props: { variant: 'dark' },
      slots: { default: 'Dark Button' }
    })
    expect(darkWrapper.classes()).toContain('bg-slate-900')

    const outlineWrapper = mount(BaseButton, {
      props: { variant: 'outline' },
      slots: { default: 'Outline Button' }
    })
    expect(outlineWrapper.classes()).toContain('border-2')
  })

  it('shows loading spinner and disables button when loading', () => {
    const wrapper = mount(BaseButton, {
      props: { loading: true },
      slots: { default: 'Loading...' }
    })
    expect(wrapper.attributes('disabled')).toBeDefined()
    expect(wrapper.find('.animate-spin').exists()).toBe(true)
  })
})
