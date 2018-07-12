/* *************** */
/* TEST TypeScript */
/* *************** */

/// <reference path="types/phaser.d.ts"/>
import 'phaser';
import {Test} from "./scenes/test";

/* *********** */
/* TEST PHASER */
/* *********** */
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

let game = new Phaser.Game(config);
