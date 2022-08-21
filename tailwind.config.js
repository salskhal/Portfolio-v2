/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        title: "hsla(0,0%,100%,.64)",
        js: "#f0db4f",
        vue: "#41b883",
        tail: "#38bdf8",
        html: "#e44d26",
        css: "#264de1",
        figma: "#a259ff",
        name: "#222",
        description: "rgba(0,0,0,.64)",
        aboutDes: "#fff",
        landingTitle: "hsla(0,0%,100%,.52)",
        num: "hsla(0,0%,100%,.16)",
        main: "#1E5F74",
        subMain: "#1D2D50"
      },
      lineHeight: {
        "5rem": "5rem",
        "3rem": "3rem",
      },
    },
  },
  plugins: [],
};
