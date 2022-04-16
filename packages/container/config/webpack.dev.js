const { merge } = require('webpack-merge');
const ModuleFederation = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8086,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  plugins: [
    new ModuleFederation({
      name: 'container',
      remotes: {
        'marketing': 'marketing@http://localhost:8085/remoteEntry.js'
      },
      shared: packageJson.dependencies
    })
  ]
}

// devConfig going to over ride if anything collides in priority because merge takes it from L -> R
module.exports = merge(commonConfig, devConfig)