const webpack = require('webpack');
const merge = require('webpack-merge');
var common = require('./webpack.common');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
	mode: 'production',
	/*module: {
		rules: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			use: ['babel-loader', 'eslint-loader']
		}, ]
	},*/
	devtool: 'source-map',
	'plugins': [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'Víctor Valencia - Fullstack Developer',
			filename: path.resolve(__dirname, 'index.html'),
			template: path.resolve(__dirname, 'src/index.html'),
			alwaysWriteToDisk: true
		}),
		new HtmlWebpackHarddiskPlugin(),
		new UglifyJSPlugin({
			sourceMap: true
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		})
	]
});