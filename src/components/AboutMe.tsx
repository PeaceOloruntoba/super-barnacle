import { motion } from 'framer-motion'
import { fadeUp, scaleIn, slideInLeft, staggerContainer } from '../lib/motion'

const paragraphs = [
  `Hi, I'm Joy—a social media manager and content strategist who fell in love with the online creative industry in college and never looked back.`,
  `Clean aesthetics, bold visuals, aesthetic shots—I love all of it.`,
  `But what I love most is what happens behind the curtain: the strategy, the timing, the tiny decisions that turn a good campaign into one people remember.`,
  `That curiosity is what's taken me from studying successful campaigns to building them by managing content and strategy across Instagram, TikTok, and LinkedIn for e-commerce businesses and personal brands.`,
]

export default function AboutMe() {
  return (
    <section id="about" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.6 }}
            variants={slideInLeft}
            className="font-display text-4xl sm:text-5xl"
            style={{ color: 'var(--color-brand-sage-300)' }}
          >
            About Me
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer(0.15, 0.1)}
            className="mt-6 space-y-4"
          >
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="leading-relaxed text-neutral-700"
              >
                {p}
              </motion.p>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          variants={scaleIn}
          className="mx-auto w-full max-w-xs"
        >
          <div className="relative rounded-[2.5rem] border-[6px] border-neutral-900 bg-neutral-900 p-1.5 shadow-xl">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="https://placehold.co/480x680/f2c265/6b3a24?text=About+Me+Photo"
                alt="Joy Aderinwale"
                className="aspect-[9/13] w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
