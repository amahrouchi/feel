import Phaser from 'phaser';
import config from './config';
import MainMenu from './scenes/MainMenu';
import CharacterSelection from "./scenes/CharacterSelection";
import Game from "./scenes/Game";
import CanvasResize from "./misc/CanvasResize";
import Preload from "./scenes/Preload";

// Prepare the default scene
config.scene = [
    new Preload(),
    new MainMenu(),
    new CharacterSelection(),
    new Game()
];

// Start the game
let game = new Phaser.Game(config);
for (let sceneItem of config.scene) {
    sceneItem.game = game;
}

// Init the canvas resizing
let resizer = new CanvasResize(game);
resizer.init();
