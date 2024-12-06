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
        customWhite: `#FFFFEF`,
        customGreen: `#6EA666`,
        customBrown: `#CABA9C`,
        customDarkBrown: `#7F5F4B`,
      },
    },
  },
  plugins: [],
} satisfies Config;
