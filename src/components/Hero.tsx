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
    <section id="home" className="relative flex min-h-screen flex-col justify-between overflow-hidden py-6">
      {/* Social Icons (Pinned to top) */}
      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.6 }}
        className="relative z-20 flex justify-end gap-3 px-6 sm:px-12"
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
            className="grid h-10 w-10 place-items-center rounded-full text-white shadow-sm sm:h-11 sm:w-11"
            style={{ backgroundColor: 'var(--color-brand-ink)' }}
          >
            <Icon size={18} />
          </motion.a>
        ))}
      </motion.div>

      {/* Main Container (Centered content & floating props) */}
      <div className="relative z-10 my-auto flex w-full flex-col items-center justify-center px-4 py-12">
        {/* Decorative Floating Props */}
        <motion.img
          src={sunglasses}
          alt=""
          aria-hidden
          animate={floatRotate}
          className="pointer-events-none absolute left-[4%] top-[-10%] w-14 -rotate-12 opacity-90 sm:left-[10%] sm:top-[-20%] sm:w-24"
        />
        <motion.img
          src={folder}
          alt=""
          aria-hidden
          animate={floatY}
          className="pointer-events-none absolute left-[35%] top-[-25%] w-14 rotate-6 opacity-90 sm:left-[42%] sm:top-[-35%] sm:w-24"
        />
        <motion.img
          src={camera1}
          alt=""
          aria-hidden
          animate={floatRotate}
          className="pointer-events-none absolute right-[4%] top-[-15%] w-16 rotate-6 opacity-90 sm:right-[10%] sm:top-[-25%] sm:w-28"
        />
        <motion.img
          src={camera2}
          alt=""
          aria-hidden
          animate={floatY}
          className="pointer-events-none absolute bottom-[-15%] left-[6%] w-16 -rotate-6 opacity-90 sm:bottom-[-25%] sm:left-[12%] sm:w-28"
        />
        <motion.img
          src={blushBrush}
          alt=""
          aria-hidden
          animate={floatRotate}
          className="pointer-events-none absolute bottom-[-20%] left-[45%] w-9 rotate-[20deg] opacity-90 sm:bottom-[ -30%] sm:left-[48%] sm:w-14"
        />
        <motion.img
          src={icedDrink}
          alt=""
          aria-hidden
          animate={floatY}
          className="pointer-events-none absolute bottom-[-15%] right-[6%] w-14 opacity-90 sm:bottom-[-25%] sm:right-[12%] sm:w-24"
        />

        {/* Headline */}
        <div className="text-center">
          <motion.h1
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            variants={fadeIn}
            className="font-display text-5xl font-semibold tracking-tight xs:text-6xl sm:text-8xl md:text-9xl"
            style={{ color: 'var(--color-brand-brown)' }}
          >
            MARKETING
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-display -mt-2 text-4xl italic xs:text-5xl sm:-mt-4 sm:text-7xl md:text-8xl"
            style={{ color: 'var(--color-brand-brown)' }}
          >
            Portfolio
          </motion.p>
        </div>
      </div>

      {/* Author Tagline (Pinned to bottom) */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.8 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="relative z-20 px-6 text-center font-display text-lg italic sm:px-16 sm:text-right sm:text-xl"
        style={{ color: 'var(--color-brand-brown-light)' }}
      >
        by <span className="font-medium not-italic">Joy Aderinwale</span>
      </motion.p>
    </section>
  )
}
