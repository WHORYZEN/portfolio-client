import { experience } from "@/data/experience"
import TextReveal from "@/components/TextReveal"
import { motion } from "motion/react"

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-4xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
            Experience
          </p>

          <TextReveal>
            <h2 className="text-4xl font-black tracking-[-0.05em] md:text-6xl">
              Experience shaped through projects, practice and product thinking.
            </h2>
          </TextReveal>
        </div>

        <div className="relative border-l border-white/10 pl-8">
          {experience.map((item, index) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="relative mb-10 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 last:mb-0"
            >
              <div className="absolute -left-[43px] top-8 h-5 w-5 rounded-full border border-primary bg-background" />

              <p className="text-sm text-primary">{item.period}</p>

              <h3 className="mt-3 text-3xl font-black tracking-[-0.04em]">
                {item.role}
              </h3>

              <p className="mt-1 text-white/45">{item.company}</p>

              <ul className="mt-6 space-y-3">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-base leading-7 text-white/60"
                  >
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}