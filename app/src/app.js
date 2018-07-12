/* ******** */
/* TEST ES6 */
/* ******** */

import 'phaser';
import {Test} from './scenes/test';

let example = new Test();

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: example
};

/* *********** */
/* TEST PHASER */
/* *********** */

let game = new Phaser.Game(config);
