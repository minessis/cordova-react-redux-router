const path = require('path');

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.jsx',
  output: {
    path: path.resolve(__dirname, 'www'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.jsx$/, exclude: /node_modules/, use: 'babel-loader' }
    ]
  }
};

module.exports = config;
