module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      logo: ['"Poor Story"', 'cursive'],
      base: ['"Source Sans Pro"', 'sans-serif'],
    },
    extend: {
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          navbar: 'var(--color-text-navbar)',
          border: 'var(--color-card)',
        },
      },
      backgroundColor: {
        skin: {
          border: 'var(--color-card)',
          card: 'var(--color-card)',
          body: 'var(--color-body)',
          navbar: 'var(--color-navbar)',
          logo: 'var(--color-logo)',
        },
      },
    },
  },
  plugins: [],
};
