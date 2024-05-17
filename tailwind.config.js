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
        dark: "#110734",
      },
    },
  },
  plugins: [],
};
