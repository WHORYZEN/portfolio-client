export function scrollToSection(id) {
  const element = document.querySelector(id)

  if (!element) return

  const y = element.getBoundingClientRect().top + window.scrollY - 100

  window.scrollTo({
    top: y,
    behavior: "smooth",
  })
}