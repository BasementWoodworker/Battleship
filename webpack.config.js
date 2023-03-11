const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { SourceMap } = require('module');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Battleship (game)'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|wav)$/i,
        type: 'asset/resource'
      },
    ]
  },
  devServer: {
    static: './dist'
  },
  optimization: {
    runtimeChunk: 'single'
  },
  devtool: 'inline-source-map'
}