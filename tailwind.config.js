/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#1E88E5',
          600: '#1976D2',
        },
        light: '#F5F9FF',
      }
    },
  },
  plugins: [],
}