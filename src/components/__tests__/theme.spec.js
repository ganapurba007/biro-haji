import { describe, it, expect } from 'vitest'
import {
  hexToRgb,
  rgbToHex,
  generateColorShades,
  shadesToCssVariables
} from '@/lib/theme'

describe('Theme and Dynamic Shade Generation (PRD §8)', () => {
  it('converts hex to RGB object accurately', () => {
    const rgb = hexToRgb('#064e3b')
    expect(rgb).toEqual({ r: 6, g: 78, b: 59 })
  })

  it('converts RGB object to 6-digit hex code', () => {
    const hex = rgbToHex(6, 78, 59)
    expect(hex.toLowerCase()).toBe('#064e3b')
  })

  it('generates 11 palette shade steps (50 to 950)', () => {
    const shades = generateColorShades('#064e3b')
    const keys = Object.keys(shades)
    expect(keys).toEqual(['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'])
    expect(shades['500']).toEqual({ r: 6, g: 78, b: 59 })
  })

  it('generates CSS variables object with specified prefix', () => {
    const shades = generateColorShades('#064e3b')
    const cssVars = shadesToCssVariables(shades, 'brand')

    expect(cssVars['--color-brand-500']).toBe('6 78 59')
    expect(cssVars['--hex-brand-500']).toBe('#064e3b')
    expect(cssVars['--color-brand-50']).toBeDefined()
    expect(cssVars['--color-brand-950']).toBeDefined()
  })
})
