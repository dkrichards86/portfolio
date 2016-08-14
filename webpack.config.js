var webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');

var config = {
    entry: './app.jsx',
    module: {
        loaders: [
            {
                test: /\.js(x)?$/,
                exclude: [nodeModulesPath],
                loader: "babel",
                query:
                {
                    presets:['es2015', 'react']
                }
            }
        ]
    },
    output: {
        path: __dirname,
        filename: 'dist/bundle.js'
    },
    resolve: {
        extensions: ["", ".js", ".jsx"]
    }
};

if (process.env.NODE_ENV === 'production') {
    config.plugins = [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        })
    ];
}
else {
    config.plugins = [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        })
    ];
}

module.exports = config;
