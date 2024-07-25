import {nextui} from '@nextui-org/theme'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/button.js",
    './node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js',
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 5s infinite",
        infinitescroll: 'infinitescroll 25s linear infinite',

      },
      keyframes: {
        infinitescroll: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px)",
          },
          "33%": {
            transform: "translate(30px, -50px) ",
          },
          "66%": {
            transform: "translate(-20px, 20px) ",
          },
          "100%": {
            transform: "tranlate(0px, 0px)",
          },
        },
      
      },

      },
    screens: {
      'ss': '480px',
      'sm':'640px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1536px'
  },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        layout: {
          hoverOpacity: 1,
        },
      },
      dark: {
        layout: {
          hoverOpacity: 0.9,
        },
      }}})]
};