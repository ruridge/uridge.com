module.exports = {
  plugins: [
    require.resolve("prettier-plugin-astro"),
    require.resolve("prettier-plugin-tailwindcss"), // MUST come last
  ],
  pluginSearchDirs: false,
  tailwindConfig: "./tailwind.config.cjs",
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
