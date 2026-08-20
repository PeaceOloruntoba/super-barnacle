import StripedBackground from './components/StripedBackground'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import ToolsSkills from './components/ToolsSkills'
import Wins from './components/Wins'
import ClientCase from './components/ClientCase'
import VideoEditing from './components/VideoEditing'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen">
      <StripedBackground />

      <Hero />
      <AboutMe />
      <ToolsSkills />
      <Wins />

      <div className="py-16 sm:py-20">
        <ClientCase
          label="Client A"
          name="Bookedupcafe"
          industry="E-commerce / Bookstore"
          goals="Build the brand's social media presence while generating sales through organic content."
          approach="Grew a consistent content engine — themed posts, restock drops and behind-the-scenes reels — to build brand presence and drive sales through organic social."
          screenshotLabel="Bookedupcafe+Instagram"
        />
      </div>

      <div className="py-16 sm:py-20">
        <ClientCase
          label="Client B"
          name="Deborah Remmy"
          industry="Personal brand / Real Estate"
          goals="Build authority in the industry and generate in-bound leads from organic content."
          approach="Positioned the brand as a go-to voice in real estate through educational content and consistent posting, turning followers into inbound leads."
          screenshotLabel="Deborah+Remmy+Profile"
          reverse
        />
      </div>

      <VideoEditing />
      <Contact />
    </div>
  )
}

export default App
