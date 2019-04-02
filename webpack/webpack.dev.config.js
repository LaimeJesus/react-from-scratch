const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const parentDir = path.join(__dirname, '../src');

module.exports = {
	entry: path.join(parentDir, '/index.js'), // initial file from app
	module: { // every rule applied to the files being bundled
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		},{
			test: /\.less$/,
			loaders: ['style-loader', 'css-loader', 'less-loader']
		}
		]
	},
	output: { // output file
		path: parentDir + '/dist',
		filename: 'bundle.js'
	},
	resolve: { // extended functionalities for webpack
		extensions: ['.js', '.jsx'], // allow import js and jsx files without using those extensions
		modules: ['src', 'node_modules'] // allow relative import for those modules
	},
	devServer: {
		contentBase: parentDir,
		historyApiFallback: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../src/index.html')
		})
	]
};
