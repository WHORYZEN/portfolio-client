import { skills } from "@/data/skills"
import { motion } from "motion/react"
import TextReveal from "@/components/TextReveal"

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
            Skills Stack
          </p>
          <TextReveal>
            <h2 className="text-4xl font-black tracking-[-0.05em] md:text-6xl">
              Tools I use to build fast, scalable products.
            </h2>
          </TextReveal>
        </div>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className="rounded-full border border-white/10 bg-white/[0.04] px-6 py-4 text-sm font-medium text-white/80 transition-all duration-300 hover:border-primary/40 hover:bg-primary hover:text-black"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}