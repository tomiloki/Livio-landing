import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#16353F",
          light: "#1F4E5F",
        },
        accent: {
          DEFAULT: "#2F8F83",
          light: "#D9F0EC",
        },
        background: {
          DEFAULT: "#F7F8F6",
          surface: "#FFFFFF",
          alt: "#EEF2F1",
        },
        text: {
          primary: "#162126",
          secondary: "#5F6B70",
        },
        border: "#D7DEDC",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
