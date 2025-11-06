/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-black': '#050A14',
        'cyber-red': '#DC2626',
        'dark-red': '#991B1B',
        'red-accent': '#EF4444',
        'glass-white': 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        'heading': ['Space Grotesk', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'mono': ['IBM Plex Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh-pattern': 'linear-gradient(135deg, rgba(220,38,38,0.1) 0%, rgba(153,27,27,0.1) 100%)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #DC2626, 0 0 10px #DC2626' },
          '100%': { boxShadow: '0 0 10px #DC2626, 0 0 20px #DC2626, 0 0 30px #DC2626' },
        },
      },
    },
  },
  plugins: [],
}

