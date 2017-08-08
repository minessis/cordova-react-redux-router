'use strict';

const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const ENV = require('./env');
const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'www'),
};

process.env.BABEL_ENV = ENV; // 

const common = {
  entry: PATHS.src,
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.jsx$/, exclude: /node_modules/, use: 'babel-loader' }
    ]
  }
};

let config;

if (ENV === 'development') {
  config = merge(common, {
    devServer: {
      contentBase: PATHS.build,

      // Enable history API fallback so HTML5 History API based
      // routing works. This is a good default that will come
      // in handy in more complicated setups.
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,

      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // Parse host and port from env so this is easy to customize.
      host: '127.0.0.1',
      port: 8080,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
  });
} else if (ENV === 'production') {
  config = merge(common, {
    plugins: [
      new webpack.DefinePlugin({ // remove non-production code from react
        'process.env': { 'NODE_ENV': ENV }
      }),
      new webpack.optimize.UglifyJsPlugin({ 
        compress: { warnings: false }
      })
    ]
  });
} else {
  config = merge(common, {});
}

module.exports = config;