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
      circularDark:
        "repeating-radial-gradient(rgba(255,255,255,0.44) 2px, #1b1b1b 10px, #1b1b1b 100px)",
      circularLightLg:
        "repeating-radial-gradient(rgba(255,255,255,0.44) 2px, #1b1b1b 5px, #1b1b1b 80px)",
      circularDarkLg:
        "repeating-radial-gradient(rgba(255,255,255,0.44) 2px, #1b1b1b 10px, #1b1b1b 80px)",
    },
  },
  darkMode: "class",
  screens: {
    "2xl": { max: "1535px" },
    xl: { max: "1279px" },
    lg: { max: "1023px" },
    md: { max: "767px" },
    sm: { max: "639px" },
    xs: { max: "479px" },
  },
};

export const plugins = [];
