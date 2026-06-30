import { motion } from "motion/react"

const stats = [
  {
    value: "10+",
    label: "Projects Built",
  },
  {
    value: "5+",
    label: "Core Technologies",
  },
  {
    value: "100%",
    label: "Responsive Focus",
  },
]

export default function Stats() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8"
          >
            <h3 className="text-5xl font-black tracking-[-0.06em] text-primary">
              {stat.value}
            </h3>
            <p className="mt-3 text-white/55">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}