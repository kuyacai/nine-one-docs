module.exports = {
  prefix: 'tw-',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './docs/**/*.{md,mdx}',
    './blog/**/*.{md,mdx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
  },
  screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1142px',
  },
  fontFamily: {
      mulish: ['Mulish', 'sans-serif'],
      reey: ['reey', 'sans-serif'],
  },
  colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#08111F',
      primary: '#47BDFF',
      secondary: '#B476E5',
      gray: {
          DEFAULT: '#7780A1',
          dark: '#1C2331',
      },
  },
  extend: {
      animation: {
          'spin-slow': 'spin 5s linear infinite',
      },
      backgroundImage: {
          'map': "url('/static/images/map.png')",
          'banner-img': "url('banner-img.png')",
          'color-img': "url('color.png')",
          'inner-page-hero-bg-img': "url('inner-page-hero-bg.png')",
          'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
      typography: ({ theme }) => ({
          DEFAULT: {
              css: {
                  color: theme('colors.gray'),
                  fontSize: '1.125rem',
              },
          },
      }),
  },
  },
  plugins: [],
}