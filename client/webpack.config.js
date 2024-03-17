const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
  },
  target: 'web',
  devServer: {
    port: '5000',
    static: {
      directory: path.join(__dirname, 'public')
    },
    open: true,
    hot: true,
    liveReload: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css'],

  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader", "css-loader"

        ]
      },




      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html')
    }),
    new Dotenv(),
    new TerserPlugin()
  ]
};
