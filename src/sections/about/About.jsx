import { motion } from "motion/react"
import TextReveal from "@/components/TextReveal"

export default function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
            About Me
          </p>
          <TextReveal>
            <h2 className="text-4xl font-black tracking-[-0.05em] md:text-6xl">
              Developer with an eye for clean product design.
            </h2>
          </TextReveal>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-10"
        >
          <p className="text-xl leading-9 text-white/70">
            I’m a software developer focused on building modern web applications
            with React, JavaScript, Tailwind, shadcn/ui and Node.js. I enjoy
            turning ideas into fast, elegant and user-friendly digital products.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ["Frontend", "React, Tailwind"],
              ["Backend", "Node.js, APIs"],
              ["Focus", "Clean UX, Speed"],
            ].map(([title, value]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-black/30 p-5"
              >
                <p className="text-sm text-white/45">{title}</p>
                <p className="mt-2 font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}