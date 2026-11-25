import type { Config } from "tailwindcss";

export default {
  darkMode:"class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "4rem",
        lg: "6rem",
      },
    },
    extend: {
      fontFamily: {
        heading: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        body: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "oklch(0.205 0 0)",
          foreground: "oklch(0.985 0 0)",
        },
        secondary: {
          DEFAULT: "oklch(0.97 0 0)",
          foreground: "oklch(0.205 0 0)",
        },
        accent: {
          DEFAULT: "oklch(0.97 0 0)",
          foreground: "oklch(0.205 0 0)",
        },
        muted: {
          DEFAULT: "oklch(0.97 0 0)",
          foreground: "oklch(0.556 0 0)",
        },
        mutedForeground: "oklch(0.556 0 0)",
        destructive: "oklch(0.577 0.245 27.325)",
        border: "oklch(0.922 0 0)",
        input: "oklch(0.922 0 0)",
        ring: "oklch(0.708 0 0)",
        chart: {
          1: "oklch(0.87 0 0)",
          2: "oklch(0.556 0 0)",
          3: "oklch(0.439 0 0)",
          4: "oklch(0.371 0 0)",
          5: "oklch(0.269 0 0)",
        },
        // Healthcare/orthopedic specific colors
        healthcare: {
          trust: "oklch(0.35 0.18 245)",
          trustLight: "oklch(0.88 0.08 240)",
          trustDark: "oklch(0.28 0.20 245)",
          healing: "oklch(0.48 0.14 145)",
          healingLight: "oklch(0.92 0.06 145)",
          warmth: "oklch(0.65 0.15 45)",
          warmthLight: "oklch(0.94 0.06 45)",
          bg: "oklch(0.99 0.005 220)",
          surface: "oklch(1 0 0)",
          border: "oklch(0.90 0.01 240)",
          text: "oklch(0.15 0.02 240)",
          textMuted: "oklch(0.45 0.02 240)",
          error: "oklch(0.55 0.22 25)",
          success: "oklch(0.48 0.14 145)",
          blue: "oklch(0.646 0.146 225.562)", // Trust blue
          lightBlue: "oklch(0.88 0.111 222.368)",
          darkBlue: "oklch(0.396 0.254 263.193)",
          white: "oklch(1 0 0)",
          lightGray: "oklch(0.97 0 0)",
          gray: "oklch(0.922 0 0)",
          darkGray: "oklch(0.577 0.05 256.768)",
          errorRed: "oklch(0.577 0.245 27.325)",
          successGreen: "oklch(0.445 0.162 143.736)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) * 0.8)",
        sm: "calc(var(--radius) * 0.6)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.5s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "float": "float 6s ease-in-out infinite",
        "pulse-subtle": "pulse-subtle 3s ease-in-out infinite",
      },
    },
  },
} satisfies Config;
