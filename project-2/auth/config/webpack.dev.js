const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const webpackServerPort = 8083;

const devConfig= {
	mode: 'development',
	output: {
		publicPath: `http://localhost:8083/`,
	},

	devServer: {
		port: webpackServerPort,
		historyApiFallback: true,
	},

	plugins: [	
		new ModuleFederationPlugin({
			name: 'auth',
			filename: 'remoteEntry.js',
			exposes: {
				'./AuthRoot' :  './src/bootstrap'
			},
			shared: packageJson.dependencies,
		}),	
	]
};

module.exports = merge(commonConfig, devConfig);
