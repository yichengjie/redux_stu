var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname+"/dist",
        filename: 'bundle.js',
        publicPath:'./dist'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
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
                exclude: /(node_modules|bower_components)/,
                loader:"babel-loader"
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