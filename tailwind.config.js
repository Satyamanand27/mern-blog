// import flowbiteReact from "flowbite-react/plugin/tailwindcss";

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./src/**/*.{js,jsx,ts,tsx}", ".flowbite-react\\class-list.json"],
//   theme: {
//     extend: {},
//   },
//   plugins: [flowbiteReact],
// }

import flowbite from 'flowbite/plugin'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbite],
}
