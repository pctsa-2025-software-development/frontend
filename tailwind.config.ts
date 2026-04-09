import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          base: "#faf8f5",
          layer: "#ffffff",
          deep: "#f3f0eb",
        },
        brand: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
        },
        accent: {
          coral: "#f87171",
          amber: "#f59e0b",
          rose: "#fb7185",
        },
      },
      fontFamily: {
        sans: [
          "Plus Jakarta Sans",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
        display: ["Outfit", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        handwritten: ["Caveat", "cursive"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
        "card-hover":
          "0 10px 25px -5px rgba(0,0,0,0.08), 0 4px 10px -5px rgba(0,0,0,0.04)",
        "card-lg":
          "0 20px 40px -12px rgba(0,0,0,0.1), 0 4px 12px -2px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [],
} satisfies Config;
