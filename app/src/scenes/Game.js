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
        this._sense = null;
        this._labyrinth = null;
        this._tilemap = null;
    }

    /**
     * The preload function
     */
    preload() {

        // Generate the labyrinth
        this._labyrinth = new Labyrinth();
        this._tilemap = this._labyrinth.generate(
            LabyrinthConfig.WIDTH,
            LabyrinthConfig.CENTER,
            LabyrinthConfig.PATH_RATIO,
            LabyrinthConfig.LOOP_RATIO,
            LabyrinthConfig.COMPLEXITY
        );
        // this._labyrinth.consoleDisplay();

        // Load assets
        this.load.image('tiles', 'maps/forest.png');
        this.load.tilemapTiledJSON('forest_json', this._tilemap);
    }

    /**
     * The create function
     */
    create(data) {
        // Get selected sense
        this._sense = this._createSense(data.sense);
        // console.log(this._sense);

        let map         = this.add.tilemap('forest_json');
        let groundTiles = map.addTilesetImage('tiles');
        let groundLayer = map.createStaticLayer('Ground', groundTiles, 0, 0);
        let wallsLayer  = map.createStaticLayer('Walls', groundTiles, 0, 0);

        // console.log(this._labyrinth.matrix);

        // the player will collide with this layer
        // groundLayer.setCollisionByExclusion([-1]);

        // set the boundaries of our game world
        // this.physics.world.bounds.width = groundLayer.width;
        // this.physics.world.bounds.height = groundLayer.height;

    }

    /**
     * The update function
     */
    update() {
        // Nothing here ATM
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
