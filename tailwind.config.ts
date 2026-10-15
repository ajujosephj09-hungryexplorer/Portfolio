import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ground: '#FAFAFA',
        ink: '#111827',
        accent: '#1D4ED8',
        secondary: '#4B5563',
        rule: '#D1D5DB',
      },
      fontFamily: {
        serif: ['var(--font-libre-baskerville)', 'Georgia', 'serif'],
        sans: ['var(--font-source-sans)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
}

export default config
