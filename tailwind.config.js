/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D5A27',     // Forest Green
        secondary: '#F5F5DC',   // Beige
        accent: '#A3C585',      // Sage Green
        dark: '#1a1a1a',        // Deep Black
      },
    },
  },
  plugins: [],
}
