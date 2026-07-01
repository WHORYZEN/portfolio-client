import { ArrowUpRight } from "lucide-react"
import { navigation } from "@/data/navigation"
import { scrollToSection } from "@/lib/scrollToSection"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="px-6 pb-8 pt-28">
      <div className="mx-auto max-w-7xl border-t border-white/10 pt-16">
        <div className="grid gap-16 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white/45 md:text-7xl">
              Let&apos;s work together
            </p>

            <a
              href="mailto:kanishkshkl@gmail.com"
              className="mt-2 block text-4xl font-black leading-[0.95] tracking-[-0.06em] text-foreground transition hover:text-primary md:text-6xl"
            >
              kanishkshkl@gmail.com
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("#contact")
              }}
              className="group mt-12 flex w-fit items-center gap-20 border-b border-white/60 pb-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
            >
              Contact Now
              <ArrowUpRight
                size={16}
                className="transition group-hover:rotate-45"
              />
            </a>
          </div>

          <div className="space-y-0">
            {navigation.map((item, index) => (
              <button
                key={item.title}
                onClick={() => scrollToSection(item.href)}
                className="group flex w-full items-center justify-between border-b border-white/10 py-4 text-left"
              >
                <span className="text-sm text-white/55 transition group-hover:text-primary">
                  {item.title}
                </span>

                <span className="text-xs text-white/35">
                  0{index + 1}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-28 border-t border-white/10 pt-12">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="text-[22vw] font-black leading-none tracking-[-0.12em] text-foreground md:text-[13vw]">
              KS.
            </h2>

            <div className="flex flex-col gap-2 text-sm text-white/45 md:items-end">
              <p>© {year}</p>
              <p>Built with React, Tailwind, shadcn/ui & Node.js</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}