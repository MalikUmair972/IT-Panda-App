/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInTransform: {
          '0%': { opacity: '0', transform: 'translateY(30px)' }, // Start position
          '100%': { opacity: '1', transform: 'translateY(0)' }, // End position
        },
      },
      animation: {
        fadeInTransform: 'fadeInTransform 1s ease-in-out forwards', // Ensure final state is retained
      },
    },
  },
  plugins: [],
}
