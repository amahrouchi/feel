import SenseConfig from "../config/sense";
import LabyrinthConfig from "../config/labyrinth";

export default class AbstractSense {

    /**
     * Initializes the players
     * @param {AbstractScene} scene
     */
    constructor(scene) {
        this._scene = scene;
        this._sprite = null;
    }

    /**
     * Creates the player in the scene
     * @return {Phaser.Physics.Arcade.Sprite}
     */
    create() {
        let positions = this._playerPosition();
        this._sprite  = this._scene.physics.add.sprite(positions.x, positions.y, 'walkFront0');
        this._sprite.setScale(SenseConfig.PLAYER_SPRITE_RATIO);
        this._sprite.body.setSize(SenseConfig.PLAYER_HITBOX_WIDTH, SenseConfig.PLAYER_HITBOX_HEIGHT);
        this._sprite.body.setOffset(SenseConfig.PLAYER_HITBOX_OFFSET_X, SenseConfig.PLAYER_HITBOX_OFFSET_Y);
        this._sprite.setCollideWorldBounds(true);
        this._scene.physics.add.collider(this._scene._layers.wallsLayer, this._sprite);

        return this._sprite;
    }

    /**
     * Determines the player position at the beginning of the game
     * @returns {{x: number, y: number}}
     * @private
     */
    _playerPosition() {

        let x = 0,
            y = 0;

        // First cell of the matrix
        break_block: {
            y = 0;
            for (let line of this._scene._labyrinth.matrix) {
                x = 0;
                for (let cell of line) {
                    if (cell === 1) {
                        break break_block;
                    }
                    x++;
                }
                y++;
            }
        }

        let cellSizeInPixels = LabyrinthConfig.TILE_SIZE * LabyrinthConfig.MAP_SIZE_RATIO;

        return {
            x : x * cellSizeInPixels + cellSizeInPixels / 2,
            y : y * cellSizeInPixels + cellSizeInPixels / 2,
        };
    }
}