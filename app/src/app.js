import Phaser from 'phaser';
import MainMenu from './scenes/MainMenu';
import config from './config';

// Prepare the default scene
let menu     = new MainMenu();
config.scene = menu;

// Start the game
let game  = new Phaser.Game(config);
menu.game = game;