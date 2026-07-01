import { projects } from "@/data/projects"
import { ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"
import TextReveal from "@/components/TextReveal"

export default function StickyWork() {
  return (
    <section id="work" className="relative px-6 py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
            Selected Work
          </p>

          <TextReveal>
            <h2 className="text-4xl font-black tracking-[-0.05em] md:text-6xl">
              Scroll through projects built with clarity, speed and purpose.
            </h2>
          </TextReveal>

          <p className="mt-6 max-w-md text-white/55">
            A curated collection of interfaces, products and full-stack web
            applications.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 80, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, margin: "-160px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ zIndex: index + 2 }}
              className="sticky top-28 min-h-[620px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-black p-5 shadow-2xl"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br opacity-30 ${project.color}`}
              />

              <div className="relative z-10 flex h-full min-h-[580px] flex-col justify-between">
                <div>
                  <p className="mb-4 text-sm text-white/45">
                    {project.year} / 0{index + 1}
                  </p>

                  <h3 className="max-w-xl text-5xl font-black leading-[0.95] tracking-[-0.06em]">
                    {project.title}
                  </h3>

                  <p className="mt-6 text-sm text-primary">
                    {project.category}
                  </p>

                  <p className="mt-4 max-w-md text-lg leading-8 text-white/60">
                    {project.description}
                  </p>
                </div>

                <div className="mt-8 overflow-hidden rounded-[2rem] bg-white/[0.04] p-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-h-[300px] w-full rounded-[1.5rem] object-contain"
                  />
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute right-6 top-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-black">
                <ArrowUpRight size={20} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}