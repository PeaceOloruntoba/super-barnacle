import StripedBackground from './components/StripedBackground'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import ToolsSkills from './components/ToolsSkills'
import Wins from './components/Wins'
import CaseStudies from './components/ClientCase'
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
        <CaseStudies />
      </div>
      <VideoEditing />
      <Contact />
    </div>
  )
}

export default App
