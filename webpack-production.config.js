const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'dist');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

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
        filename: 'bundle.js', // Name of output file
    },
    module:{
        loaders: [
            {
                test: /\.js$/, // All .js files
                loaders: ['babel-loader', 'eslint-loader'], // react-hot is like browser sync and babel loads jsx and es6-7
                exclude: [nodeModulesPath]
            },
            /*{
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    "css","sass"),
                query: {
                    includePaths: [path.resolve(__dirname, "./src/styles")]
                }
            },*/
            {
                test: /\.css$/i,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
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
        ]
    },
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
        new ExtractTextPlugin('main.css', {allChunks: true}),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    ]
};

module.exports = config;
