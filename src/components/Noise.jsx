export default function Noise() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[1] opacity-[0.04]">
      <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:4px_4px]" />
    </div>
  )
}