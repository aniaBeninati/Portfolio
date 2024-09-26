import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4E614E", // Verde
        secondary: "#F2B85A", // Giallo
        accent: "#822225", // Rosso
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Libre Bodoni", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
