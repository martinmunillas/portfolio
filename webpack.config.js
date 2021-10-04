const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const WebpackManifestPlugin = require('webpack-manifest-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

require('dotenv').config();

const { ENV } = process.env;
const isDev = ENV === 'development';
const entry = ['./src/frontend/index.tsx'];

if (isDev) {
  entry.push('webpack-hot-middleware/client?path=/__webpack_hmr?reload=true')
}

module.exports = {
  entry,
  mode: ENV,
  output: {
    path: path.resolve(__dirname, 'dist/server/public'),
    filename: isDev ? 'assets/app.js' : 'assets/app-[hash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({}),
    !isDev && new WebpackManifestPlugin(),
    !isDev && new CleanWebpackPlugin(),
    isDev && new webpack.HotModuleReplacementPlugin(),
    isDev && new ReactRefreshWebpackPlugin({
      overlay: {
        sockIntegration: 'whm'
      }
    }),
  ].filter(Boolean),
  optimization: !isDev ? {
    minimize: true,
    minimizer: [new TerserWebpackPlugin()],
  } : undefined,
};
