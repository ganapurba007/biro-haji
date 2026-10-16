import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ScoreCards from '@/components/sections/ScoreCards.vue'
import homeData from '@/data/home.json'

describe('ScoreCards Component (FR-2.2)', () => {
  it('renders all 3 score cards from data with titles and scores', () => {
    const wrapper = mount(ScoreCards)
    homeData.scoreCards.forEach(card => {
      expect(wrapper.text()).toContain(card.title)
      expect(wrapper.text()).toContain(`${card.score}%`)
      expect(wrapper.text()).toContain(card.number)
    })
  })
})
