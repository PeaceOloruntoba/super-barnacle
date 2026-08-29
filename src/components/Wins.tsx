import { motion, type Variants } from 'framer-motion'

import analytics1 from '../assets/works/analytics/analytics-1.png'
import analytics2 from '../assets/works/analytics/analytics-2.png'
import analytics3 from '../assets/works/analytics/analytics-3.png'
import analytics4 from '../assets/works/analytics/analytics-4.png'

// Dynamic motion variants for fluid mobile + desktop transitions
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 18,
    },
  },
}

const titleVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function Wins() {
  return (
    <section
      id="wins"
      className="relative overflow-hidden py-10 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Main 3-Column Desktop Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.15 }}
          variants={containerVariants}
          className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8 items-start"
        >
          {/* Column 1: Title + Analytics 1 */}
          <div className="flex flex-col gap-6">
            <motion.h2
              variants={titleVariants}
              className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
              style={{ color: 'var(--color-brand-brown, #70361c)' }}
            >
              Real results, <br className="hidden sm:inline" />
              from my clients
            </motion.h2>

            <motion.div
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-2xl bg-white p-2.5 shadow-md transition-shadow duration-300 hover:shadow-2xl border border-gray-100"
            >
              <img
                src={analytics1}
                alt="Main Analytics Overview"
                className="w-full h-[50vh] rounded-xl object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* Columns 2 & 3 Merged (col-span-2) containing a 3-column sub-grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:col-span-2 lg:gap-6 lg:pt-14">
            {/* Sub-Col 1: Analytics 3 */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.015, rotate: -0.5 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-2xl bg-[#0e0e0e] p-2.5 shadow-md transition-shadow duration-300 hover:shadow-2xl ring-1 ring-white/10"
            >
              <img
                src={analytics3}
                alt="Dark Analytics Overview"
                className="w-full h-auto rounded-xl object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                loading="lazy"
              />
            </motion.div>

            {/* Sub-Col 2: Analytics 2 */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-2xl bg-white p-2.5 shadow-md transition-shadow duration-300 hover:shadow-2xl border border-gray-100"
            >
              <img
                src={analytics2}
                alt="Key Metrics Summary"
                className="w-full h-auto rounded-xl object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                loading="lazy"
              />
            </motion.div>

            {/* Sub-Col 3: Analytics 4 */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.015, rotate: 0.5 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-2xl bg-white p-2.5 shadow-md transition-shadow duration-300 hover:shadow-2xl border border-gray-100 sm:col-span-2 lg:col-span-1"
            >
              <img
                src={analytics4}
                alt="Views & Followers Growth"
                className="w-full h-auto rounded-xl object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                loading="lazy"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
