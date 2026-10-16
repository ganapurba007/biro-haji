import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProjectsView from '@/views/ProjectsView.vue'
import projectsData from '@/data/projects.json'

describe('ProjectsView Page (FR-5.1, FR-5.2)', () => {
  const globalMocks = {
    stubs: {
      RouterLink: {
        template: '<a :href="to"><slot /></a>',
        props: ['to']
      }
    }
  }

  it('renders all projects initially in Semua filter', () => {
    const wrapper = mount(ProjectsView, { global: globalMocks })
    expect(wrapper.text()).toContain(`Menampilkan ${projectsData.length} dari ${projectsData.length}`)
  })

  it('filters projects when category button is clicked', async () => {
    const wrapper = mount(ProjectsView, { global: globalMocks })
    const umrohBtn = wrapper.findAll('button[role="tab"]').find(b => b.text().includes('Umroh Reguler'))
    
    expect(umrohBtn).toBeDefined()
    await umrohBtn.trigger('click')

    const umrohProjects = projectsData.filter(p => p.category === 'Umroh Reguler')
    expect(wrapper.text()).toContain(`Menampilkan ${umrohProjects.length} dari ${projectsData.length}`)
  })
})
