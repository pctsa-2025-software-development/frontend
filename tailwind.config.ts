import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        accent: {
          violet: "#8b5cf6",
          fuchsia: "#d946ef",
          amber: "#f59e0b",
        },
      },
      fontFamily: {
        sans: [
          "Inter Variable",
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: ["Inter Variable", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "mesh-1":
          "radial-gradient(at 40% 20%, rgba(14,165,233,0.35) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(139,92,246,0.25) 0px, transparent 45%), radial-gradient(at 0% 50%, rgba(217,70,239,0.2) 0px, transparent 50%)",
        "mesh-2":
          "radial-gradient(ellipse at top, rgba(14,165,233,0.15), transparent 60%)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
        "glass-lg":
          "0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.12)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
} satisfies Config;
