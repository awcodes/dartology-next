const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
        "gradient-radial-at-t": "radial-gradient(ellipse at top, var(--tw-gradient-stops))",
        "gradient-radial-at-b": "radial-gradient(ellipse at bottom, var(--tw-gradient-stops))",
        "gradient-radial-at-l": "radial-gradient(ellipse at left, var(--tw-gradient-stops))",
        "gradient-radial-at-r": "radial-gradient(ellipse at right, var(--tw-gradient-stops))",
        "gradient-radial-at-tl": "radial-gradient(ellipse at top left, var(--tw-gradient-stops))",
        "gradient-radial-at-tr": "radial-gradient(ellipse at top right, var(--tw-gradient-stops))",
        "gradient-radial-at-bl": "radial-gradient(ellipse at bottom left, var(--tw-gradient-stops))",
        "gradient-radial-at-br": "radial-gradient(ellipse at bottom right, var(--tw-gradient-stops))",
      },
      colors: {
        // green
        primary: {
          50: "#fafef5",
          100: "#f6fdeb",
          200: "#e8f9cd",
          300: "#daf5ae",
          400: "#bfee72",
          500: "#a3e635",
          600: "#93cf30",
          700: "#7aad28",
          800: "#628a20",
          900: "#50711a",
        },
        // blue
        secondary: {
          50: "#f6fcfe",
          100: "#edfafd",
          200: "#d2f2f9",
          300: "#b7e9f5",
          400: "#82d9ee",
          500: "#4CC9E6",
          600: "#44b5cf",
          700: "#3997ad",
          800: "#2e798a",
          900: "#256271",
        },
        // purple
        tertiary: {
          50: "#fcf4fe",
          100: "#f8e9fd",
          200: "#eec7f9",
          300: "#e4a5f5",
          400: "#d062ee",
          500: "#BC1EE6",
          600: "#a91bcf",
          700: "#8d17ad",
          800: "#71128a",
          900: "#5c0f71",
        },
        // yellow
        accent: {
          50: "#fffff5",
          100: "#feffea",
          200: "#fdfecb",
          300: "#fbfeab",
          400: "#f8fd6c",
          500: "#F5FC2D",
          600: "#dde329",
          700: "#b8bd22",
          800: "#93971b",
          900: "#787b16",
        },
      },
      fontFamily: {
        sans: ["Ubuntu", ...fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
