import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        logo: "url(/images/bg-logo-large.svg)",
        logoLarge: "url(/images/logo-large-full.svg)",
        logoLargeLight: "url(/images/logo-large-full-light.svg)"
      },
      borderWidth: {
        5: "5px"
      },
      colors: {
        brand: {
          dark: {
            50: "#49626E",
            100: "#435A65",
            200: "#1F323D",
            300: "#304E5E",
            400: "#3B4F59",
            450: "#2B6A78",
            500: "#27606D"
          },
          green: {
            lighter: "#2E9BB2",
            light: "#D3F375",
            dark: "#237688",
            darker: "#173940"
          },
          light: {
            50: "#E3E9ED",
            100: "#F9FAFB",
            200: "#F0F3F5",
            300: "#E3EAED",
            400: "#F6F9F9",
            500: "#396F6F",
            600: "#F9FBFB",
            700: "#F6F8F9"
          },
          lightGreen: {
            10: "#E6EFEF",
            50: "#D0E2E1",
            100: "#1D4953",
            200: "#1E4953"
          },
          yellow: {
            200: "#DCF400"
          }
        }
      },
      fontFamily: {
        inter: "var(--font-inter)",
        "source-sans": "var(--font-source-sans)",
        "source-serif": "var(--font-source-serif)",
        sans: "Inter, sans-serif",
      },
      fontSize: {
        '2.5xl': "28px",
        '4.5xl': "40px"
      },
      lineHeight: {
        16.8: "16.8px",
        19.2: "19.2px",
        22.4: "22.4px",
        28.8: "28.8px",
        33.6: "33.6px",
        44: "44px",
        48: "48px"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};
export default config;
