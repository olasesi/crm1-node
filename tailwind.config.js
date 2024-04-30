/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx,vue}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx.vue}",
    "./layouts/*.{js,ts,jsx,tsx,mdx.vue}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx.vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
