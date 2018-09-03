import Phaser from 'phaser';

/**
 * Handles the minimap display
 */
export default class Minimap {

    /**
     * Constructor
     * @param {Array} matrix The matrix used to generate the map
     */
    constructor(matrix) {
        this._matrix = matrix;
    }

    /**
     * Displays the minimap
     * @return {void}
     */
    generate() {

        let y = 0;
        for (let line of this._matrix) {
            let x = 0;
            for (let cell of line) {

                // let rect = Phaser.Geom.Rectangle();

                x++;
            }
            y++;
        }


    }


}
