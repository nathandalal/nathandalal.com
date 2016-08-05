var path = require('path')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const webpack_config = {
    entry: './client/index.js',
    output: {
        path: './public/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /.js$/, loader: 'babel' },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract("css-loader!sass-loader") },
            { test: /\.css$/, loader: ExtractTextPlugin.extract("css-loader") }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].css", {allChunks: true})
    ]
}

module.exports = webpack_config