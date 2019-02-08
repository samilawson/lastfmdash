// eslint-disable-next-line
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, '/client/public');
var APP_DIR = path.resolve(__dirname, '/client/src');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
};

module.exports = config;