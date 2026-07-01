import { useState } from "react"
import { faqs } from "@/data/faqs"
import TextReveal from "@/components/TextReveal"
import { motion, AnimatePresence } from "motion/react"
import { Plus } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="px-6 py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <p className="mb-6 w-fit rounded-full border border-white/10 px-4 py-2 text-sm text-white/70">
            Common Asked
          </p>

          <TextReveal>
            <h2 className="text-6xl font-black tracking-[-0.08em] md:text-8xl">
              FAQs
            </h2>
          </TextReveal>

          <div className="mt-24 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
            <p className="text-lg leading-8 text-white/60">
              Can&apos;t find what you&apos;re looking for? Send me a message
              through the contact form and I&apos;ll respond as soon as possible.
            </p>

            <div className="mt-8">
              <p className="text-sm uppercase text-white">Response Time</p>
              <p className="mt-2 text-white/50">Under 24h</p>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <motion.div
                key={faq.question}
                layout
                transition={{
                  layout: {
                    duration: 0.65,
                    ease: [0.76, 0, 0.24, 1],
                  },
                }}
                className={`overflow-hidden rounded-[1.5rem] border px-6 transition-colors duration-500 ${
                  isOpen
                    ? "border-primary bg-primary text-black"
                    : "border-white/10 bg-white/[0.03] text-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 py-7 text-left text-xl font-semibold"
                >
                  <span>{faq.question}</span>

                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{
                      duration: 0.45,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                    className="shrink-0"
                  >
                    <Plus size={22} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                        y: -8,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        y: -8,
                      }}
                      transition={{
                        duration: 0.65,
                        ease: [0.76, 0, 0.24, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <p className="pb-7 text-base leading-7 text-black">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}