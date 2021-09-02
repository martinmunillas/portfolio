const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

require('dotenv').config();

const { ENV } = process.env;
const isDev = ENV === 'development';
const entry = ['./src/frontend/index.tsx'];

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
  plugins: [
    isDev ? new webpack.HotModuleReplacementPlugin() : () => { },

    !isDev ? new ManifestPlugin() : () => { },

    !isDev
      ? new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: path.resolve(__dirname, 'dist/server/public/assets'),
      })
      : () => { },

    new MiniCssExtractPlugin({
      filename: isDev ? 'assets/app.css' : 'assets/app-[hash].css',
    }),
  ],
  optimization: !isDev ? {
    minimize: true,
    minimizer: [new TerserWebpackPlugin()],
  } : undefined,
};
