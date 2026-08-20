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
        /** Primary purple — buttons, links, focus rings */
        brand: {
          50: "#f6f3fa",
          100: "#ece6f4",
          200: "#d9cce9",
          300: "#bea8d8",
          400: "#9a7cbd",
          500: "#7e5fa8",
          600: "#6a4d94",
          700: "#583f7c",
          800: "#493566",
          900: "#3d2d54",
        },
        /** Warm neutrals & black — text, borders, dark sections */
        navy: {
          50: "#faf9f7",
          100: "#f4f2ee",
          200: "#e8e4dd",
          300: "#d6d0c6",
          400: "#a39e96",
          500: "#736e68",
          600: "#56524d",
          700: "#3f3c38",
          800: "#2a2724",
          900: "#1a1816",
          950: "#0f0e0d",
        },
        /** Champagne gold — accents, eyebrows, prices, highlights */
        gold: {
          50: "#fbf8f1",
          100: "#f4ead8",
          200: "#e8d4ad",
          300: "#d9ba7a",
          400: "#c9a255",
          500: "#b8924a",
          600: "#9a7838",
          700: "#7c612f",
          800: "#664f28",
          900: "#534021",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
