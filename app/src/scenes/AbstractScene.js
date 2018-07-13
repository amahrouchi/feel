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
    constructor(config) {
        super(config);
        this._game = null;
    }

    /**
     * Gets the Phaser game object
     * @returns {Phaser.Game|null}
     */
    get game() {
        return this._game;
    }

    /**
     * Sets the scene game
     * @param {Phaser.Game} game
     */
    set game(game) {
        this._game = game;
    }

    /**
     * Display the title
     * @protected
     */
    displayTitle() {
        let centerX     = this.game.config.width / 2,
            titleConfig = {
                fontSize   : '100px',
                fill       : '#ff0000',
                fontFamily : 'Arial'
            };

        let title = this.add.text(centerX, 50, "Feel", titleConfig);
        title.setOrigin(0.5, 0);
    }
}
