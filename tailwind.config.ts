import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx,css}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx,css}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx,css}',
  ],
  theme: {
    extend: {
      colors: {
        'vista-white': {
          '50': '#fcf8f8',
          '100': '#f7e9e9',
          '200': '#f0d8d8',
          '300': '#e5bcbc',
          '400': '#d49595',
          '500': '#c17272',
          '600': '#ab5757',
          '700': '#8f4646',
          '800': '#773d3d',
          '900': '#653737',
          '950': '#351a1a',
        },
        'tradewind': {
          '50': '#f3fafa',
          '100': '#d6f1ee',
          '200': '#ade2df',
          '300': '#7cccca',
          '400': '#68bbbb',
          '500': '#379395',
          '600': '#2a7477',
          '700': '#255e60',
          '800': '#214b4e',
          '900': '#203f41',
          '950': '#0d2426',
        },
        'periwinkle-gray': {
          '50': '#f7f7fb',
          '100': '#f0f0f7',
          '200': '#e3e4f1',
          '300': '#cfcfe8',
          '400': '#afaed7',
          '500': '#928cc6',
          '600': '#7d72b5',
          '700': '#6b60a1',
          '800': '#5a5087',
          '900': '#4b436f',
          '950': '#302b4a',
        },
        'persian-blue': {
          '50': '#f2f5ff',
          '100': '#e7ebff',
          '200': '#d3dcff',
          '300': '#afbcff',
          '400': '#8393ff',
          '500': '#505eff',
          '600': '#2c31fb',
          '700': '#1a1ae7',
          '800': '#1717ce',
          '900': '#14149e',
          '950': '#090d6c',
        },
      }
    },
  },
  plugins: [],
}
export default config
