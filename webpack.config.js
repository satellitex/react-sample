var debug   = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path    = require('path');

module.exports = {
    context: path.join(__dirname, "src"),
    entry: "./js/client.js",
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: __dirname + "/src/",
        filename: "client.min.js"
    },
    plugins: debug ? [] : [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ]
};