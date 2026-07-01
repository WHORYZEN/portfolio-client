import { useEffect, useRef } from "react"
import { projects } from "@/data/projects"
import { ArrowUpRight } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import TextReveal from "@/components/TextReveal"

gsap.registerPlugin(ScrollTrigger)

export default function StickyWork() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return

        const image = card.querySelector("[data-project-image]")

        gsap.to(card, {
          scale: 0.92 + index * 0.025,
          opacity: index === projects.length - 1 ? 1 : 0.88,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top 28%",
            end: "bottom 28%",
            scrub: true,
          },
        })

        gsap.to(image, {
          yPercent: -8,
          scale: 1.04,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="work" ref={sectionRef} className="relative px-6 py-32">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
            Selected Work
          </p>

          <TextReveal>
            <h2 className="text-4xl font-black tracking-[-0.05em] md:text-6xl">
              Featured builds with motion, structure and product thinking.
            </h2>
          </TextReveal>

          <p className="mt-6 max-w-md text-lg leading-8 text-white/55">
            A focused collection of portfolio projects built to demonstrate
            frontend craft, full-stack fundamentals and modern UI execution.
          </p>

          <div className="mt-10 hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 lg:block">
            <p className="text-sm uppercase tracking-[0.25em] text-primary">
              Scroll Experience
            </p>
            <p className="mt-4 text-white/55">
              Each card stacks with depth while the project image moves subtly
              to create a premium editorial portfolio feel.
            </p>
          </div>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <article
              key={project.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="sticky top-28 min-h-[640px] overflow-hidden rounded-[2.75rem] border border-white/10 bg-card p-5 shadow-2xl"
              style={{
                zIndex: index + 1,
              }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br opacity-25 ${project.color}`}
              />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.12),transparent_25%)]" />

              <div className="relative z-10 flex min-h-[600px] flex-col">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="mb-4 text-sm text-white/45">
                      {project.year} / 0{index + 1}
                    </p>

                    <h3 className="max-w-xl text-5xl font-black leading-[0.95] tracking-[-0.06em] md:text-6xl">
                      {project.title}
                    </h3>

                    <p className="mt-5 text-sm text-primary">
                      {project.category}
                    </p>
                  </div>

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-black transition duration-500 hover:rotate-45">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                <p className="mt-6 max-w-lg text-lg leading-8 text-white/60">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 p-4">
                  <div className="relative flex h-[310px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-black">
                    <img
                      data-project-image
                      src={project.image}
                      alt={project.title}
                      className="max-h-full max-w-full object-contain will-change-transform"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/10" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}