import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0e0e0e",
        card: "#161616",
        text: "#f0ede8",
        muted: "#888888",
        border: "rgba(255, 255, 255, 0.08)",
        accent: "#c8f064",
        accentSoft: "rgba(200, 240, 100, 0.10)"
      }
    },
  },
  plugins: [],
} satisfies Config;
