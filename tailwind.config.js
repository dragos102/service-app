/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{html,ts}',
  ],
  darkMode: 'class', // sau 'media' dacă preferi să schimbi în funcție de preferințele utilizatorului
  theme: {
    extend: {
      colors: {
        navbarFooterBlue: '#050C9C',
        bodyBlue: '#3572EF',
        marginBlue: '#3ABEF9'
      },
    },
  },
  plugins: [],
}