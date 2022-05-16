module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    colors: {
      white: '#ffffff',
      gray: "#F0F0F0",
      primary: '#101f3c',
      secondary: '#fa510f',
      'primary-light': '#d2dbec',
      'alert-warning': {
        'dark': '#914017',
        'light': '#FCE590'
      },
      'alert-danger': {
        'dark': '#7E1E20',
        'light': '#FDCACB',
      },
      'alert-success': {
        'dark': '#17532F',
        'light': '#BDF6D1',
      },
      'alert-primary': {
        'dark': '#203D88',
        'light': '#C0DCFD',
      }
    }
  },
  plugins: ['flowbite/plugin'],
}
