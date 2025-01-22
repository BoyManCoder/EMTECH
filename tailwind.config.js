/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#82D4BB', // Main color
        secondary: '#2B303A', // Secondary color
        third: '#EEE5E9', // Third color
        fourth: '#0B6E4F', // Fourth color
        soft: '#c1f5e5', //Soft-main color
      },
      fontFamily: {
        robotoSlab: ['"Roboto Slab"', 'serif'], // Added Roboto Slab font
      },
      height: {
        '100': '500px', // Added custom height of 200px for class h-100
      },
    },
  },
  plugins: [],
}
