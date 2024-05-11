import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        gallerySm: "-3px 5px 10px rgba(0, 0, 0, 0.5)",
        galleryMd: "-5px 7px 2px rgba(0, 0, 0, 1)",
        galleryLg: "-8px 8px 2px rgba(0, 0, 0, 1)",
        input: "1px 4px 4px rgba(0, 0, 0, 0.35)",
      },
      colors: {
        accent: {
          DEFAULT: "#f59e0b",
          dark: "#C56528",
        },
      },
    },
  },
  plugins: [],
};
export default config;
