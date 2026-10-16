import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ProjectDetailView from '@/views/ProjectDetailView.vue'
import projectsData from '@/data/projects.json'

let mockSlug = projectsData[0].slug

vi.mock('vue-router', () => ({
  useRoute: () => ({
    params: {
      get slug() {
        return mockSlug
      }
    }
  }),
  RouterLink: {
    template: '<a :href="to"><slot /></a>',
    props: ['to']
  }
}))

describe('ProjectDetailView Page (FR-5.3, FR-5.4)', () => {
  it('renders project detail correctly for valid slug (FR-5.3)', () => {
    mockSlug = projectsData[0].slug
    const wrapper = mount(ProjectDetailView)

    expect(wrapper.text()).toContain(projectsData[0].title)
    expect(wrapper.text()).toContain(projectsData[0].client)
    expect(wrapper.text()).toContain(projectsData[0].location)
    expect(wrapper.text()).toContain(projectsData[0].duration)
  })

  it('renders 404 message for non-existent slug (FR-5.4)', () => {
    mockSlug = 'slug-tidak-valid-xyz'
    const wrapper = mount(ProjectDetailView)

    expect(wrapper.text()).toContain('Proyek Tidak Ditemukan')
    expect(wrapper.text()).toContain('slug-tidak-valid-xyz')
    expect(wrapper.text()).toContain('Kembali ke Portfolio Proyek')
  })
})
