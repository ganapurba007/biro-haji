import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TopBar from '@/components/layout/TopBar.vue'
import companyData from '@/data/company.json'

describe('TopBar Component (FR-1.1)', () => {
  it('renders contact info from company data', () => {
    const wrapper = mount(TopBar)
    expect(wrapper.text()).toContain(companyData.contact.phone)
    expect(wrapper.text()).toContain(companyData.contact.email)
    expect(wrapper.text()).toContain(companyData.workingHours)
  })

  it('contains proper phone and mail links', () => {
    const wrapper = mount(TopBar)
    const phoneLink = wrapper.find('a[href^="tel:"]')
    const mailLink = wrapper.find('a[href^="mailto:"]')
    
    expect(phoneLink.exists()).toBe(true)
    expect(mailLink.exists()).toBe(true)
  })
})
