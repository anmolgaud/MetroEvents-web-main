/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        Decorative: ["Playfair Display", "serif"],
      },
      colors: {
        "background-0": "#0B0E14",
        "background-1": "#191E29",
        "accent-1": "#E1E8F5",
        "accent-2": "#6f6f6f",
        "accent-3": "#262626",
        "elevated-0": "#ff1354",
        "elevated-1": "#a06be3",
      },
      backgroundImage: {
        Minimal: "url(/backgrounds/Minimal.png)",
        Holiday: "url(/backgrounds/Holiday.png)",
        Abstract: "url(/backgrounds/Abstract.png)",
        Quantum: "url(/backgrounds/Quantum.jpg)",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
