import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PageHeader from '@/components/ui/PageHeader.vue'

describe('PageHeader Component', () => {
  const globalMocks = {
    stubs: {
      RouterLink: {
        template: '<a :href="to"><slot /></a>',
        props: ['to']
      }
    }
  }

  it('renders title and subtitle correctly without breadcrumbs', () => {
    const wrapper = mount(PageHeader, {
      props: {
        title: 'Tentang Kami',
        subtitle: 'Profil biro perjalanan haji & umroh terpercaya.'
      },
      global: globalMocks
    })

    expect(wrapper.text()).toContain('Tentang Kami')
    expect(wrapper.text()).toContain('Profil biro perjalanan haji & umroh terpercaya.')
    expect(wrapper.find('nav[aria-label="Breadcrumb"]').exists()).toBe(false)
  })
})
