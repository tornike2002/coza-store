/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1170px",
        },
      },
      colors: {
        navlinksHover: "#8994DE",
        navlinks: "#333",
        productName: "#00000073"
      },
      backgroundColor: {
        burger: "#717FE0",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Playfair: ["Playfair Display SC", "serif"],
      },
    },
  },
  plugins: [],
};
