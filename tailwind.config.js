module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx,md,mdx}',
    './components/**/*.{js,jsx,ts,tsx,md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ntts-blue': '#90cdf4',
        'ntts-blue-light': '#b3e0ff',
        'ntts-blue-hover': '#63b3ed',
        'dark-bg': '#0D1117',
        'dark-card': '#90cdf4',
        'dark-text': '#C9D1D9',
        'dark-text-secondary': '#8B949E',
        'dark-border': '#30363D',
      },
    }
  },
  plugins: [],
  darkMode: "class"
}
