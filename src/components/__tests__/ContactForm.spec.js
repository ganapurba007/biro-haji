import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import ContactForm from '@/components/forms/ContactForm.vue'

describe('ContactForm Component (FR-6.1 to FR-6.5)', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('displays validation error when field is blurred with invalid input (FR-6.2)', async () => {
    const wrapper = mount(ContactForm)
    const nameInput = wrapper.find('#fullName')

    await nameInput.setValue('Ab')
    await nameInput.trigger('blur')

    expect(wrapper.text()).toContain('Nama wajib diisi (minimal 3 karakter)')
    expect(nameInput.attributes('aria-invalid')).toBe('true')
  })

  it('displays all required errors on submit with empty form', async () => {
    const wrapper = mount(ContactForm)
    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.text()).toContain('Nama wajib diisi (minimal 3 karakter)')
    expect(wrapper.text()).toContain('Format email tidak valid')
    expect(wrapper.text()).toContain('Nomor telepon tidak valid')
    expect(wrapper.text()).toContain('Pilih jenis layanan')
    expect(wrapper.text()).toContain('Pesan minimal 20 karakter')
    expect(wrapper.text()).toContain('Anda harus menyetujui sebelum mengirim')
  })

  it('submits successfully, triggers loading state and emits submit-success (FR-6.3)', async () => {
    const wrapper = mount(ContactForm)

    await wrapper.find('#fullName').setValue('Ir. Hendra Gunawan')
    await wrapper.find('#email').setValue('hendra@perusahaan.co.id')
    await wrapper.find('#phone').setValue('081234567890')
    await wrapper.find('#serviceType').setValue('Paket Umroh Reguler Bintang 5')
    await wrapper.find('#message').setValue('Rencana pembangunan gedung perkantoran 8 lantai di Jakarta.')
    await wrapper.find('#agreement').setValue(true)

    await wrapper.find('form').trigger('submit.prevent')

    // Expect loading state
    expect(wrapper.vm.isSubmitting).toBe(true)

    // Advance simulated network timer
    vi.advanceTimersByTime(1500)
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.isSubmitting).toBe(false)
    expect(wrapper.emitted('submit-success')).toBeTruthy()
  })

  it('emits submit-error when simulated error mode is toggled on (FR-6.3)', async () => {
    const wrapper = mount(ContactForm)

    // Toggle error simulation mode
    wrapper.vm.simulateError = true

    await wrapper.find('#fullName').setValue('Ir. Hendra Gunawan')
    await wrapper.find('#email').setValue('hendra@perusahaan.co.id')
    await wrapper.find('#phone').setValue('081234567890')
    await wrapper.find('#serviceType').setValue('Paket Umroh Reguler Bintang 5')
    await wrapper.find('#message').setValue('Rencana pembangunan gedung perkantoran 8 lantai di Jakarta.')
    await wrapper.find('#agreement').setValue(true)

    await wrapper.find('form').trigger('submit.prevent')

    vi.advanceTimersByTime(1500)
    await wrapper.vm.$nextTick()

    expect(wrapper.emitted('submit-error')).toBeTruthy()
  })
})
