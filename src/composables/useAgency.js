import { ref, computed } from 'vue'
import { getAgencyBySlug, getRegisteredAgencies } from '../lib/agencies'
import {
  generateColorShades,
  shadesToCssVariables,
  applyCssVariablesToElement
} from '../lib/theme'

// Shared reactive state across components
const currentSlug = ref('default-biro')

export function useAgency() {
  const agency = computed(() => getAgencyBySlug(currentSlug.value))
  const availableAgencies = computed(() => getRegisteredAgencies())
  const isDefaultAgency = computed(() => currentSlug.value === 'default-biro')

  /**
   * Set active agency by slug and dynamically inject CSS palette variables into the DOM.
   *
   * @param {string} slug
   */
  function setAgency(slug) {
    const resolved = getAgencyBySlug(slug)
    currentSlug.value = resolved.slug

    // Apply CSS Variables in browser
    if (typeof document !== 'undefined') {
      const brandShades = generateColorShades(resolved.colors.brand)
      const brandVars = shadesToCssVariables(brandShades, 'brand')

      const accentShades = generateColorShades(resolved.colors.accent)
      const accentVars = shadesToCssVariables(accentShades, 'accent')
      const amberVars = shadesToCssVariables(accentShades, 'amber') // Map amber to accent for seamless button & accent compatibility

      applyCssVariablesToElement({
        ...brandVars,
        ...accentVars,
        ...amberVars
      })

      // Update document title if present
      if (document.title && !document.title.includes(resolved.name)) {
        document.title = `${resolved.name} — ${resolved.tagline || 'Biro Umroh & Haji Khusus'}`
      }
    }
  }

  /**
   * Helper to generate context-aware navigation links.
   * For non-default agencies, prefixes the path with /:slug (e.g. /surya-biro/proyek).
   *
   * @param {string} to
   * @returns {string}
   */
  function agencyLink(to) {
    if (!to || typeof to !== 'string') return '/'
    if (currentSlug.value === 'default-biro') return to

    // Preserve query parameters if present
    const [pathPart, queryPart] = to.split('?')
    const cleanPath = pathPart.startsWith('/') ? pathPart : `/${pathPart}`
    const baseWithSlug = cleanPath === '/' ? `/${currentSlug.value}` : `/${currentSlug.value}${cleanPath}`

    return queryPart ? `${baseWithSlug}?${queryPart}` : baseWithSlug
  }

  return {
    currentSlug,
    agency,
    activeAgency: agency,
    availableAgencies,
    isDefaultAgency,
    setAgency,
    agencyLink
  }
}
