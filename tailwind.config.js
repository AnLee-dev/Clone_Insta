/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode:'jit',
  theme: {
    extend: {
      colors: {
        c1: "#F2F3F5",
        c2: "cc",
        c3:"#8E8E8E",
        c4:"#262626",
        c5:"#0095F6",
        c6:"#ED4956",
        c7:"#C7C7C7",
        c8:'#cbcbcb'
      },
      dropShadow: {
        xl: "0 0 5px rgba(0, 0, 0, 0.0975)",
      },
      screens:{
        'mb':'360px',
        'ssm': '470px',
    },
    },

  },
  plugins: [],
}