import { achievements } from "@/data/achievements"
import TextReveal from "@/components/TextReveal"
import { motion } from "motion/react"

export default function Highlights() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-4xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
            Highlights
          </p>

          <TextReveal>
            <h2 className="text-4xl font-black tracking-[-0.05em] md:text-6xl">
              Practical proof of what I can build.
            </h2>
          </TextReveal>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8"
            >
              <p className="text-sm text-primary">{item.number}</p>
              <h3 className="mt-8 text-2xl font-black tracking-[-0.04em]">
                {item.title}
              </h3>
              <p className="mt-4 leading-7 text-white/60">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}