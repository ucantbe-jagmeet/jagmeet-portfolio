/** @type {import('tailwindcss').Config} */

import { fontFamily } from "tailwindcss/defaultTheme";

export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    fontFamily: {
      mont: [`var(--font-mont)`, ...fontFamily.sans],
    },
    colors: {
      dark: "#1b1b1b",
      light: "#f5f5f5",
      primary: "#B63E96",
      primaryDark: "#58E6D9",
    },
    backgroundImage: {
      circularLight:
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px)",
    },
  },
  darkMode: "class",
};
export const plugins = [];
