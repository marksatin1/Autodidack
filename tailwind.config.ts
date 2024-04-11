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
      },
    },
  },
  plugins: [],
};
export default config;
