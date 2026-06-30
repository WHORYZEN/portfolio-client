const items = [
  "React",
  "JavaScript",
  "Node.js",
  "Tailwind",
  "shadcn/ui",
  "MongoDB",
  "Clean UI",
  "Fast Apps",
]

export default function Marquee() {
  return (
    <section className="overflow-hidden py-24">
      <div className="-rotate-[6deg] translate-y-10">
        <div className="overflow-hidden border-y border-white/10 bg-white/[0.03] py-6">
          <div className="marquee flex w-max gap-12 whitespace-nowrap">
            {[...items, ...items, ...items].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-12"
              >
                <span className="text-xl font-semibold text-white/50">
                  {item}
                </span>

                <div className="h-2 w-2 rounded-full bg-primary" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}