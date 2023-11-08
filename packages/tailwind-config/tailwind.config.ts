import type { Config } from "tailwindcss";

export const config: Config = {
  content: [
    // "../../packages/ui/**/*.{js,ts,jsx,tsx}",
    // "./**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "base-content": "#333333", //font-color
          primary: "#cc5803", //primary-color - orange
          secondary: "#4a4e69", //secondary-color - dark blue
          accent: "#ff9505",
          neutral: "#62a87c",
          "base-100": "#ffffff", //background-color
          info: "#ffffff",
          success: "#ffffff",
          warning: "#ffffff",
          error: "#ffffff",
        },
      },
    ],
  },
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    spacing: {
      "0.25": "0.25rem",
      "0.5": "0.5rem",
      "0.75": "0.75rem",
      "1": "1rem",
      "1.5": "1.5rem",
      "2": "2rem",
      "2.5": "2.5rem",
      "3": "3rem",
      "4": "4rem",
      "5": "5rem",
      "6": "6rem",
      "8": "8rem",
      "10": "10rem",
      "12": "12rem",
      "16": "16rem",
      "24": "24rem",
      "32": "32rem",
    },
    fontSize: {
      sm: ["12px", "16px"],
      base: ["16px", "24px"],
      lg: ["24px", "32px"],
      xl: ["32px", "40px"],
      "2xl": ["48px", "60px"],
    },
  },
  plugins: [require("daisyui")],
};
