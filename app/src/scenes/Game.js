import AbstractScene from "./AbstractScene";
import Sense from "../config/Sense";
import AbstractSense from "../senses/AbstractSense";
import Sight from "../senses/Sight";
import Sound from "../senses/Sound";
import Smell from "../senses/Smell";
import Touch from "../senses/Touch";
import Taste from "../senses/Taste";

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
    }

    /**
     * The preload function
     */
    preload() {
        this.load.image('tiles', 'maps/forest.png');
        this.load.tilemapTiledJSON('forest_json', 'maps/forest.json');
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
            case Sense.SIGHT:
                return new Sight();
            case Sense.SOUND:
                return new Sound();
            case Sense.SMELL:
                return new Smell();
            case Sense.TOUCH:
                return new Touch();
            case Sense.TASTE:
                return new Taste();
            default:
                throw 'Unknown sense selected.'
        }
    }
}
