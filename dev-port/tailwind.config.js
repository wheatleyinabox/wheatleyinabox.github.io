/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
          surfacePrimary: "#EFF1ED",
          iconBgPrimary: "#BCBD8B",
          iconColorPrimary: "#6F7806",
          textPrimary: "#282828",
          textSecondary: "#4A4A4A",
      },
      spacing: {
        base: "16px",
        none: "0",
        xs: "0.25rem", // 4px
        s: "0.5rem", // 8px
        m: "0.75rem", // 12px
        l: "1rem", // 16pc
        xl: "1.25rem", // 20px (base)
        xxl: "1.5rem", // 24px
      },
      fontSize: {
        headLine1: "3rem", // 48px
        headLine2: "2.125rem", // 34px
        headLine3: "1.75rem", // 28px
        headLine4: "1.125rem", // 18px
        paragraph: "0.875em", // 14px
      },
      fontFamily: {
        B612: ['"B612"', "serif"],
      },
    },
  },
  plugins: [],
};
