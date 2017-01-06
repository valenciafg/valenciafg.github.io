const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'dist');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//const ExtractTextPlugin2 = require("extract-text-webpack-plugin");

const config = {
    entry: [path.join(__dirname, '/src/app/app.js')],
    // Render source-map file for final build
    devtool: 'source-map',
    // output config
    output: {
        path: buildPath+'/js', // Path of output file
        filename: 'app.js', // Name of output file
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
            compress: {
                // suppresses warnings, usually from module minification
                warnings: false,
            },
        }),
        new ExtractTextPlugin("styles.css"),
        //new ExtractTextPlugin2("pppp.css"),
        // Allows error warnings but does not stop compiling.
        // new webpack.NoErrorsPlugin(),
        // Transfer Files
        /*new TransferWebpackPlugin(
            [
                {from: 'www'},
            ],
            path.resolve(__dirname, 'src')
        ),*/
    ],
    module: {
        loaders: [
            {
                test: /\.js$/, // All .js files
                loaders: ['babel-loader'], // react-hot is like browser sync and babel loads jsx and es6-7
                exclude: [nodeModulesPath],
            },
            /*{
                test: /\.css$/,
                loader: ExtractTextPlugin2.extract("style-loader", "css-loader")
            },*/
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"],
                loader: ExtractTextPlugin.extract(
                    "style",
                    "css!sass"),
                query: {
                    includePaths: [path.resolve(__dirname, "./src/styles")]
                }
            }
        ],
    }
};

module.exports = config;
