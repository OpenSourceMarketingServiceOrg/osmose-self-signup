const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const config = require('../config');
const baseWebpackConfig = require('./webpack.base.conf')

let libConfig = {
  output: {
    path: path.resolve(config.build.distPath),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: path.resolve(config.build.srcPath),
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.css$/,
        loader: 'style!less!css'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin( {
      minimize : true,
      sourceMap : false,
      mangle: true,
      compress: {
        warnings: false
      }
    } )
  ]
};



module.exports = [
  merge(baseWebpackConfig, {
    output: {
      filename: 'dist/om-self-signup.min.js',
      libraryTarget: 'window',
      library: 'OSMoSEselfSignup',
    }
  }),
  merge(baseWebpackConfig, {
    output: {
      filename: 'dist/om-self-signup.js',
      libraryTarget: 'umd',
      library: 'OSMoSEselfSignup',
      umdNamedDefine: true
    }
  })
];
