const cssnano = require('cssnano');
const presetEnv = require('postcss-preset-env')({
  features: {
    // enable nesting
    'nesting-rules': true,
  },
});

const plugins =
  process.env.NODE_ENV === 'production'
    ? [ presetEnv, cssnano]
    : [ presetEnv];

module.exports = { plugins };