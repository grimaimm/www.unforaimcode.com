/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        spin: 'spin 1s linear infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      maxWidth: {
        1080: "1080px",
        960: "960px",
      },
      fontFamily: {
        sans: ["var(--onestSans-font)"],
        sora: ["var(--soraSans-font)"],
        onest: ["var(--onestSans-font)"],
        code: ["var(--firaCode-font)"],
        emoji: ["Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"],
      },
      colors: {
        // charcoalDark: {
        //   100: "var(--bg-charcoal-100)",
        //   200: "var(--bg-charcoal-200)",
        //   300: "var(--bg-charcoal-300)",
        //   400: "var(--bg-charcoal-400)",
        //   500: "var(--bg-charcoal-500)",
        // },
        // charcoalLight: {
        //   100: "var(--bg-charcoal-light-100)",
        //   200: "var(--bg-charcoal-light-200)",
        //   300: "var(--bg-charcoal-light-300)",
        //   400: "var(--bg-charcoal-light-400)",
        //   500: "var(--bg-charcoal-light-500)",
        // },
        charcoal: {
          light: {
            100: "rgb(210, 210, 210)" /*#d2d2d2*/,
            200: "rgb(220, 220, 220)" /*#dcdcdc*/,
            300: "rgb(230, 230, 230)" /*#e6e6e6*/,
            400: "rgb(240, 240, 240)" /*#f0f0f0*/,
            500: "rgb(250, 250, 250)" /*#fafafa*/,
          },
          dark: {
            100: "rgb(40, 40, 40)" /*#272728*/,
            200: "rgb(50, 50, 50)" /*#313131*/,
            300: "rgb(30, 30, 30)" /*#1D1D1D*/,
            400: "rgb(20, 20, 20)" /*#141414*/,
            500: "rgb(10, 10, 10)" /*#0A0A0A*/,
          },
        },
      },
    },
  },
  plugins: [],
  safelist: [
    // TEAL COLORS BLOCKQUOTE
    "text-teal-700",
    "dark:text-teal-400",
    "border-l-teal-700",
    "dark:border-l-teal-400",
  ],
};
