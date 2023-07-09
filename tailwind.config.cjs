const forms = require('@tailwindcss/forms');
const typography = require('@tailwindcss/typography');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        discord: {
          200: '#5B64E9',
          400: '#7289DA'
        }
      },
      fontFamily: {
        body: ['Wix Madefor Text', 'sans'],
        mono: ['Fira Code', 'monospace']
      }
    }
  },
  plugins: [forms, typography]
};
