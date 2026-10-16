import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AboutView from '@/views/AboutView.vue'
import companyData from '@/data/company.json'
import teamData from '@/data/team.json'

describe('AboutView Page (FR-3.1 to FR-3.4)', () => {
  const globalMocks = {
    stubs: {
      RouterLink: {
        template: '<a :href="to"><slot /></a>',
        props: ['to']
      }
    }
  }

  it('renders vision, mission, and company info (FR-3.1)', () => {
    const wrapper = mount(AboutView, { global: globalMocks })
    expect(wrapper.text()).toContain(companyData.vision)
    companyData.mission.forEach(m => {
      expect(wrapper.text()).toContain(m)
    })
  })

  it('renders corporate history timeline (FR-3.2)', () => {
    const wrapper = mount(AboutView, { global: globalMocks })
    companyData.history.forEach(h => {
      expect(wrapper.text()).toContain(String(h.year))
      expect(wrapper.text()).toContain(h.title)
    })
  })

  it('renders all key team members (FR-3.3)', () => {
    const wrapper = mount(AboutView, { global: globalMocks })
    teamData.forEach(member => {
      expect(wrapper.text()).toContain(member.name)
      expect(wrapper.text()).toContain(member.position)
    })
  })

  it('renders legalities and certifications (FR-3.4)', () => {
    const wrapper = mount(AboutView, { global: globalMocks })
    companyData.certifications.forEach(cert => {
      expect(wrapper.text()).toContain(cert.name)
      expect(wrapper.text()).toContain(cert.issuer)
    })
  })
})
