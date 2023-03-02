/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "neon-white": "0px 0px 20px  #fff",
        "neon-blue": "0px 0px 20px #61d9fb",
        "neon-main": "0px 0px 7px #EDCBFE",
      },

      borderColor: {
        "neon-white": "#fff",
        "neon-blue": "#61d9fb",
        "neon-main": "#EDCBFE",
      },
    },
  },
  plugins: [],
}
