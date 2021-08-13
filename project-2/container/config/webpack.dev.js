const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const webpackServerPort = 8080;

const devConfig= {
	mode: 'development',
	devServer: {
		port: webpackServerPort,
		historyApiFallback: true,
	},

	plugins: [	
		new ModuleFederationPlugin({
			name: 'container',
			remotes: {
				marketingMfe : 'marketing@http://localhost:8081/remoteEntry.js',
				authMfe : 'auth@http://localhost:8083/remoteEntry.js'
			},
			shared: packageJson.dependencies,
		}),
	]
};

module.exports = merge(commonConfig, devConfig);
