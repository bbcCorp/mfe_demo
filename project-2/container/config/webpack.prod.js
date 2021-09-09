const { merge } = require('webpack-merge');

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig= {
	mode: 'production',
	output: {
		filename: '[name].[contenthash].js'
	},

	plugins: [	
		new ModuleFederationPlugin({
			name: 'container',
			remotes: {
                // These needs to be set to some production domain
				marketingMfe : `marketing@${domain}/marketing/latest/remoteEntry.js`,
				authMfe : `auth@http://${domain}/auth/latest/remoteEntry.js`,
				dashboardMfe : `dashboard@http://${domain}/dashboard/remoteEntry.js`
			},
			shared: packageJson.dependencies,
		}),	
	]
};

module.exports = merge(commonConfig, prodConfig);
