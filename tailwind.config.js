/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in',
      },
      colors: {
        'dark-blue': '#0F172A',
        'light-yellow': '#6D1060',
        'card-bg': '#1E293B',
        'text-gray': '#E5E7EB',
      },
    },
  },
  plugins: [],
}
