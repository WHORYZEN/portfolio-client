import { faqs } from "@/data/faqs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import TextReveal from "@/components/TextReveal"
import { motion } from "motion/react"

export default function FAQ() {
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

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7 }}
        >
          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="space-y-5"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="
                  group
                  overflow-hidden
                  rounded-[1.5rem]
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-6
                  transition-all
                  duration-500
                  ease-out
                  data-[state=open]:border-primary
                  data-[state=open]:bg-primary
                "
              >
                <AccordionTrigger
                  className="
                    py-7
                    text-left
                    text-xl
                    font-semibold
                    text-white
                    transition-colors
                    duration-500
                    ease-out
                    hover:no-underline
                    group-data-[state=open]:text-black
                  "
                >
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent
                  className="
                    overflow-hidden
                    pb-7
                    text-base
                    leading-7
                    text-white/60
                    transition-all
                    duration-500
                    ease-out
                    data-[state=closed]:animate-accordion-up
                    data-[state=open]:animate-accordion-down
                    group-data-[state=open]:text-black
                  "
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}