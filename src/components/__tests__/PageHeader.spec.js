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

  it('renders title, subtitle and breadcrumbs correctly', () => {
    const wrapper = mount(PageHeader, {
      props: {
        title: 'Tentang Kami',
        subtitle: 'Profil perusahaan kontraktor.',
        breadcrumbs: [{ name: 'Tentang Kami' }]
      },
      global: globalMocks
    })

    expect(wrapper.text()).toContain('Tentang Kami')
    expect(wrapper.text()).toContain('Profil perusahaan kontraktor.')
    expect(wrapper.text()).toContain('Beranda')
  })
})
