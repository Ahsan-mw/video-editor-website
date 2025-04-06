/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // 👈 Required for Tailwind to scan your components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
