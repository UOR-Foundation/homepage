// Function to combine Tailwind classes efficiently
export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ")
}

// Precomputed common class combinations
export const COMMON_CLASSES = {
  container: "max-w-7xl mx-auto px-4 sm:px-6",
  section: "py-12 md:py-24",
  heading: "text-3xl md:text-5xl font-bold",
  subheading: "text-lg md:text-xl text-white/80",
  button: "rounded-full px-5 py-4 text-base font-medium",
  card: "bg-black-200 p-8 rounded-2xl border border-white/10",
  gradientText: "gradient-text",
}
