import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container:{
        center: true,
        padding:"15px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        boxShadow:"4px 4px 6px rgba(0,0,0,0.8)"
      },
    },
  },
  plugins: [],
};
export default config;
