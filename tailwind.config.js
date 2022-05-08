module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#FF0000",
      },
      boxShadow: {
        lg: "3px 3px 15px -5px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
  mode: "jit",
};
