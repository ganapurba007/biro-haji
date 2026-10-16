import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Footer from '@/components/layout/Footer.vue'
import companyData from '@/data/company.json'

describe('Footer Component (FR-1.4)', () => {
  const globalMocks = {
    stubs: {
      RouterLink: {
        template: '<a :href="to"><slot /></a>',
        props: ['to']
      }
    }
  }

  it('renders company about summary, contact information and copyright', () => {
    const wrapper = mount(Footer, { global: globalMocks })
    expect(wrapper.text()).toContain(companyData.about)
    expect(wrapper.text()).toContain(companyData.contact.address)
    expect(wrapper.text()).toContain(companyData.contact.phone)
    expect(wrapper.text()).toContain(companyData.contact.email)
    expect(wrapper.text()).toContain('ADHIRAJASA')
    expect(wrapper.text()).toContain('All rights reserved')
  })

  it('renders quick navigation links and social media links', () => {
    const wrapper = mount(Footer, { global: globalMocks })
    expect(wrapper.text()).toContain('Tautan Cepat')
    expect(wrapper.text()).toContain('Kantor & Kontak')
    expect(wrapper.findAll('a[target="_blank"]').length).toBe(companyData.social.length)
  })
})
