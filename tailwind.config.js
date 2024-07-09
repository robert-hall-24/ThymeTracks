/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './client/**/*.tsx', "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        background: '#0D1323',
        tile: '#1D204B',
        profilePrimary: '#5746EA',
        font: '#FFFFFF',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
