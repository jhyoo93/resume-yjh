/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: { sans: ['Pretendard', 'ui-sans-serif', 'system-ui'] },
      colors: {
        brand: {
          50:'#f2f7ff',100:'#e6f0ff',200:'#cfe1ff',300:'#a8c7ff',400:'#7ba7ff',
          500:'#4f86ff',600:'#2f6cf5',700:'#1f55cc',800:'#1a47a6',900:'#173d8a'
        }
      },
      boxShadow:{ soft:'0 10px 30px rgba(2,6,23,.06)' }
    },
  },
  plugins: [],
};
