const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'dist');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = {
  devtool: 'inline-source-map',
  // Entry points to the project
  entry: [
    path.join(__dirname, '/src/app/app.js'),
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    
  ],    
  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: '/'
  },  
  module: {
    loaders: [
      {
        test: /\.js$/, // All .js files
        loaders: ['react-hot-loader','babel-loader'],
        exclude: [nodeModulesPath],
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.css$/i,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.png$/,
        loader: 'url-loader',
        options: { limit: 100000 } ,
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader'
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      }
    ],
  },
  plugins: [
      new ExtractTextPlugin('style.css', { allChunks: true }),
  ],
  // Server Configuration options
  devServer: {
    contentBase: './', // Relative directory for base of server
    devtool: 'inline-source-map',
    hot: true, // Live-reload
    inline: true,
    stats: 'errors-only',
    colors: true,
  },
  plugins: [
    // Enables Hot Modules Replacement
    new webpack.HotModuleReplacementPlugin(),
    // Allows error warnings but does not stop compiling.
    //new webpack.NoErrorsPlugin(),
    // Moves files
    /*new TransferWebpackPlugin([
      {from: 'www'},
    ], path.resolve(__dirname, 'src')),*/
  ],
};

module.exports = config;
