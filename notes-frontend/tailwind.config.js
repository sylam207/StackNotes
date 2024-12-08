/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'], // Ensure all source files are scanned
  theme: {
    extend: {
      colors: {
        greenPrimary: '#4CAF50', // Custom green
        bluePrimary: '#007BFF', // Custom blue
        backgroundLight: '#F5F5F5', // Light background
        textDark: '#333333', // Dark text
      },
    },
  },
  plugins: [],
};
