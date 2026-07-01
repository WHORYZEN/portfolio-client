import { skillGroups } from "@/data/skills"
import TextReveal from "@/components/TextReveal"
import { motion } from "motion/react"

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-4xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
            Expertise
          </p>

          <TextReveal>
            <h2 className="text-4xl font-black tracking-[-0.05em] md:text-6xl">
              Capabilities that connect design, code and product thinking.
            </h2>
          </TextReveal>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:border-primary/40 hover:bg-white/[0.055]"
            >
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/0 blur-[80px] transition-all duration-500 group-hover:bg-primary/20" />

              <p className="text-sm text-primary">0{index + 1}</p>

              <h3 className="mt-8 text-3xl font-black tracking-[-0.05em]">
                {group.title}
              </h3>

              <p className="mt-4 max-w-md leading-7 text-white/55">
                {group.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/65 transition group-hover:border-primary/30 group-hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}