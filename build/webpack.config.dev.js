'use strict'; // eslint-disable-line
var webpackMerge = require('webpack-merge');
const helpers = require('./helpers');
const baseConfig = require('./webpack.config.base');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const {TsConfigPathsPlugin} = require('awesome-typescript-loader');
var webpack = require('webpack');
var path = require('path');
// const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

// baseConfig.devtool = 'cheap-module-eval-source-map';
// baseConfig.entry = [
// 		'webpack-dev-server/client?http://localhost:9000',
// 		'webpack/hot/dev-server'
// 	]
// 	.concat(baseConfig.entry)
module.exports = webpackMerge(baseConfig, {
	output: {
		publicPath: '/',
		filename: 'assets/js/[name].js',
		chunkFilename: 'assets/js/[name].chunk.js'
	},
	module: {
		rules: [
			{
				// test: /\.tsx?$/,
				// loader: 'ts-loader'
			}, {
				test: /\.less$/,
				exclude: /\.local.less$/,
				use: [
					'style-loader', {
						loader: "css-loader",
						options: {
							importLoaders: 1
						}
					}, {
						loader: 'postcss-loader',
						// options: {
						// 	plugins: loader => [ // eslint-disable-line
						// 		require('autoprefixer')(),
						// 	]
						// },
					},
					'less-loader'
				]
			}, {
				test: /\.local.less$/,
				use: [
					'style-loader', {
						loader: "css-loader",
						options: {
							modules: true,
							importLoaders: 1,
							localIdentName: '[local]__[hash:base64:7]'
							// camelCase: 'dashesOnly',
						}
					}, {
						loader: 'postcss-loader',
						options: {
							plugins: loader => [// eslint-disable-line
								require('autoprefixer')()]
						}
					},
					'less-loader'
				]
			}, {
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	devServer: {
		port: 9001,
		historyApiFallback: true
	},
	plugins: [
		//热替换
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: ['vendor', 'polyfills']
			//多个html共用一个js文件，提取公共代码
		}),

		new HtmlWebpackPlugin({
			template: './src/index.html'
			// 自动向目标.html文件注入script和link标签
		})
	]
});
