/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FABE28',
        secondary: '#0C3C84',
        negative: '#E11900',
        positive: '#048848',
        background: {
          primary: '#FFFFFF',
          secondary: '#F6F6F6',
          tertiary: '#EEEEEE',
        },
        content: {
          primary: '#202020',
          secondary: '#545454',
          tertiary: '#6B6B6B',
        },
        border: {
          opaque: '#E2E2E2',
          transparent: '#00000014',
          tertiary: '#000000',
        },
      },
    },
  },
  plugins: [],
}
