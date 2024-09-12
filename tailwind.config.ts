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
        background: "var(--background)",
        foreground: "var(--foreground)",
        purple: {
          light: "#8352FD",
          dark: "#3A0CA3",
        },
        skillColor: "var(--skill-color)",
        skillBg: {
          javascript: "var(--skill-javascript-background)",
          typescript: "var(--skill-typescript-background)",
          react: "var(--skill-react-background)",
          next: "var(--skill-next-background)",
          tailwind: "var(--skill-tailwind-background)",
          node: "var(--skill-node-background)",
          express: "var(--skill-express-background)",
          mongodb: "var(--skill-mongodb-background)",
          cypress: "var(--skill-cypress-background)",
          postgresql: "var(--skill-postgresql-background)",
          git: "var(--skill-git-background)",
          github: "var(--skill-github-background)",
          redux: "var(--skill-redux-background)",
          jest: "var(--skill-jest-background)",
        },
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out forwards",
      },
    },
  },
  safelist: [
    {
      pattern:
        /bg-skillBg-(javascript|typescript|react|next|tailwind|node|express|mongodb|cypress|postgresql|git|github|redux|jest)/,
    },
  ],
  plugins: [],
};

export default config;
