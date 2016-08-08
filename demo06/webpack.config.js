var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var LIB_PATH = path.resolve('./lib');

module.exports = {
    entry: {
      "query":'./src/query.js',
      "edit":'./src/edit.js'
    },
    output: {
        path: __dirname+"/dist",
        filename: '[name].js',
        publicPath:'./dist'
    },
    devtool: 'eval-source-map',
    resolve: {
        alias: {
            tui_core_lib:LIB_PATH+"/tui-core/index.js",
            tui_dialog_lib:LIB_PATH+"/tui-dialog/index.js",
            tui_drag_lib:LIB_PATH+"/tui-drag/index.js",
            jq_datepicker_lib: LIB_PATH+"/jq-datepicker/index.js",
            jq_timepicker_lib:LIB_PATH+"/jq-timepicker/index.js",
            jq_validate_lib:LIB_PATH+"/jq-validate/index.js",
            bt_growl_lib:LIB_PATH+"/bt-grow/jquery.bootstrap-growl.js",
            is_loading_lib:LIB_PATH+"/is-loading/index.js",
            moment_lib:LIB_PATH+"/moment/index.js",
            util_lib:LIB_PATH+"/util.js"
        }
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
    },
    plugins: [
        new webpack.BannerPlugin('{compony travelsky-dbky ,\n author: yicj,\n email : 626659321@qq.com,\ncreate-date:2016/05/05}')
        ,new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery'
        })//这个可以使jquery变成全局变量，妮不用在自己文件require('jquery')了
        //new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')//这是妮第三方库打包生成的文件
        ,new webpack.optimize.CommonsChunkPlugin({
          name: "commons",
          filename: "commons.js"
        })
        // ,new webpack.optimize.UglifyJsPlugin({
        //     compress: {warnings: false}
        // }),
        // new webpack.DefinePlugin({
        //   'process.env':{
        //     'NODE_ENV': JSON.stringify('production')
        //   }
        // })
        //压缩打包的文件
    ]
};
