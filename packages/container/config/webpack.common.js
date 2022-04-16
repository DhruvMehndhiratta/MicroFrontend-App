/**
 * '@babel/preset-react' converts all jsx into react.create element stuff
 * @babel/preset-env converts all es6, es7 and so on to es5
 * @babel/plugin-transform-runtime going to add new features such as aysnc await and some nice features
 */

 const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react','@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}