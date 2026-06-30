import { motion, useMotionValue, useSpring } from "motion/react"
import { useEffect } from "react"

export default function CursorGlow() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 })

  useEffect(() => {
    function handleMouseMove(e) {
      mouseX.set(e.clientX - 160)
      mouseY.set(e.clientY - 160)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mouseX, mouseY])

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
      }}
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-80 w-80 rounded-full bg-primary/10 blur-[90px] md:block"
    />
  )
}