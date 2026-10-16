/**
 * agencies.js — Pure functions for agency profile resolution and multi-tenant mockup fallback.
 */
import baseCompanyData from '../data/company.json'
import agenciesRegistry from '../data/agencies.json'

/**
 * Convert slug string to Title Case words (e.g. "surya-biro" -> "Surya Biro")
 *
 * @param {string} slug
 * @returns {string}
 */
export function slugToTitle(slug) {
  if (!slug || typeof slug !== 'string') return ''
  return slug
    .replace(/[_-]+/g, ' ')
    .trim()
    .split(/\s+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

/**
 * Get initials from title (e.g. "Surya Biro" -> "SB")
 *
 * @param {string} title
 * @returns {string}
 */
export function getInitials(title) {
  if (!title || typeof title !== 'string') return 'DB'
  const words = title.trim().split(/\s+/)
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
  return (words[0].charAt(0) + words[1].charAt(0)).toUpperCase()
}

/**
 * Get the list of all registered agency presets.
 *
 * @returns {Array<{ slug: string, name: string, shortName: string, subName: string, logo: string, brandColor: string, accentColor: string }>}
 */
export function getRegisteredAgencies() {
  const list = []
  const agencies = agenciesRegistry?.agencies || {}

  for (const [slug, item] of Object.entries(agencies)) {
    list.push({
      slug,
      name: item.name || slugToTitle(slug),
      shortName: item.shortName || slugToTitle(slug).split(' ')[0] || 'BIRO',
      subName: item.subName || 'Umroh & Haji',
      logo: item.logo || null,
      brandColor: item.colors?.brand || '#064e3b',
      accentColor: item.colors?.accent || '#d97706'
    })
  }

  return list
}

/**
 * Retrieve and construct a complete agency profile by slug.
 * If the slug is not found in agencies.json but is a non-empty string,
 * it dynamically synthesizes a realistic agency profile so ANY input slug works!
 *
 * @param {string} [slug]
 * @returns {object} Full merged agency object
 */
export function getAgencyBySlug(slug) {
  const defaultSlug = agenciesRegistry?.default || 'default-biro'
  const cleanSlug = slug && typeof slug === 'string' ? slug.trim().toLowerCase() : ''
  const targetSlug = cleanSlug || defaultSlug

  const registered = agenciesRegistry?.agencies?.[targetSlug]

  // Clone base company data
  const merged = JSON.parse(JSON.stringify(baseCompanyData))

  // 1. If found in registry
  if (registered) {
    merged.slug = targetSlug
    if (registered.name) merged.name = registered.name
    merged.shortName = registered.shortName || slugToTitle(targetSlug).split(' ')[0]
    merged.subName = registered.subName || 'Biro Umroh & Haji'
    if (registered.tagline) merged.tagline = registered.tagline
    if (registered.about) merged.about = registered.about
    if (registered.vision) merged.vision = registered.vision
    merged.logo = registered.logo || null
    merged.initials = getInitials(merged.name)
    merged.colors = {
      brand: registered.colors?.brand || '#064e3b',
      accent: registered.colors?.accent || '#d97706'
    }
    if (registered.contact) {
      merged.contact = {
        ...merged.contact,
        ...registered.contact
      }
    }
    merged.isCustom = false
    return merged
  }

  // 2. If it's default slug
  if (!cleanSlug || targetSlug === defaultSlug) {
    return {
      ...merged,
      slug: defaultSlug,
      name: merged.name || 'Demo Biro Umroh dan Haji',
      shortName: 'DEMO',
      subName: 'Biro Umroh & Haji',
      logo: null,
      initials: 'DB',
      isCustom: false,
      colors: {
        brand: '#064e3b',
        accent: '#d97706'
      }
    }
  }

  // 3. Dynamic synthesis for arbitrary client mockup slug (e.g. "surya-biro")
  const title = slugToTitle(cleanSlug)
  const words = title.split(' ')
  const shortName = words[0].toUpperCase()
  const subName = words.slice(1).join(' ') || 'Haramain Travel'

  return {
    ...merged,
    slug: cleanSlug,
    name: title.toLowerCase().includes('biro') || title.toLowerCase().includes('travel') || title.toLowerCase().includes('tour') ? title : `${title} Tour & Travel`,
    shortName,
    subName,
    initials: getInitials(title),
    isCustom: true,
    tagline: `Penyelenggara Ibadah Haji Khusus & Umroh Amanah — ${title}`,
    about: `${title} adalah biro perjalanan ibadah umroh dan haji khusus resmi terpercaya yang mengutamakan kenyamanan jamaah, kepastian 5 Pasti Umroh, dan bimbingan ibadah sesuai sunnah.`,
    logo: null, // Will display stylized badge monogram
    colors: {
      brand: '#064e3b', // Default elegant emerald
      accent: '#d97706' // Default golden amber
    }
  }
}

export const formatAgencyNameFromSlug = slugToTitle
