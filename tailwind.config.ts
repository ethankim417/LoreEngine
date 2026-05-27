import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        void: "#06070d",
        panel: "#0b1020",
        ink: "#e7ecff",
        muted: "#8792b0",
        neon: {
          cyan: "#32d9ff",
          violet: "#8a5cff",
          magenta: "#ff4fd8",
          green: "#54f0a9",
          amber: "#ffc857"
        }
      },
      boxShadow: {
        glow: "0 0 42px rgba(50, 217, 255, 0.18)",
        violet: "0 0 46px rgba(138, 92, 255, 0.2)"
      },
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      animation: {
        "slow-pan": "slow-pan 18s ease-in-out infinite alternate",
        pulseline: "pulseline 3s ease-in-out infinite"
      },
      keyframes: {
        "slow-pan": {
          "0%": { transform: "translate3d(-2%, -1%, 0) scale(1)" },
          "100%": { transform: "translate3d(2%, 1%, 0) scale(1.04)" }
        },
        pulseline: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.9" }
        }
      }
    }
  },
  plugins: []
};

export default config;
