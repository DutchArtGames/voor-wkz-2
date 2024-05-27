const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: './src/service-worker.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'service-worker.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WorkboxWebpackPlugin.InjectManifest({
      swSrc: './src/service-worker.js',
      swDest: 'service-worker.js',
    })
  ],
  mode: 'production'
};