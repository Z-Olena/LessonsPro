const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './src/index1.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
        },
    ],
  },
};