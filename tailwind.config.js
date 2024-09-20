/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors() {
        return {
          primary: {
            DEFAULT: '#4F46E5',
          },
        };
      },
    },
  },
  plugins: [],
};
