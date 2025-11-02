import { useEffect, useMemo, useState } from 'react'
import { FiArrowUpRight, FiMail, FiPhone, FiSun, FiMoon, FiFeather, FiUsers, FiGlobe } from 'react-icons/fi'
import { FaInstagram, FaXTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa6'
import { toast } from 'sonner'
import { sendContact } from './lib/api'

type Theme = 'light' | 'dark'

function App() {
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('theme') as Theme) || 'light')
  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const shell = useMemo(() => theme === 'dark' ? {
    bg: 'bg-neutral-950',
    text: 'text-neutral-100',
    sub: 'text-neutral-300',
    card: 'bg-white/5 ring-white/10',
    border: 'border-white/10',
    btn: 'bg-white text-neutral-900',
    btnAlt: 'border border-white/20',
  } : {
    bg: 'bg-white',
    text: 'text-neutral-900',
    sub: 'text-neutral-600',
    card: 'bg-neutral-50 ring-neutral-200',
    border: 'border-neutral-200',
    btn: 'bg-neutral-900 text-white',
    btnAlt: 'border border-neutral-300',
  }, [theme])

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in your name, email and message.')
      return
    }
    try {
      setLoading(true)
      await sendContact({ ...form })
      toast.success('Thanks! Your message has been sent.')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err: any) {
      toast.error(err?.message || 'Failed to send. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={`${shell.bg} ${shell.text} min-h-screen`}> 
      {/* NAV */}
      <header className={`sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 ${theme==='dark'?'bg-neutral-950/80':'bg-white/80'} ${theme==='dark'?'border-white/5':'border-neutral-200'} border-b`}>
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">Joy Aderinwale</a>
          <nav className="hidden sm:flex gap-6 text-sm opacity-90">
            <a href="#work" className="hover:opacity-100">Work</a>
            <a href="#services" className="hover:opacity-100">Services</a>
            <a href="#about" className="hover:opacity-100">About</a>
            <a href="#contact" className="hover:opacity-100">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <button aria-label="Toggle theme" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md ${shell.btnAlt}`}>
              {theme === 'dark' ? <FiSun /> : <FiMoon />} <span className="hidden sm:inline text-sm">{theme==='dark'?'Light':'Dark'}</span>
            </button>
            <a href="#contact" className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium hover:shadow transition ${shell.btn}`}>
              Hire Me <FiArrowUpRight />
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className={`absolute inset-0 ${theme==='dark' ? 'bg-[radial-gradient(60%_40%_at_50%_0%,rgba(255,255,255,0.10),transparent_70%)]' : 'bg-[radial-gradient(60%_40%_at_50%_0%,rgba(0,0,0,0.06),transparent_70%)]'}`} />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className={`inline-flex items-center gap-2 text-sm ${shell.sub}`}>
                <FiGlobe /> Available for international roles
              </span>
              <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
                Social Media Manager & Copywriter
              </h1>
              <p className={`mt-4 max-w-prose ${shell.sub}`}>
                I grow brands with smart strategies and scroll-stopping stories. From content calendars to conversion copy, I help you win attention and trust.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#work" className={`px-4 py-2 rounded-md font-medium hover:shadow transition ${shell.btn}`}>See Portfolio</a>
                <a href="#contact" className={`px-4 py-2 rounded-md hover:shadow transition ${shell.btnAlt}`}>Get a Quote</a>
              </div>
              <div className={`mt-8 grid grid-cols-3 gap-4 text-sm ${shell.sub}`}>
                <div className="inline-flex items-center gap-2"><FiFeather /> Copy that converts</div>
                <div className="inline-flex items-center gap-2"><FiUsers /> Community growth</div>
                <div className="inline-flex items-center gap-2"><FiGlobe /> Global reach</div>
              </div>
            </div>
            <div className="relative">
              <div className={`aspect-[4/5] rounded-2xl ${theme==='dark'?'bg-gradient-to-br from-white/10 to-transparent ring-white/10':'bg-gradient-to-br from-neutral-100 to-transparent ring-neutral-200'} ring-1 overflow-hidden`}>
                <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1300&auto=format&fit=crop" alt="Hero" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold">Selected Projects</h2>
          <a href="#contact" className={`text-sm ${shell.sub} hover:opacity-100`}>Request full portfolio</a>
        </div>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {[1,2,3,4,5,6,7,8].map((i) => (
            <figure key={i} className={`group relative overflow-hidden rounded-xl ring-1 ${shell.card}`}>
              <img src={`https://picsum.photos/seed/joy-${i}/800/600`} alt={`project ${i}`} className="h-40 sm:h-48 w-full object-cover transition duration-700 ease-out group-hover:scale-110" />
              <figcaption className={`absolute left-0 bottom-0 p-2 text-xs sm:text-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition ${shell.text}`}>
                Campaign {i}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <h2 className="text-2xl sm:text-3xl font-semibold">Services</h2>
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          {[{icon:<FiGlobe/>,title:'Social Strategy',desc:'Audits, calendars, platform playbooks.'},{icon:<FiFeather/>,title:'Copywriting',desc:'Web, ads, emails, captions, scripts.'},{icon:<FiUsers/>,title:'Community',desc:'Engagement, moderation, growth ops.'}].map((s,i)=>(
            <div key={i} className={`p-5 rounded-xl ring-1 hover:shadow transition ${shell.card}`}>
              <div className={`text-xl ${shell.sub}`}>{s.icon}</div>
              <h3 className="mt-3 font-medium">{s.title}</h3>
              <p className={`mt-2 text-sm ${shell.sub}`}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className={`rounded-2xl overflow-hidden ring-1 ${shell.card}`}>
            <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1300&auto=format&fit=crop" alt="Joy working" className="w-full h-72 object-cover" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">Hi, I’m Joy.</h2>
            <p className={`mt-4 ${shell.sub}`}>
              I help brands grow with strategic content and persuasive copy. I’ve shipped campaigns for creators and startups targeting global audiences.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:hello@example.com" className={`inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm ${shell.btn}`}>
                <FiMail /> Email
              </a>
              <a href="https://instagram.com/your-handle" target="_blank" className={`inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm ${shell.btnAlt}`}>
                <FaInstagram /> Instagram
              </a>
              <a href="https://x.com/your-handle" target="_blank" className={`inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm ${shell.btnAlt}`}>
                <FaXTwitter /> X
              </a>
              <a href="https://facebook.com/your-page" target="_blank" className={`inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm ${shell.btnAlt}`}>
                <FaFacebook /> Facebook
              </a>
              <a href="https://linkedin.com/in/your-profile" target="_blank" className={`inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm ${shell.btnAlt}`}>
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <h2 className="text-2xl sm:text-3xl font-semibold">Let’s work together</h2>
        <p className={`mt-2 max-w-prose ${shell.sub}`}>Tell me about your project. I usually reply within 24 hours.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className={`md:col-span-2 p-6 rounded-xl ring-1 ${shell.card}`}>
            <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Name</label>
                <input className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 ${shell.border}`} placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input type="email" className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 ${shell.border}`} placeholder="you@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm mb-1">Subject</label>
                <input className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 ${shell.border}`} placeholder="Project subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm mb-1">Message</label>
                <textarea rows={5} className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 ${shell.border}`} placeholder="Tell me about your project..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              </div>
              <div>
                <button disabled={loading} className={`inline-flex items-center gap-2 px-4 py-2 rounded-md font-medium hover:shadow disabled:opacity-50 ${shell.btn}`}>
                  {loading ? 'Sending...' : 'Send message'}
                </button>
              </div>
            </form>
          </div>
          <div className={`p-6 rounded-xl ring-1 space-y-4 ${shell.card}`}>
            <div className="flex items-start gap-3">
              <FiMail className="mt-1" />
              <div>
                <div className={`text-sm ${shell.sub}`}>Email</div>
                <a href="mailto:hello@example.com" className="hover:underline">hello@example.com</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FiPhone className="mt-1" />
              <div>
                <div className={`text-sm ${shell.sub}`}>Phone</div>
                <a href="tel:+1234567890" className="hover:underline">+1 (234) 567-890</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={`${theme==='dark'?'border-white/5':'border-neutral-200'} border-t`}>
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm opacity-70 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Joy Aderinwale</span>
          <span>Social Media • Copywriting</span>
        </div>
      </footer>
    </div>
  )
}

export default App
