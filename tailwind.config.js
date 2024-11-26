/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        swish: {
          blue: 'var(--swish-blue)',
          'light-blue': 'var(--swish-light-blue)',
          success: 'var(--swish-success)',
          'success-dark': 'var(--swish-success-dark)',
        }
      },
      boxShadow: {
        'swish': '0 2px 8px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'scale-check': 'scaleCheck 0.5s ease-out forwards',
      }
    },
  },
  plugins: [],
}