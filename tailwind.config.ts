import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        deepNavy: '#0B1220',
        slateDark: '#111827',
        emerald: '#10B981',
        cyanSoft: '#22D3EE',
        amberMuted: '#F59E0B'
      },
      boxShadow: {
        glass: '0 10px 35px rgba(0,0,0,0.35)',
        metric: '0 0 0 1px rgba(16, 185, 129, 0.15), 0 12px 40px rgba(16, 185, 129, 0.08)'
      },
      animation: {
        flow: 'flow 16s linear infinite'
      },
      keyframes: {
        flow: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' }
        }
      }
    }
  },
  plugins: []
};

export default config;
