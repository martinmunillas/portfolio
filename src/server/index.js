require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: ['@babel/plugin-proposal-class-properties'],
});

require('asset-require-hook');

require('ignore-styles');

require('./server');
