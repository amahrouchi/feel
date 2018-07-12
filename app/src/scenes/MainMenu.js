import AbstractScene from "./AbstractScene";

/**
 * Main menu scene
 */
export default class MainMenu extends AbstractScene
{
    /**
     * Constructor
     */
    constructor() {
        super({'key' : 'MainMenu'})
    }

    /**
     * The preload function
     */
    preload() {
        // Nothing here at the moment
    }

    /**
     * The create function
     */
    create() {
        this._buildMenu();
    }

    /**
     * The update function
     */
    update() {
        // Nothing here at the moment
    }

    /* **************************** */
    /* ****** PRIVATE MEMBERS ***** */
    /* **************************** */

    /**
     * Builds the main manu
     * @private
     */
    _buildMenu() {

        // The text menu config
        let centerX     = this._game.config.width / 2,
            textConfig  = {
                fontSize   : '40px',
                fill       : '#fff',
                fontFamily : 'Arial'
            },
            titleConfig = {
                fontSize   : '100px',
                fill       : '#ff0000',
                fontFamily : 'Arial'
            };

        let title = this.add.text(centerX, 50, "Feel", titleConfig);
        title.setOrigin(0.5, 0);

        let play = this.add.text(centerX, 250, "Play", textConfig);
        play.setOrigin(0.5, 0)
            .setInteractive()
            .on('pointerdown', this._clickPlay);

        let options = this.add.text(centerX, 325, "Options", textConfig);
        options.setOrigin(0.5, 0)
            .setInteractive()
            .on('pointerdown', this._clickOptions);
    }

    /**
     * Click on play in the menu
     * @private
     */
    _clickPlay() {
        /*
         * `this` here refers to the 'Play' text object
         */
        console.log(this);
        this.setFill('#00f');
    }

    /**
     * Click on options in the menu
     * @private
     */
    _clickOptions() {
        console.log('TODO: click options');
    }
}
