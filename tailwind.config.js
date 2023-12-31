/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: "2rem",
    },
    extend: {},
    colors: {
      text: "#d5e6f6",
      background: "#030a11",
      primary: "#d58234",
      secondary: "#0d273f",
      accent: "#d88a41",
      success: "#68B984",
      danger: "#C70039",
    },
  },
  plugins: [],
};
