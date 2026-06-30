import { useEffect, useState } from "react"

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0])

  useEffect(() => {
    function handleScroll() {
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 120

      if (isAtBottom) {
        setActiveSection("#contact")
        return
      }

      const current = sectionIds.findLast((id) => {
        const element = document.querySelector(id)
        if (!element) return false

        const rect = element.getBoundingClientRect()
        return rect.top <= window.innerHeight * 0.35
      })

      if (current) {
        setActiveSection(current)
      }
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [sectionIds])

  return activeSection
}