import flowbite from 'flowbite-react/tailwind';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    flowbite.content(),
    './node_modules/flowbite-react/lib/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin()],
};
