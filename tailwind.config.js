/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      colors: {
        'primary': '#378CE7',
        'secondary': '#2D2E32',
      },
      keyframes: {
        borderMain: {
          '0%, 100%': {
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            borderColor: '#2d2e32',
          },
          '50%': {
            borderRadius: '30% 60% 70% 40% / 70% 60% 30% 30%',
            borderColor: '#2d2e32',
          },
        },
      },
    },
    animation: {
      borderAnimation: 'borderMain 5s ease-in-out infinite',
    },
  },
  plugins: [],
}
