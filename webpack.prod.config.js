if (!process.env.NODE_ENV) { process.env.NODE_ENV = 'production'; }

const extend = require('extend');
const webpack = require('webpack');
// Use extend instead of Object.assign to do a deep merge,
// because we're modifying nested properties on the new object.
const webpackConf = extend(true, {}, require('./webpack.common.config.js'));

webpackConf.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false },
    sourceMap: true
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  })
);

module.exports = webpackConf;
