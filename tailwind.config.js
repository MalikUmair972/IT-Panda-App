/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '8px 5px 8px 05px rgba(0, 0, 0, 0.25)', 
        'custom2': '8px 5px 8px 05px rgba(225, 225, 225, 0.25)', 
      }
    },
  },
  plugins: [],
}

