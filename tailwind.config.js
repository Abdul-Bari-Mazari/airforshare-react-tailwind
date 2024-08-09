/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bodyBgLight: 'rgb(244, 244, 244)',
        navLinksLight: 'rgb(74, 74, 74)',
        themeColor: 'rgb(99, 142, 255)',
        thinTextLight: 'rgb(155, 155, 155)',
        boxLight: 'white',
        fileNameTextLight: '#4a4a4a',
        // Darkmode colors
        bodyBgDark: '#363636',
        navLinksDark: '#e9e9e9',
        boxDark: '#2d2d2d',
        darkText: 'white',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
