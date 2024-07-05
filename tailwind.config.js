/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '0.5em',
        widest: '4.3vw',
      },
      extend: {
        animation: {
          first: "moveVertical 30s ease infinite",
          second: "moveInCircle 20s reverse infinite",
          third: "moveInCircle 40s linear infinite",
          fourth: "moveHorizontal 40s ease infinite",
          fifth: "moveInCircle 20s ease infinite",
          "meteor-effect": "meteor 5s linear infinite",
        },
        colors: {
          "redbg" : "#BF0202",
          "red-600": "#BF0202",
          "red-700": "#BF0202",
        },
        keyframes: {
          moveHorizontal: {
            "0%": {
              transform: "translateX(-50%) translateY(-10%)",
            },
            "50%": {
              transform: "translateX(50%) translateY(10%)",
            },
            "100%": {
              transform: "translateX(-50%) translateY(-10%)",
            },
          },
          moveInCircle: {
            "0%": {
              transform: "rotate(0deg)",
            },
            "50%": {
              transform: "rotate(180deg)",
            },
            "100%": {
              transform: "rotate(360deg)",
            },
          },
          moveVertical: {
            "0%": {
              transform: "translateY(-50%)",
            },
            "50%": {
              transform: "translateY(50%)",
            },
            "100%": {
              transform: "translateY(-50%)",
            },
          },
          meteor: {
            "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
            "70%": { opacity: "1" },
            "100%": {
              transform: "rotate(215deg) translateX(-500px)",
              opacity: "0",
            },
          },
        },
      },
    },
    plugins: [
      require('daisyui'),
    ],  
  };

