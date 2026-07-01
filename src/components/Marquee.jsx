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
    <section className="overflow-hidden py-16">
      <div className="-rotate-[4deg]">
        <div className="overflow-hidden border-y border-white/10 bg-primary py-5 text-black">
          <div className="marquee flex w-max gap-12 whitespace-nowrap">
            {[...items, ...items, ...items].map((item, index) => (
              <div key={index} className="flex items-center gap-12">
                <span className="text-xl font-black uppercase tracking-[-0.03em]">
                  {item}
                </span>
                <div className="h-2 w-2 rounded-full bg-black" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}