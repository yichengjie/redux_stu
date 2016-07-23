var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/main.jsx',
    output: {
        path: __dirname+"/dist",
        filename: 'bundle.js',
        publicPath:'./dist'
    },
    devtool: 'cheap-module-eval-source-map',
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
                loader: 'babel' // 'babel-loader' is also a legal name to reference
            }
        ]
    }/*,
    plugins:[
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings:false
            }
        })
    ]*/
};