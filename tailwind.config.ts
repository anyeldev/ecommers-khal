import colors from 'tailwindcss/colors'
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        // Colors primary and secondary
        primary: {
          50: '#e9faf9',
          100: '#b9efec',
          200: '#98e7e3',
          300: '#68dcd6',
          400: '#4bd5ce',
          500: '#1ecbc2',
          600: '#1bb9b1',
          700: '#15908a',
          800: '#11706b',
          900: '#0d5551'
        },
        secondary: {
          50: '#e6effb',
          100: '#b3cef3',
          200: '#8eb7ed',
          300: '#5a96e4',
          400: '#3a81df',
          500: '#0962d7',
          600: '#0859c4',
          700: '#064699',
          800: '#053676',
          900: '#04295a'
        },
        // Base color
        dark: '#1f1f1f',
        white: '#fff',
        heading: '#1f1f1f',
        paragraphe: '#4b5563',
        label: '#1f1f1f',
        placeholder: '#9ca3af',
        // Base color by Tailwind
        table: colors.gray[900],
        backgroundDisabled: colors.gray[100],
        border: colors.gray[200],
        'input-border': colors.gray[300],
        icon: colors.gray[600]
      },
      fontSize: {
        h1: [
          '4rem',
          {
            fontWeight: '700', // bold
            lineHeight: '5rem',
            letterSpacing: '0.0375rem'
          }
        ],
        h2: [
          '3rem',
          {
            fontWeight: '700',
            lineHeight: '2rem',
            letterSpacing: '0.035rem'
          }
        ],
        h3: [
          '2.5rem',
          {
            fontWeight: '700',
            lineHeight: '3.5rem',
            letterSpacing: '0.05rem'
          }
        ],
        h4: [
          '2rem',
          {
            fontWeight: '700',
            lineHeight: '2.75rem',
            letterSpacing: '0rem'
          }
        ],
        h5: [
          '1.5rem',
          {
            fontWeight: '400',
            lineHeight: '2.5rem',
            letterSpacing: '0rem'
          }
        ],
        h6: [
          '1.25rem',
          {
            fontWeight: '600',
            lineHeight: '2rem',
            letterSpacing: '0rem'
          }
        ],
        p: [
          '1.25rem',
          {
            fontWeight: '500',
            lineHeight: '2rem',
            letterSpacing: '0rem'
          }
        ],
        div: [
          '1rem',
          {
            fontWeight: '400',
            lineHeight: '1.5rem',
            letterSpacing: '0rem'
          }
        ],
        span: [
          '0.75rem',
          {
            fontWeight: '600',
            lineHeight: '1.5rem',
            letterSpacing: '0rem'
          }
        ]
      },
      fontWeight: {
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700'
      },

      screens: {
        xs: '360px', // min-width - all
        sm: '575px',
        dm: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
        '3xl': '1600px',
        '4xl': '1920px'
      },
      container: {
        center: true,
        screens: {
          xs: '360px', // max-width - all
          sm: '575px',
          dm: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1440px',
          '3xl': '1600px',
          '4xl': '1920px'
        },
        padding: {
          DEFAULT: '0rem',
          xs: '1rem',
          sm: '2rem',
          dm: '3rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
          '3xl': '7rem',
          '4xl': '8rem'
        }
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate')]
}
export default config
