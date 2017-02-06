var path = require('path');
var webpack = require('webpack');

var SplittingManifestPlugin = require('../index.js');

module.exports = {
  entry: {
    index: path.resolve(__dirname, './src/index.jsx'),
  },
  output: {
    filename: '[name].[hash].bundle.js',
    chunkFilename: '[name].[hash].chunk.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module:{
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react'],
            }
          }
        ],
      }
    ],
  },
  plugins: [
    new webpack.optimize.AggressiveSplittingPlugin({
      minSize: 2000,
      maxSize: 300000
    }),
    new SplittingManifestPlugin(),
  ],
};