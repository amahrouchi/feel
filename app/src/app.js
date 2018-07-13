import Phaser from 'phaser';
import MainMenu from './scenes/MainMenu';
import config from './config';
import CharacterSelection from "./scenes/CharacterSelection";
import CanvasResize from "./misc/CanvasResize";

// Prepare the default scene
config.scene = [
    new MainMenu(),
    new CharacterSelection()
];

// Start the game
let game = new Phaser.Game(config);
for (let sceneItem of config.scene) {
    sceneItem.game = game;
}

// Init the canvas resizing
let resizer = new CanvasResize(game);
resizer.init();
