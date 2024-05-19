/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      spacing: {
        0: "0",
        0.5: "0.5rem",
        1: "1rem",
        1.5: "1.5rem",
        2: "2rem",
        2.5: "2.5rem",
        3: "3rem",
        3.5: "3.5rem",
        4: "4rem",
        5: "5rem",
        6: "6rem",
        7: "7rem",
        8: "8rem",
        9: "9rem",
        10: "10rem",
      },
      colors: {
        primary: "#270A4B",
        secondary: "#E8C36D",
        dark: "black",
        accent: "#f08a59",
      },
      fontSize: {
        2.4: "2.4rem",
        3: "3rem",
        3.6: "3.6rem",
        4: "4rem",
        5: "5rem",
        6: "6rem",
        7: "7rem",
        8: "8rem",
        9: "9rem",
        10: "10rem",
        11: "11rem",
        12: "12rem",
        13: "13rem",
        14: "14rem",
        15: "5rem",
      },
      dropShadow: {
        md: "1px 1px 20px rgba(0, 0, 0, .75)",
        lg: "5px 5px 15px rgba(0, 0, 0, 1)",
      },
      borderRadius: {
        0: "0",
        1: "1rem",
        1.5: "1.5rem",
        2: "2rem",
        3: "3rem",
        4: "4rem",
        5: "5rem",
        6: "6rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
