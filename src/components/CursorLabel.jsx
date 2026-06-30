import { motion, useMotionValue, useSpring } from "motion/react"
import { useEffect } from "react"

export default function CursorLabel({ label }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 180, damping: 22 })
  const springY = useSpring(y, { stiffness: 180, damping: 22 })

  useEffect(() => {
    function move(e) {
      x.set(e.clientX + 18)
      y.set(e.clientY + 18)
    }

    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [x, y])

  if (!label) return null

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      className="pointer-events-none fixed left-0 top-0 z-[200] rounded-full bg-primary px-4 py-2 text-xs font-bold text-black"
    >
      {label}
    </motion.div>
  )
}