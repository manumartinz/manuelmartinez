/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#fff',
        foreground: '#000',
        input: '#d1d5db', // gris claro
        ring: '#3b82f6', // azul (como ring de focus)
        'muted-foreground': '#6b7280' // gris más apagado para placeholder
      }
    },
  },
  plugins: [],
} 