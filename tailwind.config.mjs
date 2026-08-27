/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        stone: "rgb(var(--color-stone) / <alpha-value>)",
        seal: "rgb(var(--color-seal) / <alpha-value>)",
        "seal-dark": "rgb(var(--color-seal-dark) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        paper: "rgb(var(--color-background) / <alpha-value>)",
        success: "rgb(var(--color-success) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-label)", "monospace"],
      },
      borderRadius: {
        xs: "2px",
        sm: "4px",
        md: "6px",
        lg: "10px",
      },
      boxShadow: {
        raised: "3px 3px 0 0 rgb(22 21 15 / 0.9)",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};
