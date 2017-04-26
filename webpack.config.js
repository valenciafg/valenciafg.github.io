'use strict';
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
let extractCSS = new ExtractTextPlugin({ filename: 'styles/vendor.css', allChunks: true });
let extractSASS = new ExtractTextPlugin({ filename: 'styles/style.css', allChunks: true });
const env = process.env.NODE_ENV;
const ROOT_PATH = __dirname;
const SRC_PATH = path.join(ROOT_PATH, 'src');
const APP_PATH = path.join(ROOT_PATH, 'src/app');
const DIST_PATH = path.join(ROOT_PATH, 'dist');
const NODEMOUDLES_PATH = path.join(ROOT_PATH, 'node_modules');

const isProduction = env === 'producion';
//console.log(process.env.NODE_ENV)
const sourceMapQueryStr = isProduction ? '+sourceMap' : '-sourceMap';

const ENTRY = {
  main: 'app/app.js',
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
  filename: 'js/[name].js',
  path: DIST_PATH,
  publicPath: 'dist/'
};
const DEV_SERVER = {
  contentBase: ROOT_PATH
};
const RULES = [
  {
    enforce: 'pre',
    test: /\.js?$/,
    include: APP_PATH,
    use: 'eslint-loader'
  },
  {
    test: /\.js?$/,
    include: APP_PATH,
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
      publicPath: './',
      use: [
        'css-loader',
        'postcss-loader'
      ]
    })
  },
  {
    test: /\.scss$/,
    use: extractSASS.extract({
      fallback: "style-loader",
      publicPath: './',
      use: [
        'css-loader',
        'postcss-loader',
        'resolve-url',
        'sass-loader'
      ]
    })
  },
  {
    test: /\.(ttf|eot|png|jpe?g|gif|svg|ico)$/,
    include: SRC_PATH,
    loader: 'file-loader',
    options: {
      name: '[path][name].[ext]'
    }
  },
  {
    test: /\.woff2?$/,
    include: SRC_PATH,
    loader: 'url-loader',
    options: {
      limit: 10000,
      mimetype: 'application/font-woff',
      publicPath: '../',
      name: '[path][name].[ext]'
    }
  },
  {
    test: /\.(ttf|eot|woff2?|png|jpe?g|gif|svg)$/,
    include: /node_modules|bower_components/,
    loader: 'file-loader',
    options: {
      publicPath: '../',
      name: 'vendor/[name].[ext]'
    }
  }
];

const PLUGINS = [
  new CleanWebpackPlugin(['dist'], {
    root: ROOT_PATH,
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
  }),
  new webpack.LoaderOptionsPlugin({
    test: /\.s?css$/,
    options: {
      output: { path: DIST_PATH },
      context: SRC_PATH,
      postcss: [
        autoprefixer({ browsers: [
          "last 2 versions",
          "android 4",
          "opera 12"
        ] })
      ]
    }
  })
];

const webpackConfig = {
  context: SRC_PATH,
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
      SRC_PATH
    ]
  }
};

module.exports = webpackConfig;
