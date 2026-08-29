import { motion } from 'framer-motion'
import {
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'
import {
  fadeUp,
  scaleIn,
  slideInLeft,
  slideInRight,
  staggerContainer,
} from '../lib/motion'

// Asset imports
import clientABefore from '../assets/works/clients/a-after.png'
import clientAAfter from '../assets/works/clients/a-after.png'
import clientBBefore from '../assets/works/clients/b-after.png'
import clientBAfter from '../assets/works/clients/b-after.png'

export type SocialPlatform = {
  name: 'instagram' | 'tiktok' | 'facebook' | 'linkedin' | 'twitter' | 'youtube'
  url: string
}

type ClientCaseProps = {
  label: string
  subtitle?: string
  name: string
  industry: string
  location?: string
  platforms?: SocialPlatform[]
  goal: string
  approachOverview: string
  approachPoints?: string[]
  beforeImage?: string
  afterImage?: string
  reverse?: boolean
}

// Helper function to render social media icons
const renderPlatformIcon = (platform: SocialPlatform['name']) => {
  const iconClass = 'h-5 w-5 hover:opacity-80 transition-opacity'
  switch (platform) {
    case 'instagram':
      return <FaInstagram className={`${iconClass} text-[#E4405F]`} />
    case 'tiktok':
      return <FaTiktok className={`${iconClass} text-black`} />
    case 'facebook':
      return <FaFacebook className={`${iconClass} text-[#1877F2]`} />
    case 'linkedin':
      return <FaLinkedin className={`${iconClass} text-[#0A66C2]`} />
    case 'twitter':
      return <FaTwitter className={`${iconClass} text-[#1DA1F2]`} />
    case 'youtube':
      return <FaYoutube className={`${iconClass} text-[#FF0000]`} />
    default:
      return null
  }
}

// Sub-component for individual client case study
function ClientCase({
  label,
  subtitle = 'SOCIAL MEDIA MANAGEMENT AND CONTENT CREATION',
  name,
  industry,
  location,
  platforms,
  goal,
  approachOverview,
  approachPoints,
  beforeImage = clientABefore,
  afterImage = clientAAfter,
  reverse = false,
}: ClientCaseProps) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.6 }}
        variants={fadeUp}
        className="font-display text-4xl font-black tracking-tight sm:text-5xl uppercase"
        style={{ color: 'var(--color-brand-brown)' }}
      >
        {label}
      </motion.h2>

      <div
        className={`mt-6 grid grid-cols-1 items-start gap-8 md:grid-cols-5 ${
          reverse ? 'md:[&>*:first-child]:order-2' : ''
        }`}
      >
        {/* Main Details Card */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          variants={staggerContainer(0.12, 0.1)}
          className="rounded-3xl p-7 sm:p-9 md:col-span-3 flex flex-col justify-between"
          style={{ backgroundColor: 'var(--color-brand-sage-100)' }}
        >
          {/* Header Metadata */}
          <motion.div variants={fadeUp}>
            <h3 className="font-bold uppercase tracking-wider text-neutral-900 text-sm sm:text-base leading-snug">
              {subtitle}
            </h3>

            <div className="mt-4 space-y-1 text-sm sm:text-base text-neutral-800">
              <p>
                <span className="font-semibold text-neutral-900">Name:</span>{' '}
                {name}
              </p>
              <p>
                <span className="font-semibold text-neutral-900">
                  Industry:
                </span>{' '}
                {industry}
              </p>
              {location && (
                <p>
                  <span className="font-semibold text-neutral-900">
                    Location:
                  </span>{' '}
                  {location}
                </p>
              )}
            </div>

            {/* Clickable Social Media Platforms */}
            {platforms && platforms.length > 0 && (
              <div className="mt-3 flex items-center gap-3">
                <span className="font-semibold uppercase tracking-wide text-xs text-neutral-900">
                  PLATFORMS:
                </span>
                <div className="flex items-center gap-2.5">
                  {platforms.map((p, idx) => (
                    <a
                      key={idx}
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${p.name}`}
                      className="p-1.5 rounded-full bg-white/70 shadow-sm hover:bg-white hover:scale-110 transition-all duration-200"
                    >
                      {renderPlatformIcon(p.name)}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Goal Section */}
          <motion.div variants={fadeUp} className="mt-6">
            <h3 className="font-bold uppercase tracking-wider text-neutral-900 text-sm">
              GOAL:
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
              {goal}
            </p>
          </motion.div>

          {/* Approach Section */}
          <motion.div variants={fadeUp} className="mt-6">
            <h3 className="font-bold uppercase tracking-wider text-neutral-900 text-sm">
              APPROACH:
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
              {approachOverview}
            </p>

            {approachPoints && approachPoints.length > 0 && (
              <div className="mt-3">
                <p className="text-xs sm:text-sm font-medium text-neutral-800">
                  To support growth, we combine:
                </p>
                <ul className="mt-2 list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-neutral-700 leading-snug">
                  {approachPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </motion.div>

        {/* Double Phone Screenshot Showcase */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={reverse ? slideInLeft : slideInRight}
          className="md:col-span-2 flex flex-col items-center justify-center bg-white rounded-3xl p-6 shadow-sm border border-neutral-100"
        >
          <motion.div
            variants={scaleIn}
            className="grid grid-cols-2 gap-4 w-full max-w-lg items-center"
          >
            {/* BEFORE SCREEN */}
            <div className="flex flex-col items-center">
              <div className="overflow-hidden rounded-[1.75rem] border-[5px] border-neutral-900 bg-neutral-900 shadow-lg w-full">
                <img
                  src={beforeImage}
                  alt={`${name} social media before`}
                  className="aspect-[9/18] w-full object-cover"
                />
              </div>
              <span
                className="mt-4 font-extrabold uppercase tracking-widest text-sm"
                style={{ color: 'var(--color-brand-brown)' }}
              >
                BEFORE
              </span>
            </div>

            {/* AFTER SCREEN */}
            <div className="flex flex-col items-center">
              <div className="overflow-hidden rounded-[1.75rem] border-[5px] border-neutral-900 bg-neutral-900 shadow-lg w-full">
                <img
                  src={afterImage}
                  alt={`${name} social media after`}
                  className="aspect-[9/18] w-full object-cover"
                />
              </div>
              <span
                className="mt-4 font-extrabold uppercase tracking-widest text-sm"
                style={{ color: 'var(--color-brand-brown)' }}
              >
                AFTER
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

const caseStudiesData: ClientCaseProps[] = [
  {
    label: 'BookedUpCafe',
    subtitle: 'SOCIAL MEDIA MANAGEMENT AND CONTENT CREATION',
    name: 'Nazo',
    industry: 'E-commerce',
    location: 'Abuja, Nigeria',
    platforms: [
      { name: 'instagram', url: 'https://instagram.com/nazo' },
      { name: 'tiktok', url: 'https://tiktok.com/@nazo' },
    ],
    goal: 'Their goal on social media is to educate, entertain, and convert, building a community that understands the power of nasal breathing, trusts the product, and feels confident making it part of their nightly routine or training sessions.',
    approachOverview:
      'My approach with this start-up e-commerce brand centres around authentic reactions, education, and trend-led content. Because the product delivers an immediate, noticeable effect, we lean heavily into real-time user reactions, UGC-style demonstrations, and relatable lifestyle storytelling. This shows the transformation in a way that feels both credible and shareable.',
    approachPoints: [
      'Educational micro-content explaining how nasal breathing works, why people snore, and how they improve sleep and performance.',
      'Trend-driven reels & humorous posts that position the brand as a culturally aware, engaging brand.',
      'Community-led testimonials highlighting genuine experiences and reactions.',
      'A clear, consistent visual identity that feels modern, trustworthy, and health-focused.',
      'Overall, the goal is to build the brand as the go-to breathing and sleep support brand in Ireland and United Kingdom turning awareness into trust, and trust into long-term product adoption.',
    ],
    beforeImage: clientABefore,
    afterImage: clientAAfter,
    reverse: false,
  },
  {
    label: 'CLIENT WORK 2',
    subtitle: 'SOCIAL MEDIA MANAGEMENT AND CONTENT CREATION',
    name: 'Aura Fitness & Apparel',
    industry: 'Fitness / Activewear',
    location: 'London, United Kingdom',
    platforms: [
      { name: 'instagram', url: 'https://instagram.com/aurafitness' },
      { name: 'tiktok', url: 'https://tiktok.com/@aurafitness' },
    ],
    goal: 'To scale brand engagement, position the client as a premium activewear authority, and drive direct product sales via short-form video content and aesthetic feed curation.',
    approachOverview:
      'We implemented a high-energy content model focusing on lifestyle aesthetics, workout routine micro-clips, and transparent behind-the-scenes apparel production. By standardizing color palettes and content themes, we built immediate visual trust with target buyers.',
    approachPoints: [
      'Daily short-form video posts optimized for Instagram Reels and TikTok algorithms.',
      'High-converting influencer collabs showcasing realistic garment fits during intense workouts.',
      'Consistent brand tone centered around empowerment, performance, and modern active lifestyles.',
      'Strategic call-to-action captions designed to push profile visits directly to the online store.',
    ],
    beforeImage: clientBBefore,
    afterImage: clientBAfter,
    reverse: true,
  },
]

export default function CaseStudies() {
  return (
    <section className="bg-white py-12 space-y-16">
      {caseStudiesData.map((client, idx) => (
        <ClientCase key={idx} {...client} />
      ))}
    </section>
  )
}
