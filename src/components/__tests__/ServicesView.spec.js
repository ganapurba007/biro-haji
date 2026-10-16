import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ServicesView from '@/views/ServicesView.vue'
import servicesData from '@/data/services.json'

describe('ServicesView Page (FR-4.1, FR-4.2)', () => {
  const globalMocks = {
    stubs: {
      RouterLink: {
        template: '<a :href="to"><slot /></a>',
        props: ['to']
      }
    }
  }

  it('renders all 5 construction services with title and scopes (FR-4.1)', () => {
    const wrapper = mount(ServicesView, { global: globalMocks })
    servicesData.forEach(service => {
      expect(wrapper.text()).toContain(service.title)
      service.scope.forEach(scopeItem => {
        expect(wrapper.text()).toContain(scopeItem)
      })
    })
  })

  it('renders work process methodology section (FR-4.2)', () => {
    const wrapper = mount(ServicesView, { global: globalMocks })
    expect(wrapper.text()).toContain('4 Langkah Mudah Menuju Baitullah Bersama Kami')
  })
})
