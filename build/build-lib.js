const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

let config = {
  output: {
    path: path.resolve(__dirname + '/dist/'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: __dirname,
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
  externals: {
    moment: 'moment'
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
  merge(config, {
    entry: path.resolve(__dirname + '/src/component/SelfSignUpPlugin.js'),
    output: {
      filename: 'om-self-signup.min.js',
      libraryTarget: 'window',
      library: 'OSMoSEselfSignup',
    }
  }),
  merge(config, {
    entry: path.resolve(__dirname + '/src/component/SelfSignUp.vue'),
    output: {
      filename: 'om-self-signup.js',
      libraryTarget: 'umd',
      library: 'OSMoSEselfSignup',
      umdNamedDefine: true
    }
  })
];
