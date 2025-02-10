import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: "#001427",
        green: "#708D81",
        yellow: "#F4D58D",
        red: "#BF0603",
        darkRed: "#8D0801",
      },
    },
  },
  plugins: [],
} satisfies Config;
