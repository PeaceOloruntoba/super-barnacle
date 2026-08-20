import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone } from 'react-icons/fi'
import { toast } from 'sonner'
import { sendContact } from '../lib/api'
import { fadeUp, slideInLeft, slideInRight, staggerContainer } from '../lib/motion'

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in your name, email and message.')
      return
    }
    try {
      setLoading(true)
      await sendContact({ ...form })
      toast.success('Thanks! Your message has been sent.')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to send. Please try again later.'
      toast.error(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.6 }}
          variants={fadeUp}
          className="font-display text-4xl sm:text-5xl"
          style={{ color: 'var(--color-brand-brown)' }}
        >
          Let's work together
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.6 }}
          variants={fadeUp}
          className="mt-3 max-w-prose text-neutral-600"
        >
          Tell me about your project. I usually reply within 24 hours.
        </motion.p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.15 }}
            variants={slideInLeft}
            className="rounded-2xl p-6 shadow-sm ring-1 ring-neutral-200 md:col-span-2"
          >
            <motion.form
              onSubmit={onSubmit}
              variants={staggerContainer(0.08)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.15 }}
              className="grid gap-4 sm:grid-cols-2"
            >
              <motion.div variants={fadeUp}>
                <label className="mb-1 block text-sm text-neutral-700">Name</label>
                <input
                  className="w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2"
                  style={{ '--tw-ring-color': 'var(--color-brand-sage-300)' } as React.CSSProperties}
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </motion.div>
              <motion.div variants={fadeUp}>
                <label className="mb-1 block text-sm text-neutral-700">Email</label>
                <input
                  type="email"
                  className="w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2"
                  style={{ '--tw-ring-color': 'var(--color-brand-sage-300)' } as React.CSSProperties}
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </motion.div>
              <motion.div variants={fadeUp} className="sm:col-span-2">
                <label className="mb-1 block text-sm text-neutral-700">Subject</label>
                <input
                  className="w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2"
                  style={{ '--tw-ring-color': 'var(--color-brand-sage-300)' } as React.CSSProperties}
                  placeholder="Project subject"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                />
              </motion.div>
              <motion.div variants={fadeUp} className="sm:col-span-2">
                <label className="mb-1 block text-sm text-neutral-700">Message</label>
                <textarea
                  rows={5}
                  className="w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2"
                  style={{ '--tw-ring-color': 'var(--color-brand-sage-300)' } as React.CSSProperties}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </motion.div>
              <motion.div variants={fadeUp}>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  disabled={loading}
                  className="inline-flex items-center gap-2 rounded-md px-5 py-2.5 font-medium text-white shadow-sm transition disabled:opacity-50"
                  style={{ backgroundColor: 'var(--color-brand-brown)' }}
                >
                  {loading ? 'Sending...' : 'Send message'}
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            variants={slideInRight}
            className="space-y-4 rounded-2xl p-6 shadow-sm ring-1 ring-neutral-200"
            style={{ backgroundColor: 'var(--color-brand-sage-50)' }}
          >
            <div className="flex items-start gap-3">
              <FiMail className="mt-1" />
              <div>
                <div className="text-sm text-neutral-600">Email</div>
                <a href="mailto:hello@example.com" className="hover:underline">
                  hello@example.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FiPhone className="mt-1" />
              <div>
                <div className="text-sm text-neutral-600">Phone</div>
                <a href="tel:+1234567890" className="hover:underline">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <p className="mt-14 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} Joy Aderinwale — Social Media • Copywriting
        </p>
      </div>
    </section>
  )
}
