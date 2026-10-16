/**
 * theme.js — Pure functions for color parsing, dynamic palette shade generation,
 * and CSS variable mapping for multi-tenant agency themes.
 */

/**
 * Parse hex color string to RGB object.
 *
 * @param {string} hex - e.g. "#064e3b", "#fff", "d97706"
 * @returns {{ r: number, g: number, b: number }}
 */
export function hexToRgb(hex) {
  if (!hex || typeof hex !== 'string') {
    return { r: 6, g: 78, b: 59 } // Default Emerald
  }

  let clean = hex.trim().replace(/^#/, '')
  if (clean.length === 3) {
    clean = clean.split('').map((c) => c + c).join('')
  }

  if (clean.length !== 6 || !/^[0-9a-fA-F]{6}$/.test(clean)) {
    return { r: 6, g: 78, b: 59 }
  }

  const num = parseInt(clean, 16)
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  }
}

/**
 * Convert RGB values to hex string.
 *
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @returns {string}
 */
export function rgbToHex(r, g, b) {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
}

/**
 * Linear blend between two RGB colors.
 *
 * @param {{ r: number, g: number, b: number }} c1
 * @param {{ r: number, g: number, b: number }} c2
 * @param {number} weight - 0 to 1 (0 = all c1, 1 = all c2)
 * @returns {{ r: number, g: number, b: number }}
 */
export function mixRgb(c1, c2, weight) {
  const w = Math.max(0, Math.min(1, weight))
  return {
    r: Math.round(c1.r * (1 - w) + c2.r * w),
    g: Math.round(c1.g * (1 - w) + c2.g * w),
    b: Math.round(c1.b * (1 - w) + c2.b * w),
  }
}

/**
 * Generate 50-950 color shades from a single base color.
 *
 * @param {string} baseHex
 * @returns {Record<string, { r: number, g: number, b: number }>}
 */
export function generateColorShades(baseHex) {
  const base = hexToRgb(baseHex)
  const white = { r: 255, g: 255, b: 255 }
  const black = { r: 15, g: 23, b: 42 } // slate-900 tint for visual depth

  return {
    50: mixRgb(white, base, 0.08),
    100: mixRgb(white, base, 0.16),
    200: mixRgb(white, base, 0.30),
    300: mixRgb(white, base, 0.48),
    400: mixRgb(white, base, 0.72),
    500: base,
    600: mixRgb(base, black, 0.15),
    700: mixRgb(base, black, 0.30),
    800: mixRgb(base, black, 0.45),
    900: mixRgb(base, black, 0.60),
    950: mixRgb(base, black, 0.75),
  }
}

/**
 * Convert color shades to CSS variable dictionary with hex/space-separated values
 * suitable for CSS and Tailwind variables.
 *
 * @param {Record<string, { r: number, g: number, b: number }>} shades
 * @param {string} prefix - e.g. "brand" or "accent"
 * @returns {Record<string, string>}
 */
export function shadesToCssVariables(shades, prefix = 'brand') {
  const vars = {}
  for (const [key, rgb] of Object.entries(shades)) {
    const hex = rgbToHex(rgb.r, rgb.g, rgb.b)
    vars[`--color-${prefix}-${key}`] = hex
    vars[`--hex-${prefix}-${key}`] = hex
    vars[`--app-${prefix}-${key}`] = hex
    vars[`--rgb-${prefix}-${key}`] = `${rgb.r} ${rgb.g} ${rgb.b}`
  }
  return vars
}

/**
 * Apply CSS variables to a target DOM element (document.documentElement).
 *
 * @param {Record<string, string>} cssVars
 * @param {HTMLElement|null} element
 */
export function applyCssVariablesToElement(cssVars, element = null) {
  const target = element || (typeof document !== 'undefined' ? document.documentElement : null)
  if (!target || !target.style || typeof target.style.setProperty !== 'function') {
    return
  }

  for (const [property, value] of Object.entries(cssVars)) {
    target.style.setProperty(property, value)
  }
}
