import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0F19",
        card: "#111827",
        text: "#E5E7EB",
        muted: "#9CA3AF",
        border: "rgba(255,255,255,0.12)"
      }
    },
  },
  plugins: [],
} satisfies Config;

