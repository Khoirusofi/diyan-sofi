/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        mist: "#EBD9D4",
        blush: "#F3E6E2",
        plum: "#3A2230",
        sage: "#6F876F",
        rosewood: "#9C5B67",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        body: ["Jost", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
