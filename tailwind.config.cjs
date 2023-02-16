/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderColor: {
        DEFAULT: 'hsl(var(--color-muted) / 0.2)',
      },
      boxShadow: {
        DEFAULT: '0 10px 30px -20px rgba(87, 82, 121, 0.2)',
      },
      colors: {
        base: 'hsl(var(--color-base) / <alpha-value>)',
        surface: 'hsl(var(--color-surface) / <alpha-value>)',
        overlay: 'hsl(var(--color-overlay) / <alpha-value>)',
        muted: 'hsl(var(--color-muted) / <alpha-value>)',
        subtle: 'hsl(var(--color-subtle) / <alpha-value>)',
        text: 'hsl(var(--color-text) / <alpha-value>)',
        love: 'hsl(var(--color-love) / <alpha-value>)',
        gold: 'hsl(var(--color-gold) / <alpha-value>)',
        rose: 'hsl(var(--color-rose) / <alpha-value>)',
        pine: 'hsl(var(--color-pine) / <alpha-value>)',
        foam: 'hsl(var(--color-foam) / <alpha-value>)',
        iris: 'hsl(var(--color-iris) / <alpha-value>)',
      },
      ringColor: {
        DEFAULT: 'hsl(var(--color-muted) / 0.3)',
      },
    },
  },
  plugins: [],
};
