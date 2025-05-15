import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0037bf',
        accent: '#21C2F8',
        background: '#f5f6fa',
        white: '#FFFFFF',
        text: {
          DEFAULT: '#0037bf',
          primary: '#0037bf',
          secondary: '#0037bf99', // 60%
          tertiary: '#0037bf66', // 40%
        },
        gray: {
          50: '#f5f6fa',
          100: '#f1f1f1',
          200: '#e5e7eb',
          500: '#6b7280',
          600: '#4b5563',
        },
        amber: {
          100: '#FEF3C7',
          600: '#D97706',
        },
        red: {
          100: '#fee2e2',
          600: '#dc2626',
        },
        blue: {
          100: '#DBEAFE',
          600: '#2563EB',
        },
        purple: {
          100: '#EDE9FE',
          600: '#7C3AED',
        },
      },
      fontFamily: {
        inter: ['Inter', ...fontFamily.sans],
      },
      boxShadow: {
        card: '0 4px 24px 0 rgba(0, 55, 191, 0.08)',
      },
      borderRadius: {
        xl: '1.25rem',
        '2xl': '1.5rem',
      },
      transitionProperty: {
        'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}; 