const webpack = require('webpack')
const glob = require('glob')
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path')
const postcss = require('postcss');
//const ESLintPlugin = require('eslint-webpack-plugin')
//const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin')

// eslint-disable-next-line camelcase
// __webpack_base_uri__ = 'http://localhost:8080';

const processor = postcss();

const entries = {}
glob.sync('./packages/**/index.ts').forEach((path1) => {
  const name = path1.replace(/^.\/packages\//, '').replace('/index.ts', '');
  if (!/.ts/.test(name)) {
    entries[name] = path1
  }
})

module.exports = (env, argv) => ({
  mode: 'production',
  // stats: {
  //   errorDetails: true, // --display-error-details
  // },
  entry: entries,
  output: {
    filename: '[name]/index.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    clean: true,
  },
  resolve: {
    extensions: ['*', '.ts', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            assumptions: {
              setPublicClassFields: true,
            },
            presets: [
              '@babel/preset-env',
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties',
            ],
          },
        },
      },
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', 'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.pug$/,
        use: ['pug-loader'],
      },
      {
        test: /\.mdx?$/,
        use: ['babel-loader', '@mdx-js/loader'],
      },
    ],
  },
  devtool: false,
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          context: 'packages/',
          from: '**/*.json',
          globOptions: {
            ignore: ['**/*.schema.json'],
          },
        },
      ],
    }),
  ],
});
