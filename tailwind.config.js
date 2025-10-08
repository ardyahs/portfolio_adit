/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1f2937",
        secondary: "#f9f9f9",
      },
      animation: {
        "background-shine": "background-shine 2s linear infinite",
      },
      keyframes: {
        "background-shine": {
          "from": {
            backgroundPosition: "0 0",
          },
          "to": {
            backgroundPosition: "-200% 0",
          },
        },
      },
    },
  },
  plugins: [],
};
