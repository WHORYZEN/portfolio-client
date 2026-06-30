import { navigation } from "@/data/navigation"
import PremiumButton from "@/components/PremiumButton"
import { Menu } from "lucide-react"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { scrollToSection } from "@/lib/scrollToSection"
import { useActiveSection } from "@/hooks/useActiveSection"

export default function Navbar({ startAnimation }) {
  const navRef = useRef(null)
  const sectionIds = navigation.map((item) => item.href)
  const activeSection = useActiveSection(sectionIds)

  useEffect(() => {
    if (!startAnimation) return

    const ctx = gsap.context(() => {
      gsap.to(navRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        delay: 0.15,
      })
    }, navRef)

    return () => ctx.revert()
  }, [startAnimation])

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-6 py-5">
      <nav
        ref={navRef}
        className="mx-auto flex max-w-7xl translate-y-[-24px] items-center justify-between rounded-full border border-white/10 bg-black/30 px-6 py-3 opacity-0 backdrop-blur-2xl"
      >
        <a href="#" className="text-lg font-black tracking-tight">
          KS.
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <button
              key={item.title}
              type="button"
              onClick={() => scrollToSection(item.href)}
              className={`text-sm transition ${activeSection === item.href
                  ? "text-primary"
                  : "text-white/60 hover:text-white"
                }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <PremiumButton>Hire Me</PremiumButton>
        </div>

        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu size={22} />
          </SheetTrigger>

          <SheetContent className="border-white/10 bg-black text-white">
            <div className="mt-12 flex flex-col gap-6">
              {navigation.map((item) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm transition ${activeSection === item.href
                      ? "text-primary"
                      : "text-white/60 hover:text-white"
                    }`}
                >
                  {item.title}
                </button>
              ))}

              <PremiumButton>Hire Me</PremiumButton>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}