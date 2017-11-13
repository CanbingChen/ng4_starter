var webpack = require('webpack');
var path = require('path');
var webpackMerge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
const baseConfig = require('./webpack.config.base');
var rootPath = path.resolve(__dirname, '..');
var paths = {
    htmlPath: path.join(rootPath, './src/index.html'),
    distPath: path.join(rootPath, './dist'),
    vendorPath: path.join(rootPath, './src/vendor'),
}
module.exports = webpackMerge(baseConfig,{
    devtool:'source-map',
    output: {
		filename: 'assets/js/[name].[chunkhash:8].js',
		chunkFilename: 'assets/js/[name].[chunkhash:8].chunk.js'
	},
    module:{
        rules:[{
            test: /\.less$/,
            exclude: /\.local.less$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [{
                    loader: 'css-loader',
                    options: {
                        minimize: true, // 进行css压缩
                        importLoaders: 1,
                        sourceMap: true,
                    }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        plugins: loader => [ // eslint-disable-line
                            require('autoprefixer')(),
                        ]
                    },
                }, 'less-loader'],
            })
        },{
            test: /\.local.less$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [{
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        // localIdentName: '[path][name]__[local]--[hash:base64:5]',
                        localIdentName: '[local]__[hash:base64:7]',
                        sourceMap: true,
                        minimize: true, // 进行css压缩
                    }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        plugins: loader => [ // eslint-disable-line
                            require('autoprefixer')(),
                        ]
                    },
                }, 'less-loader'],
            }),
        },{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [{
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        minimize: true,
                    }
                }],
            }),
        }]
    },
    plugins:[
        new CleanWebpackPlugin('dist', {
            root: rootPath,
            verbose: true, // write logs to console
        }),

        new CopyWebpackPlugin([{
            context: paths.vendorPath,
            from: '**/*',
            to: 'static/js'
        }]),

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false,
            }
        }),


        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function(module) {
                return module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.context && module.context.indexOf("node_modules") !== -1;
            }
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: "manifest",
            minChunks: Infinity
        }),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: paths.htmlPath,
            minify: {
                removeComments: true,
                removeAttributeQuotes: true,
                collapseWhitespace: true
            }
        }),

        new ExtractTextPlugin({
            filename: 'assets/css/[name].[contenthash:8].css',
            allChunks: true, // 是否把所有模块的css都分离出来
        })
    ]
})
