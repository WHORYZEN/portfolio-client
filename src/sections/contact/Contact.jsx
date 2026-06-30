import { useState } from "react"
import PremiumButton from "@/components/PremiumButton"
import { Mail } from "lucide-react"
import { motion } from "motion/react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus("")

    try {
      const response = await fetch("http://localhost:5050/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setStatus("Message sent successfully.")

        setFormData({
          name: "",
          email: "",
          message: "",
        })
      } else {
        setStatus(data.message || "Something went wrong.")
      }
    } catch (error) {
      setStatus("Unable to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8 }}
          className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 md:p-12"
        >
          <p className="mb-4 flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-primary">
            <Mail size={16} />
            Contact
          </p>

          <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.06em] md:text-7xl">
            Let’s build something sharp.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/60">
            Send a message and I’ll get back to you soon.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 md:p-12"
        >
          <div className="grid gap-5">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Your name"
              className="h-14 rounded-full border border-white/10 bg-black/30 px-6 text-white outline-none transition focus:border-primary"
            />

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email address"
              className="h-14 rounded-full border border-white/10 bg-black/30 px-6 text-white outline-none transition focus:border-primary"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project"
              rows="6"
              className="resize-none rounded-[1.5rem] border border-white/10 bg-black/30 p-6 text-white outline-none transition focus:border-primary"
            />

            <PremiumButton>
              {isSubmitting ? "Sending..." : "Send Message"}
            </PremiumButton>
            {status && (
              <p className="text-sm text-primary">
                {status}
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  )
}