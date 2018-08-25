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
import Config from '../config'

/**
 * Game scene
 */
export default class Game extends AbstractScene
{

    /**
     * CharacterSelection scene constructor
     */
    constructor() {
        super({'key' : 'Game'});
        this._sense     = null;
        this._labyrinth = null;
        this._layers    = {};
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

        // Create map layers
        let map                  = this.add.tilemap('forest_json');
        let groundTiles          = map.addTilesetImage('tiles');
        this._layers.groundLayer = map.createStaticLayer('Ground', groundTiles, 0, 0);
        this._layers.wallsLayer  = map.createDynamicLayer('Walls', groundTiles, 0, 0);
        this._layers.wallsLayer.setCollisionByExclusion([-1]); // Enable collision for this layer

        // World size
        let worldWidth  = map.widthInPixels,
            worldHeight = map.heightInPixels;

        // Set the boundaries of our game world
        this.cameras.main.setBounds(0, 0, worldWidth, worldHeight);
        this.physics.world.setBounds(0, 0, worldWidth, worldHeight);

        // Create the player
        this._sense.create();

        // Camera configuration
        this.cameras.main.startFollow(this._sense.sprite);
        this.cameras.main.setDeadzone(
            Config.width * LabyrinthConfig.DEADZONE_RATIO,
            Config.height * LabyrinthConfig.DEADZONE_RATIO
        );
    }

    /**
     * The update function
     */
    update() {
        this._sense.update();
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
                return new Sight(this);
            case SenseConfig.SOUND:
                return new Sound(this);
            case SenseConfig.SMELL:
                return new Smell(this);
            case SenseConfig.TOUCH:
                return new Touch(this);
            case SenseConfig.TASTE:
                return new Taste(this);
            default:
                throw 'Unknown sense selected.'
        }
    }
}
