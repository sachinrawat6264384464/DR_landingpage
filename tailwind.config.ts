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
        academic: {
          navy: "#0A192F",
          "navy-light": "#172A45",
          deep: "#0F2942",
          blue: "#1E3A8A",
          gold: "#D4AF37",
          "gold-hover": "#B59325",
          badge: "#EBF3FE",
          card: "#FFFFFF",
          bg: "#F8FAFC",
          text: "#1E293B",
          muted: "#64748B",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Merriweather", "Georgia", "serif"],
        sans: ["Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      boxShadow: {
        academic: "0 10px 30px -10px rgba(15, 41, 66, 0.08)",
        "academic-hover": "0 20px 40px -15px rgba(15, 41, 66, 0.15)",
        pill: "0 4px 14px 0 rgba(15, 41, 66, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
