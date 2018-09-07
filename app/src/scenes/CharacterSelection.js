import AbstractScene from "./AbstractScene";
import MenuEvents from "../misc/MenuEvents";
import SenseConfig from "../config/sense";

/**
 * Character selection scene
 */
export default class CharacterSelection extends AbstractScene
{

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

        let sense1 = this._createSenseItem(centerX, line1Y, 'Sight', SenseConfig.SIGHT),
            sense2 = this._createSenseItem(centerX - line1Offset, line1Y, 'Sound', SenseConfig.SOUND),
            sense3 = this._createSenseItem(centerX + line1Offset, line1Y, 'Smell', SenseConfig.SMELL),
            sense4 = this._createSenseItem(centerX - line2Offset, line2Y, 'Taste', SenseConfig.TASTE),
            sense5 = this._createSenseItem(centerX + line2Offset, line2Y, 'Touch', SenseConfig.TOUCH);
    }

    /**
     * Create a text item for the character selection
     * @param {int} x
     * @param {int} y
     * @param {string} text
     * @param {string} senseKey
     * @returns {Phaser.GameObjects.Text}
     * @private
     */
    _createSenseItem(x, y, text, senseKey) {
        let textConfig = {
            fontSize   : '40px',
            fill       : '#fff',
            fontFamily : 'Arial'
        };

        let item = this.add.text(x, y, text, textConfig);
        item.setOrigin(0.5, 0)
            .setInteractive()
            .on('pointerover', this._menuEvents.textBlue)
            .on('pointerout', this._menuEvents.textWhite)
            .on('pointerdown', this._selectSense, {
                'senseKey'           : senseKey,
                'characterSelection' : this,
            });

        return item;
    }

    /**
     * Select a sense to play with
     * @private
     */
    _selectSense() {
        this.characterSelection.scene.start('Game', {
            'sense' : this.senseKey
        });
    }
}
