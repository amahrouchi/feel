import LabyrinthConfig from '../config/labyrinth';
import Config from '../config';

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
        this._previousCell = {
            x : null,
            y : null
        };
    }

    /**
     * Displays the minimap
     * @return {void}
     */
    generate() {
        // Map style
        let wallsGraphics = this._scene.add.graphics({fillStyle : {color : LabyrinthConfig.MAPS.MINI_MAP.WALLS_COLOR}});
        let pathGraphics  = this._scene.add.graphics({fillStyle : {color : LabyrinthConfig.MAPS.MINI_MAP.PATH_COLOR}});

        // Map following the camera
        wallsGraphics.setScrollFactor(0);
        pathGraphics.setScrollFactor(0);

        // Draw the map
        let y = 0;
        for (let line of this._matrix) {
            let x = 0;
            for (let cell of line) {
                let rect = this._buildRectangle(x, y);
                cell === 0 ? wallsGraphics.fillRectShape(rect) : pathGraphics.fillRectShape(rect);
                x++;
            }
            y++;
        }
    }

    /**
     * Updates the drawMinimap display
     * @return {void}
     */
    update() {

        // Reset previous cell color
        if (this._previousCell.x !== null && this._previousCell.y !== null) {
            let pathGraphics = this._scene.add.graphics({fillStyle : {color : LabyrinthConfig.MAPS.MINI_MAP.PATH_COLOR}});
            pathGraphics.setScrollFactor(0);
            let pathRect = this._buildRectangle(this._previousCell.x, this._previousCell.y);
            pathGraphics.fillRectShape(pathRect);
        }

        let Xratio = this._scene.sense.position.ratio.x,
            Yratio = this._scene.sense.position.ratio.y;

        let x = Math.ceil(LabyrinthConfig.WIDTH * Xratio) - 1,
            y = Math.ceil(LabyrinthConfig.WIDTH * Yratio) - 1;

        let playerGraphics = this._scene.add.graphics({fillStyle : {color : LabyrinthConfig.MAPS.MINI_MAP.PLAYER_COLOR}});
        playerGraphics.setScrollFactor(0);
        let rect = this._buildRectangle(x, y);
        playerGraphics.fillRectShape(rect);

        this._previousCell = {x : x, y: y};
    }

    /**
     * Builds a minimap cell
     * @param {int} x
     * @param {int} y
     * @return {Phaser.Geom.Rectangle}
     * @private
     */
    _buildRectangle(x, y) {
        let rect    = new Phaser.Geom.Rectangle();
        rect.width  = LabyrinthConfig.MAPS.MINI_MAP.CELL_WIDTH;
        rect.height = LabyrinthConfig.MAPS.MINI_MAP.CELL_HEIGHT;

        // Scene width - (minimap width) - (minimap X position) + (X position of the current cell of the minimap)
        rect.x = Config.width - (LabyrinthConfig.MAPS.MINI_MAP.CELL_WIDTH * LabyrinthConfig.WIDTH) - LabyrinthConfig.MAPS.MINI_MAP.POSITION_X + x * LabyrinthConfig.MAPS.MINI_MAP.CELL_WIDTH;

        // Scene height - (minimap height) - (minimap Y position) + (Y position of the current cell of the minimap)
        rect.y = Config.height - (LabyrinthConfig.MAPS.MINI_MAP.CELL_HEIGHT * LabyrinthConfig.WIDTH) - LabyrinthConfig.MAPS.MINI_MAP.POSITION_Y + y * LabyrinthConfig.MAPS.MINI_MAP.CELL_HEIGHT;

        return rect;
    }
}
