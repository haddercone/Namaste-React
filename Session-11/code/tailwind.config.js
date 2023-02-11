/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "search-bg":
          "linear-gradient(45deg, rgba(0,0,0,0.4),rgba(255,255,255,.4)), url('./public/searchBackground.jpg')",
      },
    },
  },
  plugins: [],
};
