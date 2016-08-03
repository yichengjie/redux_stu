var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
      "query":'./src/query.js'
    },
    output: {
        path: __dirname+"/dist",
        filename: '[name].js',
        publicPath:'./dist'
    },
    module: {
        preLoaders: [
          {
            test: /\.(js|jsx)$/,
            loader: 'eslint-loader',
            include: [path.resolve(__dirname, "src")],
            exclude: /(node_modules|bower_components)/
          },
        ],
        loaders: [
            {
                test: /.(jsx|js)?$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
