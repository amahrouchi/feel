import Phaser from 'phaser';
import config from './config';
import MainMenu from './scenes/MainMenu';
import CharacterSelection from "./scenes/CharacterSelection";
import Game from "./scenes/Game";
import CanvasResize from "./misc/CanvasResize";
import Labyrinth from "./maps/Labyrinth";

// Prepare the default scene
config.scene = [
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

// ------------------------------------------
// TEST: display the labyrinth in the console
// ------------------------------------------
let lab = new Labyrinth();
let matrix = lab.generate(41, 21, 45, 10, 290);
for (let line of matrix) {
    let line2 = [];
    for (let val of line) {
        line2.push(
            val === 1 ? val : ' '
        );
    }
    console.log(...line2);
}
