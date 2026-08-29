import { motion } from 'framer-motion'
import googleDrive from '../assets/icons/tools/google-drive.png'
import canva from '../assets/icons/tools/canva.png'
import capcut from '../assets/icons/tools/capcut.png'
import notion from '../assets/icons/tools/notion.png'
import msOffice from '../assets/icons/tools/ms-office.png'
import slack from '../assets/icons/tools/slack.png'
import pinterest from '../assets/icons/tools/pinterest.png'
import claude from '../assets/icons/tools/claude.png'
import { fadeUp, slideInRight, staggerContainer } from '../lib/motion'

// Position coordinates tightened around the center "Tools" heading
const tools = [
  {
    src: claude,
    alt: 'Claude',
    className: 'top-0 left-1/2 -translate-x-1/2 -translate-y-2',
    duration: 6.5,
    radius: 6,
  },
  {
    src: googleDrive,
    alt: 'Google Drive',
    className: 'top-2 left-4 sm:top-4 sm:left-8',
    duration: 6,
    radius: 6,
  },
  {
    src: capcut,
    alt: 'CapCut',
    className: 'top-2 right-4 sm:top-4 sm:right-8',
    duration: 7.5,
    radius: 8,
  },
  {
    src: notion,
    alt: 'Notion',
    className: 'top-1/2 left-0 -translate-y-1/2 sm:left-2',
    duration: 5.5,
    radius: 5,
  },
  {
    src: msOffice,
    alt: 'Microsoft Office',
    className: 'top-1/2 right-0 -translate-y-1/2 sm:right-2',
    duration: 8,
    radius: 8,
  },
  {
    src: slack,
    alt: 'Slack',
    className: 'bottom-4 left-6 sm:bottom-6 sm:left-12',
    duration: 6.8,
    radius: 6,
  },
  {
    src: pinterest,
    alt: 'Pinterest',
    className: 'bottom-2 left-1/2 -translate-x-12 sm:bottom-4',
    duration: 7,
    radius: 7,
  },
  {
    src: canva,
    alt: 'Canva',
    className: 'bottom-4 right-8 sm:bottom-6 sm:right-14',
    duration: 6.2,
    radius: 6,
  },
]

const skills = [
  'Content strategy',
  'Calendar development',
  'Brand positioning and messaging',
  'Copywriting',
  'Video editing',
  'Basic graphic design',
  'Videography',
  'Content research',
  'Performance reporting',
]

export default function ToolsSkills() {
  return (
    <section id="tools" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 lg:gap-24">
        {/* Left Side: Floating Organic Tools Cloud */}
        <div className="relative mx-auto flex h-72 w-full max-w-md items-center justify-center sm:h-80">
          {/* Center Heading */}
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.6 }}
            variants={fadeUp}
            className="relative z-10 font-display text-5xl sm:text-6xl md:text-7xl"
            style={{ color: 'var(--color-brand-brown)' }}
          >
            Tools
          </motion.h2>

          {/* Surrounding Floating Icons */}
          {tools.map((tool) => {
            const r = tool.radius
            return (
              <motion.div
                key={tool.alt}
                animate={{
                  x: [0, r, 0, -r, 0],
                  y: [-r, 0, r, 0, -r],
                  rotate: [0, 8, -8, 4, 0],
                }}
                transition={{
                  duration: tool.duration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                whileHover={{ scale: 1.2, rotate: 10, zIndex: 30 }}
                className={`absolute z-10 flex items-center justify-center ${tool.className}`}
              >
                <img
                  src={tool.src}
                  alt={tool.alt}
                  title={tool.alt}
                  className="h-14 w-14 rounded-xl object-contain drop-shadow-md sm:h-18 sm:w-18"
                />
              </motion.div>
            )
          })}
        </div>

        {/* Right Side: Skills Card */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={slideInRight}
          className="relative mx-auto w-full max-w-sm"
        >
          {/* paperclip */}
          <div
            className="absolute -left-3 -top-3 z-10 h-10 w-6 rotate-[-18deg] rounded-full border-4"
            style={{ borderColor: 'var(--color-brand-brown)' }}
            aria-hidden
          />
          <div
            className="relative rounded-sm px-8 py-10 shadow-md"
            style={{
              backgroundColor: '#e9e2d3',
              clipPath:
                'polygon(0% 2%, 4% 0%, 9% 3%, 15% 0%, 21% 2%, 27% 0%, 33% 3%, 39% 1%, 45% 3%, 51% 0%, 57% 2%, 63% 0%, 69% 3%, 75% 1%, 81% 2%, 87% 0%, 93% 3%, 100% 1%, 100% 100%, 0% 100%)',
            }}
          >
            <h3
              className="font-display text-4xl sm:text-5xl"
              style={{ color: 'var(--color-brand-brown)' }}
            >
              Skills
            </h3>
            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              variants={staggerContainer(0.08, 0.2)}
              className="mt-6 space-y-2 text-neutral-700"
            >
              {skills.map((s) => (
                <motion.li key={s} variants={fadeUp} className="flex items-start gap-2">
                  <span aria-hidden style={{ color: 'var(--color-brand-brown)' }}>
                    —
                  </span>
                  {s}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
