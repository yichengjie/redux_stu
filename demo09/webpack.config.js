var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
  entry: {
    'demo': "./src/main.js"
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: [path.resolve(__dirname, "src"),path.resolve(__dirname, "../node_modules/rctui/")],
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.(css|less)$/,
        loader: 'style-loader!css-loader!postcss-loader!less-loader'
      },
      { test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url-loader?limit=10000&name=./images/[name].[ext]'
      }
    ]
  },
  postcss: function(){
    return [autoprefixer, precss];
  }
};
