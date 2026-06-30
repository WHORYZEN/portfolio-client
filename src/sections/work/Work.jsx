import { projects } from "@/data/projects"
import { ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"
import TextReveal from "@/components/TextReveal"

export default function Work() {
    return (
        <section id="work" className="px-6 py-28">
            <div className="mx-auto max-w-7xl">
                <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
                            Selected Work
                        </p>
                        <TextReveal>
                            <h2 className="max-w-3xl text-4xl font-black tracking-[-0.05em] md:text-6xl">
                                Projects built with clarity, speed and purpose.
                            </h2>
                        </TextReveal>
                    </div>

                    <p className="max-w-md text-white/55">
                        A curated collection of interfaces, products and full-stack web
                        applications.
                    </p>
                </div>

                <div className="grid gap-5">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-120px" }}
                            transition={{ duration: 0.7, delay: index * 0.08 }}
                            className="group relative grid cursor-pointer overflow-hidden gap-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition-all duration-500 hover:border-primary/40 hover:bg-white/[0.07] md:grid-cols-[1.2fr_1fr_auto]"
                        >
                            <div
                                className={`absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-br ${project.color}`}
                            />
                            <div className="relative z-10">
                                <p className="mb-3 text-sm text-white/45">{project.year}</p>
                                <h3 className="text-3xl font-bold tracking-[-0.04em]">
                                    {project.title}
                                </h3>
                            </div>

                            <div className="relative z-10">
                                <p className="mb-3 text-sm text-primary">{project.category}</p>
                                <p className="text-white/55">{project.description}</p>
                            </div>

                            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition-all duration-500 group-hover:rotate-45 group-hover:bg-primary">
                                <ArrowUpRight size={18} />
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}