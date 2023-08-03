/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "760px",
      lg: "976px",
      xl: "1300px",
    },
    extend: {
      colors: {
        logoGreen: "#00df9a",
        bgBlack: "#000300",
      },
    },
  },
  plugins: [],
};
