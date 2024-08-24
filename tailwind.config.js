/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        letter: "#212529",
        primary: "#e5e5e5",
        body: "#edede9",
        secondary: "#8d99ae",
      },
      screens: {
        rd: "922px",
      },
      maxWidth: {
        "88": "22rem",
        "1k": "57.625rem",
        "2k": "77.5rem",
        "520": "32.5rem",
        "650": "40.625rem",
        "screen-20": "calc(100vw - 70px)"
      },
    },
  },
  plugins: [],
};
