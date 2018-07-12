import 'phaser';
import {Test} from './scenes/test';
import config from './config';

// Prepare the default scene
let example = new Test();
config.scene = example;

// Start the game
let game = new Phaser.Game(config);
