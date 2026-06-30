import { experience } from "@/data/experience"
import { motion } from "motion/react"
import TextReveal from "@/components/TextReveal"

export default function Experience() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
            Experience
          </p>
          <TextReveal>
            <h2 className="text-4xl font-black tracking-[-0.05em] md:text-6xl">
              My journey as a developer.
            </h2>
          </TextReveal>
        </div>

        <div className="space-y-5">
          {experience.map((item, index) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:grid-cols-[0.7fr_1fr]"
            >
              <div>
                <p className="text-sm text-primary">{item.period}</p>
                <h3 className="mt-3 text-2xl font-bold tracking-[-0.04em]">
                  {item.role}
                </h3>
                <p className="mt-1 text-white/45">{item.company}</p>
              </div>

              <p className="text-white/60 leading-7">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}