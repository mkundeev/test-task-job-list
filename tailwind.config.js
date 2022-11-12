const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        textColorDGrey: "#3A4562",
        textColorSecondary: "#878D9D",
        textDetailPage: " #38415D",
        textContacts: "#E7EAF0",
        slate: colors.slate,
        amber: colors.amber,
        white: colors.white,
      },
    },
    colors: {
      bgGrey: "#EFF0F5",
      bgPrime: "#E6E9F2",
      bgBtn: "#384564",
      bgContacts: "#2A3047",
      slate: colors.slate,
      amber: colors.amber,
      white: colors.white,
    },
    listStyleType: {
      none: "none",
      square: "square",
    },
  },
  plugins: [],
};
