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
        // Nothing here ATM
    }

    /**
     * The create function
     */
    create(data) {
        this._sense = this._createSense(data.sense);
        console.log(this._sense);
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
