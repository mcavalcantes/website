/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light": {
          "text": "#262521",
          "border": "#C6AF96",
          "hover": "#F4E0CD",
          "background": "#FFF4E6",
        },
        "dark": {
          "text": "#FFF4E6",
          "border": "#776856",
          "hover": "#3E382E",
          "background": "#262521",
        },
      },
    },
  },
  plugins: [],
}

