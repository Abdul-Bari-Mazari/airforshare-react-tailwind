/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bodyBgLight: "rgb(244, 244, 244)",
        navLinksLight: "rgb(74, 74, 74)",
        themeColor: "rgb(99, 142, 255)",
        thinTextLight: "rgb(155, 155, 155)",
        boxLight: "#fff",
        // Darkmode colors
        bodyBgDark: "#363636",
        navLinksDark: "#e9e9e9",
        boxDark: "#2d2d2d",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
