import Navbar from "@/components/layout/Navbar"
import Hero from "@/sections/Hero"
import SmoothScroll from "@/components/layout/SmoothScroll"
import Footer from "@/components/layout/Footer"
import StickyWork from "@/sections/work/StickyWork"
import About from "@/sections/about/About"
import Skills from "@/sections/skills/Skills"
import Contact from "@/sections/contact/Contact"
import Experience from "@/sections/experience/Experience"
import CursorGlow from "@/components/CursorGlow"
import Stats from "@/sections/stats/Stats"
import Marquee from "@/components/Marquee"
import ScrollProgress from "@/components/ScrollProgress"
import Noise from "@/components/Noise"
import { useEffect, useState } from "react"
import Loader from "@/components/Loader"
import Work from "@/sections/work/Work"
import FAQ from "@/sections/faq/FAQ"
import Education from "@/sections/education/Education"
import Highlights from "@/sections/highlights/Highlights"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Loader loading={loading} />

      <SmoothScroll>
        <ScrollProgress />
        <Noise />
        <CursorGlow />
        <Navbar startAnimation={!loading} />
        <Hero startAnimation={!loading} />
        <Stats />
        <Marquee />
        <About />
        <Skills />
        <StickyWork />
        <Experience />
        <Education />
        <Highlights />
        <Work />
        <FAQ />
        <Contact />
        <Footer />
      </SmoothScroll>
    </>
  )
}

export default App