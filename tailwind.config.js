/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Blue: "hsl(231, 69%, 60%)", 
        Red: "hsl(0, 94%, 66%)"
      }
    },
  },
  plugins: [],
}

