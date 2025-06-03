/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": { width: "0%", visibility: "hidden" },
          "100%": { width: "100%" }
        },
        blink: {
          "50%": { borderColor: "transparent" },
          "100%": { borderColor: "white" }
        }
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
        test: "pulse 2s infinite"
      }
    },
  },
  plugins: [],
}
