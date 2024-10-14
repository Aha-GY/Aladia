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
      backgroundImage: {
        gradient:
          "linear-gradient(15deg, #fff0 9.55%, #fff0 30.28%, #fff6, #fff0 41.58%, #fff0 59.02%, #fff 67.97%, #fff0 74.56%, #fff)",
      },
    },
  },
  plugins: [],
};
