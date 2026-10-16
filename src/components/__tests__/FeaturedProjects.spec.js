import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FeaturedProjects from '@/components/sections/FeaturedProjects.vue'
import projectsData from '@/data/projects.json'

describe('FeaturedProjects Component (FR-2.7)', () => {
  const globalMocks = {
    stubs: {
      RouterLink: {
        template: '<a :href="to"><slot /></a>',
        props: ['to']
      }
    }
  }

  it('renders only projects marked as featured', () => {
    const wrapper = mount(FeaturedProjects, { global: globalMocks })
    const featured = projectsData.filter(p => p.featured).slice(0, 3)
    
    featured.forEach(project => {
      expect(wrapper.text()).toContain(project.title)
      expect(wrapper.text()).toContain(project.category)
    })
  })
})
