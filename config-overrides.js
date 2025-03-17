const path = require('path');

module.exports = function override(config, env) {
  // Add path-browserify fallback for Webpack 5
  config.resolve.fallback = {
    ...config.resolve.fallback,
    path: require.resolve('path-browserify'),
  };

  // Optional - Customize other Webpack settings if needed
  config.module.rules.push({
    test: /\.mjs$/,
    include: /node_modules/,
    type: 'javascript/auto',
  });

  return config;
};
