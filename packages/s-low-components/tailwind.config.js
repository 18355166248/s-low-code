const themeConfig = {
  primary: "#1890ff",
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: (theme) => ({
      ...theme("colors"),
      ...themeConfig,
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
