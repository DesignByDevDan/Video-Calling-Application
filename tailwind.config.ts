import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        dark: {
          1: '#1C1F2E', // Default dark colors
          2: '#161925',
          3: '#252A41',
          4: '#1E2757',
          5: '#2E2D3C', // Muted dark purple-gray
          6: '#24233B', // Soft dark
          7: '#38374D', // Muted dark purple
          8: '#564E75', // Softer muted purple
          9: '#1B1B1F', // Dark charcoal for Neon Accents
          10: '#15161A', // Even darker gray for Neon Accents
          11: '#2D2D39', // Dark muted blue-gray for Neon Accents
          12: '#3E3F52', // Slightly lighter gray-blue for Neon Accents
        },
        blue: {
          1: '#0E78F9', // Default blue
          2: '#1976D2', // Material Blue
          3: '#76B3FF', // Muted light blue
          4: '#4296FC', // Midpoint blue
        },
        sky: {
          1: '#C9DDFF', // Default sky blue
          2: '#ECF0FF',
          3: '#F5FCFF',
          4: '#A7E2F9', // Muted pastel sky blue
          5: '#E0F7FF', // Lighter muted sky blue
          6: '#FAFBFF', // Almost white-blue
        },
        orange: {
          1: '#FF742E', // Default orange
          2: '#FF9161', // Midpoint orange
          3: '#FFAD94', // Muted orange-red
        },
        purple: {
          1: '#830EF9', // Default purple
          2: '#D7A7F9', // Muted lavender
          3: '#AE00FF', // Neon purple
          4: '#AD5BF9', // Midpoint purple
        },
        yellow: {
          1: '#F9A90E', // Default yellow
          2: '#FFE49C', // Soft yellow
          3: '#FBC02D', // Material Yellow
          4: '#FBC755', // Midpoint yellow
        },
        green: {
          1: '#388E3C', // Material Green
          2: '#6AFF33', // Neon green
          3: '#52C737', // Midpoint green
        },
        red: {
          1: '#D32F2F', // Material Red
          2: '#FF4D4D', // Neon red
        },
        neon: {
          1: '#00F5FF', // Bright cyan
          2: '#FF4D4D', // Neon red
          3: '#6AFF33', // Neon green
          4: '#F5FF00', // Neon yellow
        },
        gradient: {
          1: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', // Pink to red
          2: 'linear-gradient(135deg, #42e695 0%, #3bb2b8 100%)', // Green to teal
          3: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)', // Purple to pink
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        hero: "url('/images/hero-background.png')", // Existing background
        hero_1: "url('/images/hero-background-1.png')", // New background
        hero_2: "url('/images/hero-background-2.png')", // New background
        hero_3: "url('/images/hero-background-3.png')", // New background
        hero_4: "url('/images/hero-background-4.png')", // New background
        hero_5: "url('/images/hero-background-5.png')", // New background
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
