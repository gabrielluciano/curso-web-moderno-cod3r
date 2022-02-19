module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /(^bg-|from-(green|blue|gray)-400|to-(green|blue|gray)-700)/
    }
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
