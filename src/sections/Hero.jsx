import PremiumButton from "@/components/PremiumButton"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { scrollToSection } from "@/lib/scrollToSection"

export default function Hero({ startAnimation }) {
  const heroRef = useRef(null)
  const badgeRef = useRef(null)
  const titleRef = useRef(null)
  const textRef = useRef(null)
  const buttonsRef = useRef(null)

  useEffect(() => {
    if (!startAnimation) return

    const ctx = gsap.context(() => {
      gsap.set(
        [
          badgeRef.current,
          titleRef.current,
          textRef.current,
          buttonsRef.current,
        ],
        {
          opacity: 0,
          y: 40,
        }
      )

      const tl = gsap.timeline({
        defaults: {
          ease: "power4.out",
          duration: 1,
        },
      })

      tl.to(badgeRef.current, {
        y: 0,
        opacity: 1,
      })
        .to(
          titleRef.current,
          {
            y: 0,
            opacity: 1,
          },
          "-=0.7"
        )
        .to(
          textRef.current,
          {
            y: 0,
            opacity: 1,
          },
          "-=0.6"
        )
        .to(
          buttonsRef.current,
          {
            y: 0,
            opacity: 1,
          },
          "-=0.6"
        )
    }, heroRef)

    return () => ctx.revert()
  }, [startAnimation])

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-32"
    >
      <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/20 blur-[130px]" />
      <div className="absolute bottom-0 right-0 h-[440px] w-[440px] rounded-full bg-secondary/25 blur-[130px]" />
      <div className="absolute bottom-24 left-10 h-[260px] w-[260px] rounded-full bg-accent/15 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <p
          ref={badgeRef}
          className="mb-6 w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 opacity-0 backdrop-blur-xl"
        >
          MERN Stack Developer · React · Node.js · UI Engineer
        </p>

        <h1
          ref={titleRef}
          className="max-w-6xl text-5xl font-black leading-[0.95] tracking-[-0.07em] opacity-0 md:text-7xl lg:text-8xl"
        >
          I build clean web products with code, clarity and motion.
        </h1>

        <p
          ref={textRef}
          className="mt-7 max-w-2xl text-lg leading-8 text-white/60 opacity-0"
        >
          A software developer focused on React, JavaScript, Tailwind, shadcn/ui and Node.js — building modern portfolio websites, dashboards and full-stack web experiences.
        </p>

        <div ref={buttonsRef} className="mt-10 flex flex-wrap gap-4 opacity-0">
          <div onClick={() => scrollToSection("#work")}>
  <PremiumButton>View Projects</PremiumButton>
</div>
          <div onClick={() => scrollToSection("#contact")}>
  <PremiumButton>Let&apos;s Collaborate</PremiumButton>
</div>
        </div>
        <div className="mt-14 grid max-w-3xl gap-4 sm:grid-cols-3">
          {[
            ["Available", "Open to work"],
            ["Location", "India · Remote"],
            ["Focus", "MERN Stack"],
          ].map(([title, value]) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl"
            >
              <p className="text-sm text-white/40">{title}</p>
              <p className="mt-2 font-semibold text-white/80">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}