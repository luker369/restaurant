/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'text-red-500', 'bg-black', 'p-8', 'text-xl'],
  theme: {
    extend: {
      colors: {
        main: "#DCCA87"
    },
    },
    
    screens: {
      ss: "480px",
      sm: "568px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px"
    }
  },
  plugins: [],
}

