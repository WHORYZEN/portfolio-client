import { motion, useInView, useMotionValue, useSpring } from "motion/react"
import { useEffect, useRef, useState } from "react"

const stats = [
  {
    value: 10,
    suffix: "+",
    label: "Projects Built",
  },
  {
    value: 5,
    suffix: "+",
    label: "Core Technologies",
  },
  {
    value: 100,
    suffix: "%",
    label: "Responsive Focus",
  },
]

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    stiffness: 80,
    damping: 20,
  })

  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, motionValue, value])

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest))
    })
  }, [springValue])

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  )
}

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
              <Counter value={stat.value} suffix={stat.suffix} />
            </h3>
            <p className="mt-3 text-white/55">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}