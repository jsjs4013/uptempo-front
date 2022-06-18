module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(80deg)" }
        },
        wiggle_rev: {
          "0%": { transform: "rotate(80deg)" },
          "100%": { transform: "rotate(0deg)" }
        }
      },
      animation: {
        wiggle: "wiggle 90ms ease-in-out",
        wiggle_rev: "wiggle_rev 90ms ease-in-out"
      }
    },
  },
}