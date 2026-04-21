/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        surface: "#ffffff",
        "surface-low": "#f5f5f5",
        "surface-lowest": "#ffffff",
        "surface-highest": "#e5e5e5",
        primary: "#000000",
        "primary-dim": "#1a1a1a",
        "accent": "#004ced",
        "on-surface": "#0a0a0a",
        "on-primary": "#ffffff",
        "outline-variant": "#000000",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
        mono: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["3.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "headline-sm": ["1.5rem", { lineHeight: "1.2" }],
        "title-lg": ["2.5rem", { lineHeight: "1.1" }],
        "body-md": ["0.875rem", { lineHeight: "1.6" }],
        "label-md": ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.04em" }],
        "label-sm": ["0.6875rem", { lineHeight: "1.4", letterSpacing: "0.08em" }],
      },
      borderRadius: {
        none: "0px",
      },
      boxShadow: {
        ambient: "0 20px 40px rgba(45, 52, 53, 0.06)",
      },
    },
  },
  plugins: [],
};