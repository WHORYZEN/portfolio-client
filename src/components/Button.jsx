function Button({ children, variant = "primary", className = "", ...props }) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300"

  const variants = {
    primary:
      "bg-primary text-black hover:scale-105 hover:shadow-[0_0_40px_rgba(182,255,59,0.35)]",
    secondary:
      "border border-white/15 bg-white/5 text-white hover:bg-white/10",
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button