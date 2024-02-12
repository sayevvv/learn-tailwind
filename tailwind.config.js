/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm : '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors : {
        brightPink: '#FF007F',
        brightYellow: '#FFFF00',
        brightGreen: '#00FF00',
        brightBlue: '#00FFFF',
        brightPurple: '#8000FF',
        brightOrange: '#FFA500',
        brightRed: '#FF0000',
        brightCyan: '#00FFCC',
        brightMagenta: '#FF00FF',
        brightLime: '#BFFF00',
        brightTeal: '#00FFB3',
        brightLavender: '#E6E6FA',
        lightgrayish : '#d8d8d8'
      }
    },
  },
  plugins: [],
}

