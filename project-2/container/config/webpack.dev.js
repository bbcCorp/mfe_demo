const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common');

const devConfig= {
	mode: 'development',
	devServer: {
		port: 8080
	},

	plugins: [	
		new HtmlWebpackPlugin({
			template: './public/index.html'
		}),
		new ModuleFederationPlugin({
			name: 'container',
			remotes: {
				marketingMfe : 'marketing@http://localhost:8081/remoteEntry.js'
			},
			shared: [ 'react', 'react-dom']
		}),	
	]
};

module.exports = merge(commonConfig, devConfig);
