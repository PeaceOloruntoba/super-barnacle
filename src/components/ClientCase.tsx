import { motion } from 'framer-motion'
import { fadeUp, scaleIn, slideInLeft, slideInRight, staggerContainer } from '../lib/motion'

type ClientCaseProps = {
  label: string
  name: string
  industry: string
  goals: string
  approach: string
  screenshotLabel: string
  reverse?: boolean
}

export default function ClientCase({
  label,
  name,
  industry,
  goals,
  approach,
  screenshotLabel,
  reverse = false,
}: ClientCaseProps) {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.6 }}
        variants={fadeUp}
        className="font-display text-5xl sm:text-6xl"
        style={{ color: 'var(--color-brand-brown)' }}
      >
        {label}
      </motion.h2>

      <div
        className={`mt-8 grid grid-cols-1 items-center gap-8 md:grid-cols-5 ${
          reverse ? 'md:[&>*:first-child]:order-2' : ''
        }`}
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          variants={staggerContainer(0.12, 0.1)}
          className="rounded-3xl p-7 sm:p-9 md:col-span-3"
          style={{ backgroundColor: 'var(--color-brand-sage-100)' }}
        >
          <motion.div variants={fadeUp}>
            <h3 className="font-semibold uppercase tracking-wide text-neutral-900">
              Client Details
            </h3>
            <p className="mt-1 text-neutral-800">Name: {name}</p>
            <p className="text-neutral-800">Industry: {industry}</p>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-6">
            <h3 className="font-semibold uppercase tracking-wide text-neutral-900">
              Client Goals
            </h3>
            <p className="mt-1 text-neutral-800">{goals}</p>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-6">
            <h3 className="font-semibold uppercase tracking-wide text-neutral-900">Approach</h3>
            <p className="mt-1 text-neutral-800">{approach}</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={reverse ? slideInLeft : slideInRight}
          className="md:col-span-2"
        >
          <motion.div
            variants={scaleIn}
            whileHover={{ y: -8 }}
            className="mx-auto max-w-xs overflow-hidden rounded-[2rem] border-[6px] border-neutral-900 bg-neutral-900 shadow-xl"
          >
            <img
              src={`https://placehold.co/480x1000/e9e2d3/6b3a24?text=${screenshotLabel}`}
              alt={`${name} social profile screenshot`}
              className="aspect-[9/18] w-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
