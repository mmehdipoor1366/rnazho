import type { Config } from 'tailwindcss'
import rtl from 'tailwindcss-rtl'

const config: Config = {
  content: ['./src/**/*.{ts,tsx,js,jsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0066FF',
        accent: '#22C55E',
        muted: '#6B7280',
        bg: '#F9FAFB',
        surface: '#FFFFFF'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '4rem'
        }
      },
      fontFamily: {
        sans: ['IRANSans', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        card: '0 6px 18px rgba(15,23,42,0.06)'
      }
    }
  },
  plugins: [rtl]
}

export default config
