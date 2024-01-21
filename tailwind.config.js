/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  layers: {
    components: true,
    // Add other layers if needed
  },
  plugins: [ require('@tailwindcss/forms'),],
}