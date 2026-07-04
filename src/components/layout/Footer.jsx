import { ArrowUpRight, Mail, MapPin } from "lucide-react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa6"
import { navigation } from "@/data/navigation"
import { scrollToSection } from "@/lib/scrollToSection"

const socials = [
  {
    title: "GitHub",
    href: "https://github.com/WHORYZEN",
    icon: FaGithub,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/kanishk-shukla-softwaredev/",
    icon: FaLinkedinIn,
  },
  {
    title: "Email",
    href: "mailto:kanishkshkl@gmail.com",
    icon: Mail,
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden px-6 pb-8 pt-32">
      <div className="absolute left-1/2 top-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl border-t border-white/10 pt-16">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-primary">
              Available for selected projects
            </p>

            <h2 className="mt-8 max-w-5xl text-6xl font-black leading-[0.9] tracking-[-0.08em] md:text-8xl">
              Let&apos;s build something clean, fast and <h2 className="text-primary mt-1 max-w-5xl text-6xl font-black leading-[0.9] tracking-[-0.08em] md:text-8xl">
                memorable.</h2>
            </h2>


            <a
              href="mailto:kanishkshkl@gmail.com"
              className="group mt-10 inline-flex items-center gap-4 text-2xl font-bold tracking-[-0.04em] text-white/70 transition hover:text-primary md:text-4xl"
            >
              kanishkshkl@gmail.com
              <ArrowUpRight className="transition group-hover:rotate-45" />
            </a>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/35">
                Navigation
              </p>

              <div className="space-y-0">
                {navigation.map((item, index) => (
                  <button
                    key={item.title}
                    onClick={() => scrollToSection(item.href)}
                    className="group flex w-full items-center justify-between border-b border-white/10 py-4 text-left"
                  >
                    <span className="text-white/60 transition group-hover:text-primary">
                      {item.title}
                    </span>

                    <span className="text-xs text-white/30 transition group-hover:text-primary">
                      0{index + 1}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
              <p className="mb-6 text-sm uppercase tracking-[0.25em] text-white/35">
                Info
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-3 text-white/60">
                  <MapPin size={18} className="text-primary" />
                  India · Remote Friendly
                </div>

                <div className="flex items-center gap-3 text-white/60">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                  Open to internships & freelance work
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                {socials.map((social) => {
                  const Icon = social.icon

                  return (
                    <a
                      key={social.title}
                      href={social.href}
                      target={
                        social.href.startsWith("mailto:") ? undefined : "_blank"
                      }
                      rel={
                        social.href.startsWith("mailto:")
                          ? undefined
                          : "noreferrer"
                      }
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white/60 transition hover:border-primary hover:bg-primary hover:text-black"
                      aria-label={social.title}
                    >
                      <Icon size={18} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-28 border-t border-white/10 pt-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <h3 className="text-[26vw] font-black leading-[0.75] tracking-[-0.11em] text-foreground md:text-[14vw]">
              KANISHK
            </h3>

            <div className="pb-4 text-sm text-white/40 md:text-right">
              <p>© {year} Kanishk Shukla</p>
              <p className="mt-1">Built with React, Tailwind, Node.js & Motion</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}