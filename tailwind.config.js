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
        customBrown: '#7B5F51',
        customLightBrown: '#B6A196',
        customOffWhite: '#F2EFEE',
        customGray: '#C2B5AF',
        customYellow: '#FFEDC4',
        customGold: '#DDC77E',
        customBlue: '#E8E2DF',
        customWhite: '#FFFFFF',
        customWhite84: 'rgba(255, 255, 255, 0.84)',
        customLightGray: '#F9F9F9',
        customWhiteFC: '#FCFCFC',
        customWhiteAbout: '#FBFBFA',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
        notoSerifKannada: ['Noto Serif Kannada', 'serif'],
      },
      spacing: {
        '18': '72px',
      },
      transitionProperty: {
        'max-height': 'max-height'
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.swiper-button-next, .swiper-button-prev': {
          color: '#7B5F51',
        },
        '.swiper-pagination-bullet-active': {
          backgroundColor: '#FFFFFF',
        },
        '.swiper-slide-prev, .swiper-slide-next': {
          transform: 'scale(0.9)',
          zIndex: '1',
        },
        '.swiper-pagination-bullet-custom': {
          backgroundColor: '#7B5F51',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
};
