/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,css}',
    './lib/**/*.{js,ts,jsx,tsx,css}',
    './components/**/*.{js,ts,jsx,tsx,css}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border) / <alpha-value>)',
        input: 'hsl(var(--input) / <alpha-value>)',
        ring: 'hsl(var(--ring) / <alpha-value>)',
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        primary: 'hsl(var(--primary) / <alpha-value>)',
        'primary-foreground': 'hsl(var(--primary-foreground) / <alpha-value>)',
        secondary: 'hsl(var(--secondary) / <alpha-value>)',
        'secondary-foreground': 'hsl(var(--secondary-foreground) / <alpha-value>)',
        muted: 'hsl(var(--muted) / <alpha-value>)',
        'muted-foreground': 'hsl(var(--muted-foreground) / <alpha-value>)',
        accent: 'hsl(var(--accent) / <alpha-value>)',
        'accent-foreground': 'hsl(var(--accent-foreground) / <alpha-value>)',
        destructive: 'hsl(var(--destructive) / <alpha-value>)',
        'destructive-foreground': 'hsl(var(--destructive-foreground) / <alpha-value>)',
        popover: 'hsl(var(--popover) / <alpha-value>)',
        'popover-foreground': 'hsl(var(--popover-foreground) / <alpha-value>)',
        card: 'hsl(var(--card) / <alpha-value>)',
        'card-foreground': 'hsl(var(--card-foreground) / <alpha-value>)',
        'neon-cyan': '#00f0ff',
        'neon-pink': '#ff00aa',
        'neon-purple': '#c300ff',
        'neon-green': '#00ff66',
        'neon-yellow': '#fff200',
        'neon-orange': '#ff8800',
      },
      borderRadius: {
        lg: 'var(--radius)',
      },
      backgroundImage: {
        'neon-gradient': 'linear-gradient(to right, #00f0ff, #c300ff, #ff00aa)',
        'glass-gradient': 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))',
      },
      animation: {
        glow: 'glow 2.5s ease-in-out infinite alternate',
        pulse: 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 10px rgba(0, 240, 255, 0), 0 0 20px rgba(0, 240, 255, 0)' },
          '100%': { textShadow: '0 0 10px rgba(0, 240, 255, 0.5), 0 0 20px rgba(0, 240, 255, 0.3), 0 0 30px rgba(0, 240, 255, 0.2), 0 0 40px rgba(0, 240, 255, 0.1)' },
        },
      },
      boxShadow: {
        neon: '0 0 10px rgba(0, 240, 255, 0.5), 0 0 20px rgba(0, 240, 255, 0.2), 0 0 30px rgba(0, 240, 255, 0.1), 0 0 40px rgba(0, 240, 255, 0.05)',
      },
    },
  },
  plugins: [],
};
