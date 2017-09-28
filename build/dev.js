const webpack = require("webpack");
const path = require("path");
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require("./webpack.config.dev.js");
const compiler = webpack(webpackConfig);
const server = new WebpackDevServer(compiler, {
	stats: {
		colors: true
	},
	historyApiFallback: true,
	contentBase: path.join(__dirname, ".."),

	hot: true,
	overlay: true,
	disableHostCheck: true,
	proxy: {
		'/api/**': {
            // target: 'http://rapapi.org/mockjs/20340',
			target: 'http://10.0.0.119',
			// target: 'http://10.0.0.171:7300/mock/59bf7ebab1ce1c2d01a29d67',
			changeOrigin: true
		}
	},
});

server.listen(9000, "0.0.0.0", function(err) {
	console.log(err || "Starting server on http://localhost:9000");
});
