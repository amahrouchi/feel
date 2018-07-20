import AbstractScene from "./AbstractScene";
import SenseConfig from "../config/sense";
import AbstractSense from "../senses/AbstractSense";
import Sight from "../senses/Sight";
import Sound from "../senses/Sound";
import Smell from "../senses/Smell";
import Touch from "../senses/Touch";
import Taste from "../senses/Taste";
import Labyrinth from "../maps/Labyrinth";
import LabyrinthConfig from "../config/labyrinth";

/**
 * Character selection scene
 */
export default class Game extends AbstractScene {

    /**
     * CharacterSelection scene constructor
     */
    constructor() {
        super({'key' : 'Game'});
        this._sense     = null;
        this._labyrinth = null;
        this._cursors = null
    }

    /**
     * The preload function
     */
    preload() {

        // Generate the labyrinth
        this._labyrinth = new Labyrinth();
        let tilemap     = this._labyrinth.generate(
            LabyrinthConfig.WIDTH,
            LabyrinthConfig.CENTER,
            LabyrinthConfig.PATH_RATIO,
            LabyrinthConfig.LOOP_RATIO,
            LabyrinthConfig.COMPLEXITY
        );
        // this._labyrinth.consoleDisplay();

        // Load assets
        this.load.image('tiles', 'maps/forest.png');
        this.load.tilemapTiledJSON('forest_json', tilemap);
    }

    /**
     * The create function
     */
    create(data) {
        // Get selected sense
        this._sense = this._createSense(data.sense);

        let map         = this.add.tilemap('forest_json');
        let groundTiles = map.addTilesetImage('tiles');
        let groundLayer = map.createStaticLayer('Ground', groundTiles, 0, 0);
        let wallsLayer  = map.createStaticLayer('Walls', groundTiles, 0, 0);

        // World size
        let worldWidth  = map.widthInPixels,
            worldHeight = map.heightInPixels;
        console.log(worldHeight, worldWidth);

        // Set the boundaries of our game world
        this.cameras.main.setBounds(0, 0, worldWidth, worldHeight);
        this.physics.world.setBounds(0, 0, worldWidth, worldHeight);

        this._cursors = this.input.keyboard.createCursorKeys();
    }

    /**
     * The update function
     */
    update() {
        let speed = 5;

        if (this._cursors.right.isDown) {
            this.cameras.main.x -= speed;
        }

        if (this._cursors.left.isDown) {
            this.cameras.main.x += speed;
        }

        if (this._cursors.down.isDown) {
            this.cameras.main.y -= speed;
        }

        if (this._cursors.up.isDown) {
            this.cameras.main.y += speed;
        }
    }

    /**
     * Create the sense object
     * @param {string} sense
     * @return {AbstractSense}
     * @private
     */
    _createSense(sense) {
        switch (sense) {
            case SenseConfig.SIGHT:
                return new Sight();
            case SenseConfig.SOUND:
                return new Sound();
            case SenseConfig.SMELL:
                return new Smell();
            case SenseConfig.TOUCH:
                return new Touch();
            case SenseConfig.TASTE:
                return new Taste();
            default:
                throw 'Unknown sense selected.'
        }
    }
}
