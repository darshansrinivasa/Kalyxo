/** @type {import('tailwindcss').Config} */
/**
 * Tailwind v4: design tokens (colors, shadows, semantic aliases) are defined in
 * `src/index.css` under `@theme` so they work with `@tailwindcss/vite` and `@apply`.
 * This file keeps content paths, dark mode, and font family extension.
 */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
