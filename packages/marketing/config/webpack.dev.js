const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederation = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

const commonConfig = require('./webpack.common');


const devConfig = {
  mode: 'development',
  devServer: {
    port: 8085,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  plugins: [
    new ModuleFederation({
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes: {
        './Marketing': './src/bootstrap'
      },
      shared: packageJson.dependencies
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
  ]
}

// devConfig going to over ride if anything collides in priority because merge takes it from L -> R
module.exports = merge(commonConfig, devConfig)