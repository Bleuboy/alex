/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: {
            default: '#f39c12',
            light: '#ffc87c',
          },

          secondary: {
            default: '#7c3aed',
            light: '#a186ff',
          },

          tertiary: {
            default: '#34495e',
            light: '#718093',
          },
        },

        background: '#f5f5f5',
        divider: '#cccccc',

        success: '#2ecc71',
        danger: '#e74c3c',
        error: '#d35400',
        warning: '#f1c40f',

        fact: '#85c1e9',
        legal: '#a186ff',
      },
    },
  },
  plugins: [],
};
