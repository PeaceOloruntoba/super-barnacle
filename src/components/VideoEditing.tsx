import { motion } from 'framer-motion'
import { fadeUp, scaleIn, staggerContainer } from '../lib/motion'

const clips = [
  { label: 'Reel+Edit+1' },
  { label: 'Reel+Edit+2' },
  { label: 'Reel+Edit+3' },
]

export default function VideoEditing() {
  return (
    <section id="video-editing" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.6 }}
          variants={fadeUp}
          className="font-display text-4xl sm:text-5xl"
          style={{ color: 'var(--color-brand-brown)' }}
        >
          Video editing
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.15 }}
          variants={staggerContainer(0.15, 0.15)}
          className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3"
        >
          {clips.map((clip, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              whileHover={{ y: -10, scale: 1.03 }}
              className="mx-auto w-full max-w-xs overflow-hidden rounded-3xl border-[6px] border-neutral-900 bg-neutral-900 shadow-xl"
            >
              <img
                src={`https://placehold.co/480x760/6b3a24/eef7e9?text=${clip.label}`}
                alt={`Video edit sample ${i + 1}`}
                className="aspect-[3/4] w-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
