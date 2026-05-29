/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        'medino-brown': '#4A2C1D',
        'cream': '#FDFBF7',
        'cream-dark': '#F5EFE6',
        'primary': '#AE946D', // Muted Gold/Beige
        'canvas': '#FEFDFB',
        'border-soft': '#EFE9E1',
        'text-main': '#4A2C1D', // Use Medino Brown for main text
      },
      borderRadius: {
        'bento': '32px',
        '3xl': '32px',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        'premium': '0 8px 30px rgba(74, 44, 29, 0.05)',
      }
    },
  },
  plugins: [],
}
