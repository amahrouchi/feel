import LabyrinthConfig from '../config/labyrinth';

/**
 * Handles the minimap display
 */
export default class Minimap {

    /**
     * Constructor
     * @param {AbstractScene} scene
     * @param {Array} matrix The matrix used to generate the map
     */
    constructor(scene, matrix) {
        this._scene  = scene;
        this._matrix = matrix;
    }

    /**
     * Displays the minimap
     * @return {void}
     */
    generate() {
        let wallsGraphics = this._scene.add.graphics({fillStyle : {color : LabyrinthConfig.MAPS.MINI_MAP.WALLS_COLOR}});
        let pathGraphics  = this._scene.add.graphics({fillStyle : {color : LabyrinthConfig.MAPS.MINI_MAP.PATH_COLOR}});

        // Draw the map
        let y = 0;
        for (let line of this._matrix) {
            let x = 0;
            for (let cell of line) {

                let rect    = new Phaser.Geom.Rectangle();
                rect.width  = LabyrinthConfig.MAPS.MINI_MAP.CELL_WIDTH;
                rect.height = LabyrinthConfig.MAPS.MINI_MAP.CELL_HEIGHT;
                rect.x = LabyrinthConfig.MAPS.MINI_MAP.POSITION_X + x * LabyrinthConfig.MAPS.MINI_MAP.CELL_WIDTH;
                rect.y = LabyrinthConfig.MAPS.MINI_MAP.POSITION_Y + y * LabyrinthConfig.MAPS.MINI_MAP.CELL_HEIGHT;

                cell === 0 ? wallsGraphics.fillRectShape(rect) : pathGraphics.fillRectShape(rect);

                x++;
            }
            y++;
        }


    }


}
