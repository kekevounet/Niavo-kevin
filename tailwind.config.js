// module.exports = {
//   purge: [],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Spécifie les fichiers à scanner pour détecter les classes Tailwind
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
