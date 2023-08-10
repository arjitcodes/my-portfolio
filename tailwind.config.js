/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'bgi': "url('/sh2.svg')",
      },
      fontFamily:{
        roboto:['Roboto', 'sans-serif'],
        poppins:['Poppins', 'sans-serif']
      },
      colors:{
        'main-text-color':'rgb(var(--text-color-main-rgb))',
        'secondery-text-color':'rgb(var( --text-color-secondery-rgb))',
        'input-text-color':'rgb(var( --input-text-color))',
        'input-border-color-1':'rgb(var(--input-border-color-1))',
        'blog-main-color':'rgb(var(--blog-main-rgb))',
        'blog-heaing-color':'rgb(var(--blog-heading-rgb))',
        'blog-title-color':'rgb(var(--blog-title-rgb))',
        'nav-menu-bar-color':'rgb(var(--nav-menu-bar-rgb))',
        'placeholder-color' : 'rgb(var(--input-placeholder-color))'
      }
    },
  },
  plugins: [],
}
