/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F5F0E8',
          dark: '#EFE8DC',
          light: '#FAF7F2',
        },
        beige: {
          surface: '#E9E0D3',
          border: '#D8CFC2',
          subtle: '#E2D8C9',
        },
        editorial: {
          primary: '#25221E',
          secondary: '#756D63',
          muted: '#9E9589',
          accent: '#B49772',
          bronze: '#9B7E58',
        }
      },
      fontFamily: {
        serif: ['Newsreader', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'tighter': '-0.02em',
        'wide-editorial': '0.12em',
        'widest-editorial': '0.2em',
      },
      animation: {
        'float-slow': 'floatSlow 14s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 6s ease-in-out infinite',
        'rotate-slow': 'rotateSlow 40s linear infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1.5deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.85' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}
