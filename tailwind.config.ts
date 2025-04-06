import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Adjust this according to your project structure
  ],
  theme: {
    extend: {
      colors: {
        'custom-white': '#FFFFFF',
        'custom-blue': '#145AFF',
        'custom-dark': '#0D0E10',
      },
    },
  },
  plugins: [],
};

export default config;
