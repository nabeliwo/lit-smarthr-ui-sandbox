'use strict'

const { resolve } = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: resolve(__dirname, 'src/components.ts'),
  output: {
    filename: 'components.js',
    path: resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  plugins: [new webpack.NoEmitOnErrorsPlugin()],
}
