import AbstractScene from "./AbstractScene";
import MenuEvents from "../misc/MenuEvents";

/**
 * Main menu scene
 */
export default class MainMenu extends AbstractScene
{
    /**
     * MainMenu scene constructor
     */
    constructor() {
        super({'key' : 'MainMenu'});
        this._menuEvents = new MenuEvents();
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
        this.displayTitle();
        this._displayMenu();
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
     * Builds the main menu
     * @private
     */
    _displayMenu() {

        // The text menu config
        let centerX     = this.game.config.width / 2,
            textConfig  = {
                fontSize   : '40px',
                fill       : '#fff',
                fontFamily : 'Arial'
            };

        let play = this.add.text(centerX, 250, "Play", textConfig);
        play.setOrigin(0.5, 0)
            .setInteractive()
            .on('pointerdown', this._clickPlay)
            .on('pointerover', this._menuEvents.textBlue)
            .on('pointerout', this._menuEvents.textWhite)
        ;

        let options = this.add.text(centerX, 325, "Options", textConfig);
        options.setOrigin(0.5, 0)
               .setInteractive()
               .on('pointerdown', this._clickOptions)
               .on('pointerover', this._menuEvents.textBlue)
               .on('pointerout', this._menuEvents.textWhite)
        ;
    }

    /**
     * Click on play in the menu
     * @private
     */
    _clickPlay() {
        /*
         * `this` here refers to the 'Play' text object
         */
        this.scene.scene.start('CharacterSelection');
    }

    /**
     * Click on options in the menu
     * @private
     */
    _clickOptions() {
        /*
         * `this` here refers to the 'Options' text object
         */
        console.log('TODO: click options');
        console.log(this);
    }
}
