import AbstractScene from "./AbstractScene";
import MenuEvents from "../misc/MenuEvents";

/**
 * Character selection scene
 */
export default class CharacterSelection extends AbstractScene {

    /**
     * CharacterSelection scene constructor
     */
    constructor() {
        super({'key' : 'CharacterSelection'});
        this._menuEvents = new MenuEvents();
    }

    /**
     * The preload function
     */
    preload() {
        // Nothing here ATM
        // console.log('preload');
    }

    /**
     * The create function
     */
    create(data) {
        this.displayTitle();
        this._displayCharacters();
    }

    /**
     * The update function
     */
    update() {
        // Nothing here ATM
    }

    /**
     * Display the characters list
     * @private
     */
    _displayCharacters() {
        let centerX     = this.game.config.width / 2,
            line1Y      = 250,
            line2Y      = 350,
            line1Offset = 200,
            line2Offset = 100;

        let sense1 = this._createSenseItem(centerX, line1Y, 'Sight');
        let sense2 = this._createSenseItem(centerX - line1Offset, line1Y, 'Sound');
        let sense3 = this._createSenseItem(centerX + line1Offset, line1Y, 'Smell');
        let sense4 = this._createSenseItem(centerX - line2Offset, line2Y, 'Taste');
        let sense5 = this._createSenseItem(centerX + line2Offset, line2Y, 'Touch');
    }

    /**
     * Create a text item for the character selection
     * @param {int} x
     * @param {int} y
     * @param {string} text
     * @returns {Phaser.GameObjects.Text}
     * @private
     */
    _createSenseItem(x, y, text) {
        let textConfig  = {
            fontSize   : '40px',
            fill       : '#fff',
            fontFamily : 'Arial'
        };

        let item = this.add.text(x, y, text, textConfig);
        item.setOrigin(0.5, 0)
            .setInteractive()
            .on('pointerover', this._menuEvents.textBlue)
            .on('pointerout', this._menuEvents.textWhite);

        return item;
    }
}