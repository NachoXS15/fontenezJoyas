/** @type {import('tailwindcss').Config} */
export default {
  content: [ ".dist/index.html",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "purplemain": "#0f0e45",
        "darkblue": "#244e73"
      }
    },
  },
  plugins: [],
}

