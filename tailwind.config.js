/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black: "#fffff",
        primaryLight: "#EFE6DB",
        secondLight: "#EFE6DB",
        dark: "#202023",
      },
      spacing: {
        maxW: "980px",
      },
    },
  },
  plugins: [],
};
