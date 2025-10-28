import type { Config } from 'tailwindcss'
import rtl from 'tailwindcss-rtl'

const config: Config = {
  content: ['./src/**/*.{ts,tsx,js,jsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0066FF',
        accent: '#22C55E',
        muted: '#6B7280',
        bg: '#F9FAFB'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '4rem'
        }
      }
    }
  },
  plugins: [rtl]
}

export default config
