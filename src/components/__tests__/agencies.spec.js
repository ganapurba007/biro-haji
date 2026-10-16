import { describe, it, expect } from 'vitest'
import { getAgencyBySlug, getRegisteredAgencies, formatAgencyNameFromSlug } from '@/lib/agencies'
import agenciesData from '@/data/agencies.json'

describe('Agency Slug Resolver and Multi-client Support (PRD §8)', () => {
  it('resolves registered agency (default-biro) correctly', () => {
    const agency = getAgencyBySlug('default-biro')
    expect(agency.slug).toBe('default-biro')
    expect(agency.name).toBe(agenciesData.agencies['default-biro'].name)
    expect(agency.isCustom).toBe(false)
  })

  it('resolves surya-biro with custom branding colors and logos', () => {
    const agency = getAgencyBySlug('surya-biro')
    expect(agency.slug).toBe('surya-biro')
    expect(agency.name).toBe('Surya Biro Umroh & Haji')
    expect(agency.colors.brand).toBe(agenciesData.agencies['surya-biro'].colors.brand)
    expect(agency.isCustom).toBe(false)
  })

  it('synthesizes unregistered slug automatically for client mockup', () => {
    const agency = getAgencyBySlug('zahra-berkah-travel')
    expect(agency.slug).toBe('zahra-berkah-travel')
    expect(agency.name).toBe('Zahra Berkah Travel')
    expect(agency.shortName).toBe('ZAHRA')
    expect(agency.initials).toBe('ZB')
    expect(agency.isCustom).toBe(true)
    expect(agency.colors.brand).toBeDefined()
    expect(agency.colors.accent).toBeDefined()
  })

  it('formats kebab-case slug to Title Case nicely', () => {
    expect(formatAgencyNameFromSlug('bina-insani-umroh')).toBe('Bina Insani Umroh')
    expect(formatAgencyNameFromSlug('nurul-huda')).toBe('Nurul Huda')
  })

  it('returns all registered agencies list', () => {
    const list = getRegisteredAgencies()
    expect(list.length).toBe(Object.keys(agenciesData.agencies).length)
    expect(list.some(a => a.slug === 'surya-biro')).toBe(true)
  })
})
