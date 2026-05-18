/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        brand: {
          light: {
            bg: "#f8fafc",
            surface: "#ffffff",
            muted: "#e2e8f0",
            border: "#cbd5e1",
            text: "#0f172a",
            subtle: "#475569",
          },

          dark: {
            bg: "#020617",
            surface: "#0f172a",
            muted: "#1e293b",
            border: "#334155",
            text: "#e5e7eb",
            subtle: "#94a3b8",
          },

          cyan: "#22d3ee",
          teal: "#14b8a6",
          amber: "#f59e0b",
          rose: "#fb7185",
        },
      },

      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
      },

      minHeight: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
      },

      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "9/10": "90%",
      },

      boxShadow: {
        card: "0 18px 45px rgba(15, 23, 42, 0.18)",
        glow: "0 0 30px rgba(34, 211, 238, 0.18)",
      },

      backgroundImage: {
        "brand-light-gradient":
          "radial-gradient(circle at top left, rgba(20, 184, 166, 0.14), transparent 32%), radial-gradient(circle at bottom right, rgba(245, 158, 11, 0.10), transparent 30%)",

        "brand-dark-gradient":
          "radial-gradient(circle at top left, rgba(34, 211, 238, 0.16), transparent 32%), radial-gradient(circle at bottom right, rgba(20, 184, 166, 0.14), transparent 30%)",
      },
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
  ],
};