const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/js/app.js',
	output: {
		path: path.resolve(__dirname, 'assets/js'),
		filename: 'bundle.js',
		publicPath: '/assets/js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			}
		]
	}
};