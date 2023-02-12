const webpack = require('webpack')
const preprocess = require('svelte-preprocess')
const path = require('path')
const postcss = require('postcss');
const HtmlWebpackPlugin = require('html-webpack-plugin')
//const ESLintPlugin = require('eslint-webpack-plugin')
//const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin')

// eslint-disable-next-line camelcase
__webpack_base_uri__ = 'http://localhost:8080';
const processor = postcss();

// Try the environment variable, otherwise use root
// argv.mode !== 'production' ? '/' : 'assets/'

module.exports = (env, argv) => ({
  entry: {
    main: path.resolve(__dirname, './docs/app.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: argv.mode !== 'production' ? '/' : 'assets/',
  },
  resolve: {
    alias: {
      '@sivasifr/ui-core': path.resolve(__dirname, './packages/ui-core'),
      '@sivasifr/ui-carousel': path.resolve(__dirname, './packages/ui-carousel'),
      '@sivasifr/icons': path.resolve(__dirname, './packages/icons'),
    },
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
        test: /\.svelte$/,
        use: {
          loader: 'svelte-loader',
          options: {
            compilerOptions: {
              dev: argv.mode !== 'production',
            },
            hotReload: argv.mode !== 'production',
            preprocess: preprocess({
              postcss: true,
            }),
          },
        },
      },
      {
        test: /node_modules\/svelte\/.*\.mjs$/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/,
        exclude: /\.file.css$/i,
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
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './docs/index.html'), // template file
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.SourceMapDevToolPlugin({}),
  ],
  // devServer: {
  //   historyApiFallback: true,
  //   hot: true,
  // },
});
