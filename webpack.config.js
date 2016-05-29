var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: [
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        './assets/javaScripts/index' // Your appʼs entry point
    ],
    output: {
        path: path.join(__dirname, '/view/decodeJs'),
        filename: 'index.js',
        publicPath:'/assets/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['react-hot','jsx?harmony'],exclude: /node_modules/},
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}