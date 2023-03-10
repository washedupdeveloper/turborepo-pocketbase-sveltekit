let config = require('tailwind-config');
config = {
  ...config,
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    logs: false
  }
};

module.exports = config;
