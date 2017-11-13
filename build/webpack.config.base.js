'use strict'; // eslint-disable-line

var path = require('path');
const helpers = require('./helpers');
var webpack = require('webpack');
var rootPath = path.resolve(__dirname, '..'); // 项目根目录
var paths = {
	srcPath: path.join(rootPath, './src'),
	htmlPath: path.join(rootPath, './src/index.html')
}


module.exports = {
    entry: [
        path.join(rootPath,'./src/vendor/flexible.js'),
        path.join(rootPath,'./src/polyfills.ts'),
        path.join(rootPath,'./src/vendor.ts'),
        path.join(rootPath,'./src/main.ts'),
        ],
  //   {
  //   'flexible':,
  //   'polyfills': '', // 运行Angular时所需的一些标准js
  //   'vendor': '', // Angular、Lodash、bootstrap.css......
  //   'app': './src/main.ts' // 应用代码
  // },
	output: {
		path: path.join(rootPath, './dist'),
		publicPath: '/',
	},

	resolve: {
		extensions: ['.js','.ts'],
		alias: {
			'SRC': paths.srcPath,
			'LESS': path.join(rootPath, './src/assets/less'),
			'IMAGES': path.join(rootPath, './src/assets/images'),
			'SVGS': path.join(rootPath, './src/assets/svgs'),
			'CONTAINER': path.join(rootPath, './src/container'),
			'COMPONENTS': path.join(rootPath, './src/components'),
			'CONSTANTS': path.join(rootPath, './src/constants'),
			'SERVICE': path.join(rootPath, './src/service'),
			'UTILS': path.join(rootPath, './src/utils'),
		}
	},

	module: {
        exprContextCritical: false,
		rules: [{
        test   : /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
        //awesome-typescript-loader - 一个用于把TypeScript代码转译成ES5的加载器，它会由tsconfig.json文件提供指导
        //angular2-template-loader - 用于加载Angular组件的模板和样式
      }, {
        test: /\.json$/,
        use : 'json-loader'
      }, {
        test: /\.html$/,
        use: 'raw-loader',
        exclude: [helpers.root('src/index.html')]
        //html - 为组件模板准备的加载器
      }, {
        test:/\.(jpg|png|gif)$/,
        use:[{
            loader:'url-loader',
            options: {
                limit: 10240, // 10KB 以下使用 base64
                name: 'assets/image/[name]-[hash:6].[ext]'
            }
        }]
      },{
          test: /\.svg$/,
          include: path.join(rootPath, './src/assets/svgs'),
          use: [{
                  loader: 'svg-sprite-loader',
                  options: {}
              },
              'svg-fill-loader'
          ]
      }, {
          test: /\.(woff2?|eot|ttf|otf|svg)$/,
          exclude: path.join(rootPath, './src/assets/svgs'),
          use: [{
              loader: 'url-loader',
              options: {
                  limit: 10240, // 10KB 以下使用 base64
                  name: 'assets/fonts/[name]-[hash:6].[ext]'
              }
          }],
      }]
	},
}
