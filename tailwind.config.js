/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
    },
    colors: {
      white: "#FFFFFF",
      gray: "#F9FAFB",
      red: "#EF4444",
      tan: "#FEF1E6",
      orange: "#FFB085",
      blue: "#90AACB",
    },
  },
  plugins: [],
};
