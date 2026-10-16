import { describe, it, expect, beforeEach } from 'vitest'
import { useAgency } from '@/composables/useAgency'

describe('useAgency Composable (PRD §8)', () => {
  beforeEach(() => {
    const { setAgency } = useAgency()
    setAgency('default-biro')
  })

  it('defaults to default-biro agency', () => {
    const { currentSlug, agency, isDefaultAgency } = useAgency()
    expect(currentSlug.value).toBe('default-biro')
    expect(isDefaultAgency.value).toBe(true)
    expect(agency.value.name).toContain('Demo Biro Umroh dan Haji')
  })

  it('keeps link intact for default agency', () => {
    const { agencyLink } = useAgency()
    expect(agencyLink('/proyek')).toBe('/proyek')
    expect(agencyLink('/')).toBe('/')
    expect(agencyLink('/kontak?paket=haji')).toBe('/kontak?paket=haji')
  })

  it('prefixes link with active agency slug when switched', () => {
    const { setAgency, agencyLink, currentSlug, isDefaultAgency, agency } = useAgency()
    setAgency('surya-biro')

    expect(currentSlug.value).toBe('surya-biro')
    expect(isDefaultAgency.value).toBe(false)
    expect(agency.value.name).toBe('Surya Biro Umroh & Haji')

    expect(agencyLink('/proyek')).toBe('/surya-biro/proyek')
    expect(agencyLink('/')).toBe('/surya-biro')
    expect(agencyLink('/kontak?paket=haji')).toBe('/surya-biro/kontak?paket=haji')
  })
})
