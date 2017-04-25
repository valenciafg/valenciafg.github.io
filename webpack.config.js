'use strict';
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
let extractCSS = new ExtractTextPlugin({ filename: 'styles/vendor.css', allChunks: true });
let extractSASS = new ExtractTextPlugin({ filename: 'styles/main.css', allChunks: true });
const env = process.env.NODE_ENV;
const ROOT = __dirname;
const SRC = ROOT + '/src';
const DIST = ROOT + '/dist';
const NODEMOUDLES_PATH = ROOT + '/node_modules';
const isProduction = env === 'producion';
//console.log(process.env.NODE_ENV)
const sourceMapQueryStr = isProduction ? '+sourceMap' : '-sourceMap';
const ENTRY = {
  main: SRC + '/app/app.js',
  common: [
    'jquery'
  ],
  react: [
    'lodash',
    'react',
    'react-dom'
  ]
};

const OUTPUT = {
  filename: '[name].js',
  path: DIST
};

const RULES = [
  {
    enforce: 'pre',
    test: /\.js?$/,
    include: SRC + '/app',
    use: 'eslint-loader'
  },
  {
    test: /\.js?$/,
    exclude: [NODEMOUDLES_PATH],
    use: [{
      loader: 'babel-loader',
      options: {
        babelrc: false,
        presets: ['es2015', 'react', 'stage-2'],
        plugins: ['transform-decorators-legacy']
      }
    }]
  },
  {
    test: /.css$/,
    use: extractCSS.extract({
      fallback: 'style-loader',
      use: ['css-loader']
    })
  },
  {
    test: /\.scss$/,
    use: extractSASS.extract({
      use: [{
        loader: "css-loader"
      }, {
        loader: "sass-loader"
      }],
      // use style-loader in development
      fallback: "style-loader"
    })
  },
  {
    test: /\.(ttf|eot|png|jpe?g|gif|svg|ico)$/,
    include: SRC,
    loader: 'file-loader',
    options: {
      name: '[path][name].[ext]'
    }
  },
  {
    test: /\.woff2?$/,
    include: SRC,
    loader: 'url-loader',
    options: {
      limit: 10000,
      mimetype: 'application/font-woff',
      name: '[path][name].[ext]'
    }
  },
  {
    test: /\.(ttf|eot|woff2?|png|jpe?g|gif|svg)$/,
    include: /node_modules|bower_components/,
    loader: 'file-loader',
    options: {
      name: 'vendor/[name].[ext]'
    }
  }
];

const PLUGINS = [
  new CleanWebpackPlugin(['dist'], {
    root: ROOT,
    verbose: false
  }),
  new webpack.optimize.CommonsChunkPlugin({
    names: ['common', 'react'],
    minChunks: Infinity
  }),
  extractCSS,
  extractSASS,
  new webpack.ProvidePlugin({
    $: "jquery"
  })
];

const webpackConfig = {
  entry: ENTRY,
  output: OUTPUT,
  module: {
    rules: RULES
  },
  plugins: PLUGINS,
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      NODEMOUDLES_PATH,
      SRC,
      SRC + '/app',
      DIST
    ]
  }
};

module.exports = webpackConfig;
