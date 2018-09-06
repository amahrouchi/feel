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
        this._scene          = scene;
        this._matrix         = matrix;
        this._playerGraphics = null;
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
        if (this._playerGraphics === null) {
            // Marker position
            let x = LabyrinthConfig.WIDTH * this._scene.sense.position.ratio.x,
                y = LabyrinthConfig.WIDTH * this._scene.sense.position.ratio.y;

            // Display the marker on the map
            this._playerGraphics = this._scene.add.graphics({fillStyle : {color : LabyrinthConfig.MAPS.MINI_MAP.PLAYER_COLOR}});
            this._playerGraphics.setScrollFactor(0);
            let rect = this._buildRectangle(x, y, true);
            this._playerGraphics.fillRectShape(rect);

            // Wait until it has been displayed to destroy it
            setTimeout(() => {
                this._playerGraphics.destroy();
                this._playerGraphics = null
            });
        }
    }

    /**
     * Builds a minimap cell
     * @param {int} x
     * @param {int} y
     * @param {boolean} isMarker
     * @return {Phaser.Geom.Rectangle}
     * @private
     */
    _buildRectangle(x, y, isMarker = false) {
        let rect = new Phaser.Geom.Rectangle();

        rect.width  = LabyrinthConfig.MAPS.MINI_MAP.CELL_WIDTH;
        rect.height = LabyrinthConfig.MAPS.MINI_MAP.CELL_HEIGHT;
        if (isMarker) {
            rect.width  = LabyrinthConfig.MAPS.MINI_MAP.MARKER_WIDTH;
            rect.height = LabyrinthConfig.MAPS.MINI_MAP.MARKER_HEIGHT;
        }

        // Scene width - (minimap width) - (minimap X position) + (X position of the current cell of the minimap)
        rect.x = Config.width - (LabyrinthConfig.MAPS.MINI_MAP.CELL_WIDTH * LabyrinthConfig.WIDTH) - LabyrinthConfig.MAPS.MINI_MAP.POSITION_X + x * LabyrinthConfig.MAPS.MINI_MAP.CELL_WIDTH;

        // Scene height - (minimap height) - (minimap Y position) + (Y position of the current cell of the minimap)
        rect.y = Config.height - (LabyrinthConfig.MAPS.MINI_MAP.CELL_HEIGHT * LabyrinthConfig.WIDTH) - LabyrinthConfig.MAPS.MINI_MAP.POSITION_Y + y * LabyrinthConfig.MAPS.MINI_MAP.CELL_HEIGHT;

        // Offsets the marker of half its size to place it properly on the map
        if (isMarker) {
            rect.x = rect.x - LabyrinthConfig.MAPS.MINI_MAP.MARKER_WIDTH / 2;
            rect.y = rect.y - LabyrinthConfig.MAPS.MINI_MAP.MARKER_HEIGHT / 2;
        }

        return rect;
    }
}
