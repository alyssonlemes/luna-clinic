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
        luna: {
          lilac:         "#315888",
          "lilac-light": "#8BA5C4",
          "lilac-soft":  "#E8EEF5",
          rose:          "#0A2B53",
          "rose-light":  "#EDF2F8",
          sage:          "#8BA5C4",
          "sage-light":  "#E3EBF4",
          peach:         "#315888",
          "peach-light": "#EEF3F9",
          cream:         "#F5F8FC",
          "warm-white":  "#FAFCFF",
          charcoal:      "#0A2B53",
          "dark-soft":   "#123A68",
          gray:          "#4D6F96",
          "gray-light":  "#8BA5C4",
        },
      },
      fontFamily: {
        display: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
        body: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
        accent: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
