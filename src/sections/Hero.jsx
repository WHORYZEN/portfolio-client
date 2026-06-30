import PremiumButton from "@/components/PremiumButton"
import { motion } from "motion/react"

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28">
      <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/20 blur-[130px]" />
      <div className="absolute bottom-0 right-0 h-[440px] w-[440px] rounded-full bg-secondary/25 blur-[130px]" />
      <div className="absolute bottom-24 left-10 h-[260px] w-[260px] rounded-full bg-accent/15 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-xl"
        >
          MERN Stack Developer · React · Node.js · UI Engineer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="max-w-6xl text-5xl font-black leading-[0.95] tracking-[-0.07em] md:text-7xl lg:text-8xl"
        >
          Designing and building seamless digital products.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-7 max-w-2xl text-lg leading-8 text-white/60"
        >
          I create clean, scalable and high-performing web applications using
          React, JavaScript, Tailwind, shadcn/ui, Node.js and modern frontend
          architecture.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <PremiumButton>View Projects</PremiumButton>
          <PremiumButton>Let&apos;s Collaborate</PremiumButton>
        </motion.div>
      </div>
    </section>
  )
}