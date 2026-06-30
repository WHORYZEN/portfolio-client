import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import Magnetic from "@/components/Magnetic"

export default function PremiumButton({ children = "Let's Collaborate" }) {
  return (
    <Magnetic>
      <Button className="group relative h-12 w-fit cursor-pointer overflow-hidden rounded-full bg-primary px-6 pe-14 ps-6 text-sm font-medium text-black transition-all duration-500 hover:pe-6 hover:ps-14">
        <span className="relative z-10 transition-all duration-500">
          {children}
        </span>

        <div className="absolute right-1 flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
          <ArrowUpRight size={16} />
        </div>
      </Button>
    </Magnetic>
  )
}