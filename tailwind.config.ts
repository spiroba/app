
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#0E1116", // Dark background like in the image
        foreground: "#FFFFFF",
        muted: {
          DEFAULT: "#1A1D23", // Slightly lighter than background for cards
          foreground: "#A1A1AA",
        },
        accent: {
          DEFAULT: "#33C3F0", // Bright blue accent color
          foreground: "#FFFFFF",
        },
        neon: {
          blue: "#33C3F0",
          purple: "#8B5CF6",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease-out",
        "fade-down": "fadeDown 0.5s ease-out",
        "pulse-slow": "pulseGlow 3s infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 8px 2px rgba(51, 195, 240, 0.2)" },
          "50%": { boxShadow: "0 0 15px 5px rgba(51, 195, 240, 0.4)" },
        },
      },
      boxShadow: {
        neon: "0 0 5px 2px rgba(51, 195, 240, 0.3), 0 0 10px rgba(51, 195, 240, 0.2), inset 0 0 5px rgba(51, 195, 240, 0.05)",
        "neon-strong": "0 0 7px 3px rgba(51, 195, 240, 0.5), 0 0 15px rgba(51, 195, 240, 0.3), inset 0 0 7px rgba(51, 195, 240, 0.1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
