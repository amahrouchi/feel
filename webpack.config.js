const path = require('path');

module.exports = {
    entry   : './app/src/app.ts',
    devtool : 'inline-source-map',
    watch : true,
    output  : {
        filename : 'app.bundle.js',
        path     : path.resolve(__dirname, 'app/public/js')
    },
    module  : {
        rules : [
            {
                test    : /\.tsx?$/,
                use     : 'ts-loader',
                exclude : /node_modules/
            }
        ]
    },
    resolve : {
        extensions : ['.tsx', '.ts', '.js']
    },
};