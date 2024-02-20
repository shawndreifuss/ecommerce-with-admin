const colors = require("tailwindcss/colors");
const withMT = require("@material-tailwind/react/utils/withMT");

const config = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    colors: {
      ...colors,
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
});

module.exports = config;