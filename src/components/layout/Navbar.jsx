import { navigation } from "@/data/navigation"
import PremiumButton from "@/components/PremiumButton"
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full px-6 py-5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/30 px-6 py-3 backdrop-blur-2xl">
        <a href="#" className="text-lg font-black tracking-tight">
          KS.
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="text-sm text-white/60 transition hover:text-white"
            >
              {item.title}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <PremiumButton>Hire Me</PremiumButton>
        </div>

        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu size={22} />
          </SheetTrigger>

          <SheetContent className="border-white/10 bg-black text-white">
            <div className="mt-12 flex flex-col gap-6">
              {navigation.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="text-2xl font-semibold tracking-tight text-white/80"
                >
                  {item.title}
                </a>
              ))}

              <PremiumButton>Hire Me</PremiumButton>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}