import TextReveal from "@/components/TextReveal"
import PremiumButton from "@/components/PremiumButton"
import { motion } from "motion/react"
import { ArrowUpRight, MapPin, Sparkles } from "lucide-react"

const highlights = [
  {
    title: "Frontend Engineering",
    value: "React, Vite, Tailwind, shadcn/ui",
  },
  {
    title: "Backend Fundamentals",
    value: "Node.js, Express, REST APIs",
  },
  {
    title: "Product Thinking",
    value: "Clean UX, performance, responsive UI",
  },
]

export default function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7 }}
          className="rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 md:p-10"
        >
          <p className="mb-4 flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-primary">
            <Sparkles size={16} />
            About Me
          </p>

          <TextReveal>
            <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.06em] md:text-6xl">
              Developer with a sharp eye for clean digital products.
            </h2>
          </TextReveal>

          <p className="mt-6 text-lg leading-8 text-white/60">
            I’m a software developer focused on building modern, responsive and
            polished web applications. I enjoy transforming ideas into fast,
            elegant and usable interfaces with React, JavaScript, Tailwind,
            shadcn/ui and Node.js.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="/files/resume.pdf" download>
              <PremiumButton>Download Resume</PremiumButton>
            </a>

            <div className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-white/60">
              <MapPin size={16} />
              India · Remote Friendly
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-[2.5rem] border border-white/10 bg-primary p-8 text-black md:p-10"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em]">
              Current Focus
            </p>

            <h3 className="mt-5 text-4xl font-black tracking-[-0.05em]">
              Building premium React interfaces and full-stack portfolio
              projects.
            </h3>

            <p className="mt-5 text-black/70">
              I’m currently strengthening my JavaScript, React, UI engineering
              and MERN stack fundamentals by building production-style projects
              from scratch.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
                  <ArrowUpRight size={16} />
                </div>

                <h4 className="font-semibold text-white">{item.title}</h4>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}