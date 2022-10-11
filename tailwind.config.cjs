/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      transitionTimingFunction: {
        "out-quint": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: {
        600: "600ms",
      },
      gridAutoColumns: {
        "24ch": "24ch",
      },
      colors: {
        solarized: {
          700: "#083642",
          800: "#032b36",
          900: "#02212b",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
