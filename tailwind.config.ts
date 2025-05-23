import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        maroon: {
          50: '#fdf2f4',
          100: '#fbe6e9',
          200: '#f5d0d8',
          300: '#eeadb9',
          400: '#e47d94',
          500: '#d85a77',
          600: '#c43d5f',
          700: '#a52e4d',
          800: '#8b2842',
          900: '#75253a',
          950: '#42101a',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config;
