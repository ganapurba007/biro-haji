import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ContactView from '@/views/ContactView.vue'
import companyData from '@/data/company.json'

describe('ContactView Page (FR-6.6)', () => {
  const globalMocks = {
    stubs: {
      RouterLink: {
        template: '<a :href="to"><slot /></a>',
        props: ['to']
      }
    }
  }

  it('renders all contact details, phone, address, and maps container', () => {
    const wrapper = mount(ContactView, { global: globalMocks })

    expect(wrapper.text()).toContain(companyData.contact.address)
    expect(wrapper.text()).toContain(companyData.contact.phone)
    expect(wrapper.text()).toContain(companyData.contact.email)
    expect(wrapper.text()).toContain(companyData.workingHours)
    expect(wrapper.text()).toContain(companyData.contact.tollFree)
    expect(wrapper.find('iframe').exists()).toBe(true)
  })
})
