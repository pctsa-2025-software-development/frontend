import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          base: "#0c0f1a",
          layer: "#111527",
          deep: "#080b14",
        },
        brand: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
        },
        accent: {
          violet: "#9b87f5",
          fuchsia: "#fb7185",
          amber: "#f59e0b",
        },
      },
      fontFamily: {
        sans: [
          "Newsreader",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
        display: ["Syne", "Newsreader", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "mesh-1":
          "radial-gradient(at 40% 20%, rgba(34,211,238,0.34) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(155,135,245,0.22) 0px, transparent 45%), radial-gradient(at 0% 50%, rgba(251,113,133,0.2) 0px, transparent 50%)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(4, 8, 24, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
        "glass-lg":
          "0 25px 50px -12px rgba(4, 8, 24, 0.52), inset 0 1px 0 rgba(255, 255, 255, 0.14)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
} satisfies Config;
