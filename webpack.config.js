let path    = require('path');
let webpack = require('webpack');

module.exports = {
    mode    : 'development',
    entry   : './app/src/app.js',
    output  : {
        path     : path.resolve(__dirname, 'app/public/js'),
        filename : 'app.bundle.js'
    },
    module  : {
        rules : [
            {
                test    : /\.js$/,
                exclude : /node_modules/,
                use     : 'babel-loader'
            }
        ]
    },
    stats   : {
        colors : true
    },
    devtool : 'source-map',
    watch   : true
};