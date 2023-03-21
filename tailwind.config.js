/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FFD750",

          secondary: "#3b82f6",

          accent: "#AB61F4",

          neutral: "#f3f4f6",

          "base-100": "#2b2b2b",

          info: "#ddd6fe",

          success: "#86efac",

          warning: "#fca5a5",

          error: "#F25050",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
