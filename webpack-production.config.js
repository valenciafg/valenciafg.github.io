const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'dist');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: {
        main: path.join(__dirname, '/src/app/app.js')
    },
    output: {
        path: buildPath+'/scripts', // Path of output file
        filename: 'app.js', // Name of output file
    },
    module:{
        loaders: [
            {
                test: /\.js$/, // All .js files
                loaders: ['babel-loader'], // react-hot is like browser sync and babel loads jsx and es6-7
                exclude: [nodeModulesPath]
            },    
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    "css","sass"),
                query: {
                    includePaths: [path.resolve(__dirname, "./src/styles")]
                }        
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
            compress: {
                // suppresses warnings, usually from module minification
                warnings: false,
            },
        }),
        new ExtractTextPlugin(path.resolve(__dirname,'dist/styles/main.css'), {
            allChunks: true
        })
    ]
};

module.exports = config;