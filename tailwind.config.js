/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a5632',
          dark: '#0f3d22',
          light: '#2d7a4a',
        },
        gold: {
          DEFAULT: '#c49a2a',
          light: '#d4af37',
          dark: '#a67c1a',
        },
        cream: {
          DEFAULT: '#faf8f2',
          dark: '#f0ece0',
        },
      },
      fontFamily: {
        urdu: ['"Noto Nastaliq Urdu"', '"Urdu Typesetting"', 'serif'],
      },
    },
  },
  plugins: [],
}
