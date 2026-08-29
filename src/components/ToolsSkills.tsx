import { motion } from 'framer-motion'
import googleDrive from '../assets/icons/tools/google-drive.png'
import canva from '../assets/icons/tools/canva.png'
import capcut from '../assets/icons/tools/capcut.png'
import notion from '../assets/icons/tools/notion.png'
import msOffice from '../assets/icons/tools/ms-office.png'
import slack from '../assets/icons/tools/slack.png'
import pinterest from '../assets/icons/tools/pinterest.png'
import { bounceIn, fadeUp, slideInRight, staggerContainer } from '../lib/motion'

const tools = [
  { src: googleDrive, alt: 'Google Drive' },
  { src: canva, alt: 'Canva' },
  { src: capcut, alt: 'CapCut' },
  { src: notion, alt: 'Notion' },
  { src: msOffice, alt: 'Microsoft Office' },
  { src: slack, alt: 'Slack' },
  { src: pinterest, alt: 'Pinterest' },
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
    <section id="tools" className="relative py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
        <div>
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.6 }}
            variants={fadeUp}
            className="font-display text-4xl sm:text-5xl"
            style={{ color: 'var(--color-brand-brown)' }}
          >
            Tools
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer(0.09, 0.15)}
            className="mt-8 grid grid-cols-4 gap-5 sm:grid-cols-4 sm:gap-6"
          >
            {tools.map((tool) => (
              <motion.div
                key={tool.alt}
                variants={bounceIn}
                whileHover={{ scale: 1.15, rotate: [0, -6, 6, 0] }}
                className="flex items-center justify-center"
              >
                <img
                  src={tool.src}
                  alt={tool.alt}
                  title={tool.alt}
                  className="h-14 w-14 rounded-2xl object-cover shadow-sm sm:h-16 sm:w-16"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={slideInRight}
          className="relative mx-auto max-w-sm"
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
