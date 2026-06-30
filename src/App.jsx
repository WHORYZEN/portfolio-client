import Navbar from "@/components/layout/Navbar"
import Hero from "@/sections/Hero"
import SmoothScroll from "@/components/layout/SmoothScroll"
import Footer from "@/components/layout/Footer"
import Work from "@/sections/work/Work"
import About from "@/sections/about/About"
import Skills from "@/sections/skills/Skills"
import Contact from "@/sections/contact/Contact"
import Experience from "@/sections/experience/Experience"
import CursorGlow from "@/components/CursorGlow"
import Stats from "@/sections/stats/Stats"
import Marquee from "@/components/Marquee"
import ScrollProgress from "@/components/ScrollProgress"
import { useEffect, useState } from "react"
import Loader from "@/components/Loader"

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
        <CursorGlow />
        <Navbar />
        <Hero />
        <Stats />
        <Marquee />
        <Work />
        <About />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </SmoothScroll>
    </>
  )
}

export default App