
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'salesforce-blue': '#00a1e0',
        'salesforce-dark-blue': '#032d60',
        'salesforce-light-blue': '#1b96ff',
      },
    },
  },
  plugins: [],
}
  