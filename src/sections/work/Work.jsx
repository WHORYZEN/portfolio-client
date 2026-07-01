import { useState } from "react"
import { projects } from "@/data/projects"
import { ArrowUpRight } from "lucide-react"
import { motion, useMotionValue, useSpring } from "motion/react"
import TextReveal from "@/components/TextReveal"
import CursorLabel from "@/components/CursorLabel"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

export default function Work() {
  const [activeProject, setActiveProject] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [cursorLabel, setCursorLabel] = useState("")

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, {
    stiffness: 120,
    damping: 22,
  })

  const springY = useSpring(mouseY, {
    stiffness: 120,
    damping: 22,
  })

  function handleMouseMove(e) {
    mouseX.set(e.clientX - 200)
    mouseY.set(e.clientY - 150)
  }

  function handleMouseEnter(project) {
    setActiveProject(project)
    setCursorLabel("View")
  }

  function handleMouseLeave() {
    setActiveProject(null)
    setCursorLabel("")
  }

  return (
    <section id="work" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
              Selected Work
            </p>

            <TextReveal>
              <h2 className="max-w-3xl text-4xl font-black tracking-[-0.05em] md:text-6xl">
                Projects built with clarity, speed and purpose.
              </h2>
            </TextReveal>
          </div>

          <p className="max-w-md text-white/55">
            A curated collection of interfaces, products and full-stack web
            applications.
          </p>
        </div>

        <div className="grid gap-5">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              onClick={() => setSelectedProject(project)}
              onMouseEnter={() => handleMouseEnter(project)}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="group relative grid cursor-pointer gap-6 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition-all duration-500 hover:border-primary/40 hover:bg-white/[0.07] md:grid-cols-[1.2fr_1fr_auto]"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br opacity-0 transition duration-500 group-hover:opacity-100 ${project.color}`}
              />

              <div className="relative z-10">
                <p className="mb-3 text-sm text-white/45">{project.year}</p>
                <h3 className="text-3xl font-bold tracking-[-0.04em]">
                  {project.title}
                </h3>
              </div>

              <div className="relative z-10">
                <p className="mb-3 text-sm text-primary">
                  {project.category}
                </p>
                <p className="text-white/55">{project.description}</p>
              </div>

              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition-all duration-500 group-hover:rotate-45 group-hover:bg-primary">
                <ArrowUpRight size={18} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {activeProject && (
        <motion.div
          style={{
            x: springX,
            y: springY,
          }}
          initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="pointer-events-none fixed left-0 top-0 z-50 hidden h-[300px] w-[400px] overflow-hidden rounded-[2rem] border border-white/10 bg-black/80 p-3 shadow-2xl backdrop-blur-xl [perspective:1000px] md:block"
        >
          <motion.div
            initial={{ rotateX: -6, rotateY: 6 }}
            animate={{ rotateX: 0, rotateY: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="relative h-full w-full overflow-hidden rounded-[1.5rem] bg-black"
          >
            <img
              src={activeProject.image}
              alt={activeProject.title}
              className="h-full w-full object-contain"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/10" />
          </motion.div>
        </motion.div>
      )}

      <CursorLabel label={cursorLabel} />

      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-4xl border-white/10 bg-black text-white">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-4xl font-black tracking-[-0.05em]">
                  {selectedProject.title}
                </DialogTitle>

                <DialogDescription className="text-white/55">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-6 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-4">
                <div className="flex h-[420px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-black">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {selectedProject.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-black transition hover:scale-105"
                >
                  Live Project
                </a>

                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-primary/40 hover:text-primary"
                >
                  GitHub
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}