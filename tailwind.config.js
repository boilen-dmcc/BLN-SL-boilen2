module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "575px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    extend: {
      maxWidth: {
        layout: "1304px",
        "layout-wide": "1440px",
        "layout-narrow": "800px",
      },
      colors: {
        // BLN brand red (sampled from the BLN Energy FZCO logo, #C10E12),
        // replacing Tailwind's default red-* ramp so every red-* utility
        // class used throughout this site (buttons, accents, badges,
        // hovers) matches BLN's brand instead of Boilen's original
        // green/emerald accent.
        red: {
          50: "#FEF1F1",
          100: "#FDDEDE",
          200: "#F8BFC0",
          300: "#F18E8F",
          400: "#EB474A",
          500: "#DA1619",
          600: "#C20F12",
          700: "#9E1012",
          800: "#7F1012",
          900: "#5F1112",
          950: "#370C0C",
        },
        // BLN brand navy (#0B2560), used in place of Boilen's original
        // slate-900 (#0F172A) dark sections (hero, footer, dark CTA
        // bands, project cards).
        navy: {
          DEFAULT: "#0B2560",
          deep: "#081A42",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
};
