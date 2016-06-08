var webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');

var config = {
    entry: './app/app.jsx',
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
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ["", ".js", ".jsx"]
    }
};

module.exports = config;