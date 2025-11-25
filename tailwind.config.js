/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'spice-orange': '#E37222',
        'royal-purple': '#7B3FF2',
        'hunter-green': '#4A9B5E',
        'mid-gray': '#808080',
        'off-black': '#1a1a1a',
      },
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
