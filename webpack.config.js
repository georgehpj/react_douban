var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        './assets/javaScripts/index' // Your appʼs entry point
    ],
    output: {
        path: path.join(__dirname, '/view/dist'),
        filename: 'index.js',
        publicPath:'/view/dist/'
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
    }
}