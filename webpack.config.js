const webpack = require('webpack')
const path = require('path')
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin')
const package = require('./package.json')

const config = {
  entry: {
    index: path.resolve(__dirname, 'source/index.jsx'),
  },
  output: {
    path: path.resolve(__dirname, 'public/dist/'),
    filename: './[name].js',
    sourceMapFilename: './[name].map',
    chunkFilename: './[name].js',
  },
  target: 'web',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
    hot: true,
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx', '.mdx', 'json'],
    alias: {
      '@source': path.resolve(__dirname, 'source/'),
    },
    fallback: {
      fs: false,
    },
  },
  performance: process.env.NODE_ENV === 'production' ? { hints: false } : {},
  plugins:
    process.env.NODE_ENV === 'production'
      ? [
          new webpack.DefinePlugin({
            'process.env': {
              NODE_ENV: JSON.stringify('production'),
            },
          }),
        ]
      : [],
  optimization:
    process.env.NODE_ENV === 'production'
      ? {
          minimize: true,
          minimizer: [
            new UglifyJsWebpackPlugin({
              uglifyOptions: {
                output: {
                  comments: false,
                },
                compress: {
                  drop_console: true,
                  dead_code: true,
                },
              },
            }),
          ],
        }
      : {
          minimize: false,
        },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: path.resolve(__dirname, 'dist/images/'),
          publicPath: package.server ? '/' : 'public/dist/',
          useRelativePath: false,
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'dist/fonts/',
          publicPath: package.server ? '/' : 'public/dist/',
          useRelativePath: false,
        },
      },
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
}

module.exports = config
