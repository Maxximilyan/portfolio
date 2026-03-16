import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F4F7FB",
        card: "#FFFFFF",
        text: "#0F172A",
        muted: "#64748B",
        border: "rgba(15, 23, 42, 0.12)",
        accent: "#16A34A",
        accentSoft: "#DCFCE7"
      }
    },
  },
  plugins: [],
} satisfies Config;
