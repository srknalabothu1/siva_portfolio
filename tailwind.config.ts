import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        '2rem': '2rem',
        '1.75em': '1.75em',
        'base': '1em',
      },
      borderWidth: {
        '0.5': '0.5px',
      },
      colors: {
        customGray: '#ccbcbc',
        customBlue: '#0f9ac8'
      },
    },
  },

  plugins: [],
};
export default config;
