const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackBar = require('webpackbar')

module.exports = {
  entry: path.resolve(__dirname, '../src/index.tsx'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'public/js/[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: [path.resolve(__dirname, '../src')],
        use: [
          // { loader: "thread-loader" },
          {
            loader: 'babel-loader',
            options: { cacheDirectory: true },
          },
        ],
      },
      {
        test: /\.(css|less)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['postcss-preset-env'],
              },
            },
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: { javascriptEnabled: true },
            },
          },
        ],
      },
      {
        test: /\.(css|less)$/,
        include: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {},
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['postcss-preset-env'],
              },
            },
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 500,
              outputPath: 'public/images/',
              name: '[name].[hash:8].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new WebpackBar({
      name: 'Build',
      color: '#fa8c16',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'), // src文件
      filename: 'index.html', // dist文件
    }),
    new FriendlyErrorsWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
}
