const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.jsx'
  },
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: '[name].bundle.js',
    publicPath: 'dist/'
  }, 
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      /*{
        test: /\.jsx?$/, // both .js and .jsx
        loader: 'eslint-loader',
        exclude: /node_modules/,
        enforce: 'pre',
        options: {
          fix: true,
        },
      },*/
      
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader',
          'sass-loader?sourceMap'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[hash].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[hash].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({ 
      $: "jquery", 
      jQuery: "jquery", 
      "window.jQuery": "jquery" })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};