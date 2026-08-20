import { motion } from 'framer-motion'
import { fadeUp, scaleIn, staggerContainer } from '../lib/motion'

const shots = [
  { seed: 1, label: 'Video+Analysis' },
  { seed: 2, label: '23.6K+Views' },
  { seed: 3, label: 'Key+Metrics' },
  { seed: 4, label: 'Video+Analysis' },
]

export default function Wins() {
  return (
    <section id="wins" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.6 }}
          variants={fadeUp}
          className="font-display text-center text-4xl sm:text-5xl"
          style={{ color: 'var(--color-brand-brown)' }}
        >
          Some of my wins
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.15 }}
          variants={staggerContainer(0.12, 0.1)}
          className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-6"
        >
          {shots.map((shot, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              whileHover={{ y: -10, rotate: i % 2 === 0 ? -2 : 2 }}
              className="overflow-hidden rounded-[1.75rem] border-[6px] border-neutral-900 bg-neutral-900 shadow-lg"
            >
              <img
                src={`https://placehold.co/360x760/1a1a1a/9ccf78?text=${shot.label}`}
                alt={`Analytics screenshot ${i + 1}`}
                className="aspect-[9/19] w-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
