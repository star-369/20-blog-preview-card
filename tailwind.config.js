/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./docs/**/*.html"],
  theme: {
    extend: {
      colors: {
        yellow: "var(--yellow)",
        white: "var(--white)",
        grey: "var(--grey)",
        black: "var(--black)",
      },
      fontFamily: { figtree: "var(--figtree)" },
    },
  },
  plugins: [],
};
