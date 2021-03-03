const path = require('path')
const { DllPlugin } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: { library: ['react', 'react-dom'] },
  output: {
    path: path.resolve(__dirname, '../public/vendor'),
    filename: `[name].dll.js`,
    library: '[name]',
  },

  optimization: {
    // 打包压缩js文件
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
        parallel: true,
        cache: true,
        sourceMap: false,
      }),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new DllPlugin({
      path: path.resolve(__dirname, '../public/vendor', '[name].manifest.json'),
      name: '[name]',
    }),
  ],
}
