const daisyui = require('daisyui');
const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');

let config = require('tailwind-config');
config = {
  ...config,
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    logs: false
  }
};

module.exports = config;
