import { motion } from 'framer-motion'
import { FaInstagram, FaLinkedin, FaTiktok, FaFacebook } from 'react-icons/fa6'
import sunglasses from '../assets/props/sunglasses.png'
import camera1 from '../assets/props/camera-1.png'
import camera2 from '../assets/props/camera-2.png'
import folder from '../assets/props/folder.png'
import icedDrink from '../assets/props/iced-drink.png'
import blushBrush from '../assets/props/blush-brush.png'
import { fadeDown, fadeIn, floatRotate, floatY, staggerContainer } from '../lib/motion'

const socials = [
  { icon: FaInstagram, href: 'https://instagram.com/your-handle', label: 'Instagram' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/your-profile', label: 'LinkedIn' },
  { icon: FaTiktok, href: 'https://tiktok.com/@your-handle', label: 'TikTok' },
  { icon: FaFacebook, href: 'https://facebook.com/your-page', label: 'Facebook' },
]

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-10 pb-24 sm:pb-32">
      {/* social icons, top right */}
      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.6 }}
        className="relative z-10 flex justify-end gap-3 px-6 sm:px-12"
      >
        {socials.map(({ icon: Icon, href, label }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            variants={fadeDown}
            whileHover={{ scale: 1.15, rotate: -6 }}
            whileTap={{ scale: 0.92 }}
            className="grid h-10 w-10 place-items-center rounded-full bg-brand-ink text-white shadow-sm sm:h-11 sm:w-11"
            style={{ backgroundColor: 'var(--color-brand-ink)' }}
          >
            <Icon size={18} />
          </motion.a>
        ))}
      </motion.div>

      {/* decorative floating props */}
      <motion.img
        src={sunglasses}
        alt=""
        aria-hidden
        animate={floatRotate}
        className="pointer-events-none absolute left-[6%] top-[14%] w-16 -rotate-12 opacity-90 sm:w-24"
      />
      <motion.img
        src={folder}
        alt=""
        aria-hidden
        animate={floatY}
        className="pointer-events-none absolute left-[42%] top-[2%] w-16 rotate-6 opacity-90 sm:w-24"
      />
      <motion.img
        src={camera1}
        alt=""
        aria-hidden
        animate={floatRotate}
        className="pointer-events-none absolute right-[6%] top-[10%] w-20 rotate-6 opacity-90 sm:w-28"
      />
      <motion.img
        src={camera2}
        alt=""
        aria-hidden
        animate={floatY}
        className="pointer-events-none absolute left-[10%] top-[46%] w-20 -rotate-6 opacity-90 sm:w-28"
      />
      <motion.img
        src={blushBrush}
        alt=""
        aria-hidden
        animate={floatRotate}
        className="pointer-events-none absolute left-[46%] top-[52%] w-10 rotate-[20deg] opacity-90 sm:w-14"
      />
      <motion.img
        src={icedDrink}
        alt=""
        aria-hidden
        animate={floatY}
        className="pointer-events-none absolute right-[8%] top-[44%] w-16 opacity-90 sm:w-24"
      />

      {/* headline */}
      <div className="relative z-10 mx-auto mt-24 max-w-4xl px-6 text-center sm:mt-32">
        <motion.h1
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          variants={fadeIn}
          className="font-display text-6xl font-semibold tracking-tight sm:text-8xl"
          style={{ color: 'var(--color-brand-brown)' }}
        >
          MARKETING
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-display -mt-2 text-5xl italic sm:text-7xl"
          style={{ color: 'var(--color-brand-brown)' }}
        >
          Portfolio
        </motion.p>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.8 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="relative z-10 mt-6 text-right font-display text-lg italic sm:mt-10 sm:pr-16 sm:text-xl"
        style={{ color: 'var(--color-brand-brown-light)' }}
      >
        by <span className="font-medium not-italic">Joy Aderinwale</span>
      </motion.p>
    </section>
  )
}
