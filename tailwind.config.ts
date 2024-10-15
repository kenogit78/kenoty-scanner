import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0048FF",
        secondary: "#191919",
        tertiary: "#1B1B1B",
        borderlinecolor: "#262626",
        lighmodeborder: "#dee0e4",
        lightgray: "#E6E6E6",
        gradient1: "#242424",
        gradient2: "#2E2E2E",
        lightblue: "#76CDFF",
      },
    },
  },
  plugins: [],
};
export default config;
