const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');


const commonConfig = require('./webpack.common');

const devConfig= {
	mode: 'development',
	devServer: {
		port: 8081
	},

	plugins: [	
		new HtmlWebpackPlugin({
			template: './public/index.html'
		}),

		new ModuleFederationPlugin({
			name: 'marketing',
			filename: 'remoteEntry.js',
			exposes: {
				'./MarketingRoot' :  './src/bootstrap'
			},
			shared: [ 'react', 'react-dom']
		}),	
	]
};

module.exports = merge(commonConfig, devConfig);
