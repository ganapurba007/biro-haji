import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SectionTitle from '@/components/ui/SectionTitle.vue'

describe('SectionTitle Component', () => {
  it('renders badge, title and description', () => {
    const wrapper = mount(SectionTitle, {
      props: {
        badge: 'Layanan Kami',
        title: 'Konstruksi Berkualitas',
        description: 'Kami memberikan hasil terbaik.'
      }
    })
    expect(wrapper.text()).toContain('Layanan Kami')
    expect(wrapper.text()).toContain('Konstruksi Berkualitas')
    expect(wrapper.text()).toContain('Kami memberikan hasil terbaik.')
  })

  it('applies dark mode styling when prop is set', () => {
    const wrapper = mount(SectionTitle, {
      props: {
        title: 'Judul Dark',
        dark: true
      }
    })
    expect(wrapper.find('h2').classes()).toContain('text-white')
  })
})
