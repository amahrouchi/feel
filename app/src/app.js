import Phaser from 'phaser';
import MainMenu from './scenes/MainMenu';
import config from './config';
import CharacterSelection from "./scenes/CharacterSelection";

// Prepare the default scene
config.scene = [
    new MainMenu(),
    new CharacterSelection()
];

// Start the game
let game  = new Phaser.Game(config);

for (let sceneItem of config.scene) {
    sceneItem.game = game;
}
