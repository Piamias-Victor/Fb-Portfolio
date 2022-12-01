/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
        "fb-blue": "#1A73E3",
        "fb-gray": "#64676B",
        "fb-contrast": "#EFF2F5",
        "fb-default": "#F1F2F5",
        "fb-text-contrast": "#F1F2F5",
      },
    },
  },
};
