import Phaser from 'phaser';

/**
 * Abstract scene class
 */
export default class AbstractScene extends Phaser.Scene
{
    /**
     * Constrcuctor
     * Sets the Phaser game object and the scene config
     * @param {{}} config
     */
    constructor (config) {
        super(config);
        this._game = null;
    }

    /**
     * Sets the scene game
     * @param {Phaser.Game} game
     */
    set game (game) {
        this._game = game;
    }
}
