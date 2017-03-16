const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'dist');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const postcssCssnext = require('postcss-cssnext')
// multiple extract instances
let extractCSS = new ExtractTextPlugin('styles/vendor.css', {allChunks: true});
let extractSASS = new ExtractTextPlugin('styles/main.css', {allChunks: true});



const config = {
    entry: {
        main: path.join(__dirname, '/src/app/app.js'),
        vendor: [
            'react',
            'react-dom',
            'react-tap-event-plugin',
            'react-typewriter',
            'semantic-ui-react'
        ]
    },
    output: {
        path: buildPath, // Path of output file
        filename: 'js/bundle.js', // Name of output file
    },
    module:{
        loaders: [
            {
                test: /\.js$/, // All .js files
                loaders: ['babel-loader', 'eslint-loader'], // react-hot is like browser sync and babel loads jsx and es6-7
                exclude: [nodeModulesPath]
            },
            {
                test: /\.scss$/,
                loader: extractSASS.extract(
                        'style-loader',
                        'css-loader?sourceMap!postcss-loader!resolve-url-loader!sass-loader?sourceMap',
                        {
                            publicPath: '../../src/'
                        }
                    )
            },
            {
                test: /\.css$/i,
                loader: extractCSS.extract('style-loader', 'css-loader')
            },
            {
                test: /\.(png|jpe?g|gif|svg|ico)$/,
                loader: 'file-loader',
                query: {
                    name: 'images/[name].[ext]'
                }
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file?name=[name].[ext]&limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file?name=[name].[ext]&limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file?name=[name].[ext]&limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file?name=[name].[ext]'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file?name=[name].[ext]&limit=10000&mimetype=image/svg+xml'
            }
        ]
    },
    postcss: [ postcssCssnext({ browsers: ['last 2 versions'] }) ],
    // sassLoader: {
    //     includePaths: [ 'src/images' ]
    // },
    plugins: [
        // Define production build to allow React to strip out unnecessary checks
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        // Minify the bundle
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                // suppresses warnings, usually from module minification
                warnings: false,
            },
        }),
        extractCSS,
        extractSASS,
        new webpack.optimize.CommonsChunkPlugin('vendor', 'js/vendor.js'),
    ]
};

module.exports = config;
