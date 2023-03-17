/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        neutral: {
          150: "rgb(237, 237, 237)",
        },
        default: "rgb(var(--color-default) / <alpha-value>)",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        donkey: "rgb(var(--color-donkey) / <alpha-value>)",
      },
      animation: {
        "bg-slide": "bg_slide 5s linear infinite alternate",
      },
      keyframes: {
        bg_slide: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "100% 0" },
        },
      },
      transitionTimingFunction: {
        "out-quint": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: {
        600: "600ms",
      },
      backgroundImage: {
        "gradient-45": "linear-gradient(45deg, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
