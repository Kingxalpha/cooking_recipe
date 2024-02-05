/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/component/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "hero-img": "url('/public/HeroSection.png')",
          "subscribe-img": "url('/public/group.png')",
          "gluten-free": "url('/public/glutenfree.png')",
          "allergy-friend": "url('/public/allergyfriend.png')",
          "plant-based": "url('/public/plantbased.png')",

      },
      screens:{
        'sm': {'min': '330px', 'max': '767px'},
        'md': {'min': '768px', 'max': '1023px'},
        'lg': {'min':'1024px'}
      }
    },
  },
  plugins: [],
};
