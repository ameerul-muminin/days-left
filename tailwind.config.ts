import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Scans all files in the app directory
    "./pages/**/*.{js,ts,jsx,tsx}", // (Optional) If you're using the pages directory
    "./components/**/*.{js,ts,jsx,tsx}", // Scans custom components
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        20: "repeat(20, minmax(0, 1fr))",
      },
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
    },
  },
  plugins: [],
};

export default config;
