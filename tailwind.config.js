module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'blue': '#3590f3',
      'sky': '#62bfed',
      'teal': '8fb8ed',
      'gray': '#d1d5db'
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
