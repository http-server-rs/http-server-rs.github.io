/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        body: ['Wix Madefor Text', 'sans'],
        mono: ['Fira Code', 'monospace']
      }
    },
  },
  plugins: [],
}

