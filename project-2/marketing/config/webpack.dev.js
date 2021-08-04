const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig= {
	mode: 'development',
	devServer: {
		port: 8081
	},

	plugins: [	
		new ModuleFederationPlugin({
			name: 'marketing',
			filename: 'remoteEntry.js',
			exposes: {
				'./MarketingRoot' :  './src/bootstrap'
			},
			shared: packageJson.dependencies,
		}),	
	]
};

module.exports = merge(commonConfig, devConfig);
