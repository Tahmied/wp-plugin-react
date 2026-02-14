module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./**/*.php",
  ],
  corePlugins: {
    preflight: false,
  },
  important: "#my-plugin-root",
  theme: {
    extend: {},
  },
  plugins: [],
};
