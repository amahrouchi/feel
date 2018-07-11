const path         = require('path');
const pathToPhaser = path.join(__dirname, '/node_modules/phaser/');
const phaserFile   = path.join(pathToPhaser, 'dist/phaser.js');

module.exports = {
    entry   : './app/src/app.ts',
    devtool : 'inline-source-map',
    watch   : true,
    output  : {
        filename : 'app.bundle.js',
        path     : path.resolve(__dirname, 'app/public/js')
    },
    resolve : {
        extensions : ['.ts', '.js'],
        alias      : {
            phaser : phaserFile
        }
    },
    module  : {
        rules : [
            {
                test    : /\.ts$/,
                use     : 'ts-loader',
                exclude : /node_modules/
            },
            {
                test   : /phaser\.js$/,
                loader : 'expose-loader?Phaser'
            }
        ]
    },
};