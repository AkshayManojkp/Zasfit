/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-orange': '#FF7A00',
        'dark-black': '#000000',
      },
      blur: {
        xs: '2px',
        sm: '4px',
        md: '12px',
        lg: '24px',
        xl: '40px',
      },
      boxShadow: {
        'neon-glow': '0 0 20px rgba(255, 122, 0, 0.7)',
      },
    },
  },
  plugins: [],
}
