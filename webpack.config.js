let path    = require('path');

// Phaser
let phaserModule = path.join(__dirname, '/node_modules/phaser/');
let phaser       = path.join(phaserModule, 'dist/phaser.min.js');

module.exports = {
    mode   : 'development',
    entry  : './app/src/app.js',
    output : {
        path     : path.resolve(__dirname, 'app/public/js'),
        filename : 'app.bundle.js'
    },
    module : {
        rules : [
            {
                test    : /\.js$/,
                exclude : /node_modules/,
                use     : 'babel-loader'
            },
            {
                test : /phaser\.min\.js$/,
                use  : [
                    {
                        loader  : 'expose-loader',
                        options : {
                            exposes : {
                                globalName : 'Phaser',
                                override   : true,
                            },
                        },
                    },
                ],
            }
        ]
    },
    resolve : {
        // alias to import modules in ES6 JS scripts
        alias : {
            'phaser' : phaser,
        }
    },
    stats   : {
        colors : true
    },
    devtool : 'source-map',
    watch   : true
};
