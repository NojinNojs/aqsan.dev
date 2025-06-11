import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function smoothScrollTo(elementId: string) {
  const element = document.getElementById(elementId)
  if (element) {
    const offset = 80 // Adjust this value based on your navbar height
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }
}

export function handleSmoothScroll(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault()
  const href = e.currentTarget.getAttribute("href")
  if (href && href.startsWith("#")) {
    smoothScrollTo(href.substring(1))
  }
}
