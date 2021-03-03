const webpack = require('webpack')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const baseWebpackConfig = require('./webpack.config.base')

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    host: '127.0.0.1',
    port: 8000,
    stats: 'errors-only',
    open: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'public/styles/[name].css',
      chunkFilename: 'public/styles/chunk.[id].css',
    }),
  ],
})
