'use strict'; // eslint-disable-line
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {TsConfigPathsPlugin} = require('awesome-typescript-loader');
const DashboardPlugin = require('webpack-dashboard/plugin');
const webpack = require('webpack');
const path = require('path');
// const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

// baseConfig.devtool = 'cheap-module-eval-source-map';
// baseConfig.entry = [
// 		'webpack-dev-server/client?http://localhost:9000',
// 		'webpack/hot/dev-server'
// 	]
// 	.concat(baseConfig.entry)
const rootPath = path.resolve(__dirname, '..'); // 项目根目录
const paths = {
	srcPath: path.join(rootPath, './src'),
	htmlPath: path.join(rootPath, './src/index.html'),
  staticPath: path.join(rootPath, './static'),
}
baseConfig.entry = ['webpack-dev-server/client?http://localhost:9000',
'webpack/hot/dev-server'].concat(baseConfig.entry);
module.exports = webpackMerge(baseConfig, {
    devtool:'cheap-module-source-map',
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

    },
	plugins: [
		new DashboardPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: ['vendor', 'polyfills']
			//多个html共用一个js文件，提取公共代码
		}),
        new CopyWebpackPlugin([{
          context: paths.staticPath,
          from: '**/*',
          to: 'assets/js/'
      }]),
        new webpack.DefinePlugin({
  		'process.env.NODE_ENV': JSON.stringify('development')
  	}),

		new HtmlWebpackPlugin({
			template: './src/index.html'
			// 自动向目标.html文件注入script和link标签
		})
	]
});
