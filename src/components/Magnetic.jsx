import { motion, useMotionValue, useSpring } from "motion/react"

export default function Magnetic({ children }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 180, damping: 18 })
  const springY = useSpring(y, { stiffness: 180, damping: 18 })

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect()

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    x.set((mouseX - centerX) * 0.25)
    y.set((mouseY - centerY) * 0.25)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-fit"
    >
      {children}
    </motion.div>
  )
}