import SenseConfig from "../config/sense";
import LabyrinthConfig from "../config/labyrinth";

/**
 * Abstract player class
 */
export default class AbstractSense {

    /**
     * Initializes the players
     * @param {AbstractScene} scene
     */
    constructor(scene) {
        this._scene = scene;
        this._sprite = null;
        this._cursors = null;
    }

    /**
     * Sprite getter
     * @return {null}
     */
    get sprite() {
        return this._sprite;
    }

    /**
     * Creates the player in the scene
     * @return {void}
     */
    create() {

        // Create and place the player
        let positions = this._playerPosition();
        this._sprite  = this._scene.physics.add.sprite(positions.x, positions.y, 'walkFront0');
        this._sprite.setScale(SenseConfig.PLAYER_SPRITE_RATIO);
        this._sprite.body.setSize(SenseConfig.PLAYER_HITBOX_WIDTH, SenseConfig.PLAYER_HITBOX_HEIGHT);
        this._sprite.body.setOffset(SenseConfig.PLAYER_HITBOX_OFFSET_X, SenseConfig.PLAYER_HITBOX_OFFSET_Y);
        this._sprite.setCollideWorldBounds(true);
        this._scene.physics.add.collider(this._scene._layers.wallsLayer, this._sprite);

        // Create the cursors
        this._cursors = this._scene.input.keyboard.createCursorKeys();
    }

    /**
     * Player's update function
     * @return {void}
     */
    update() {

        // Reset the player velocity
        this._sprite.setVelocityX(0);
        this._sprite.setVelocityY(0);

        // Prevent opposite direction conflicts
        if (
            (this._cursors.right.isDown && this._cursors.left.isDown)
            || (this._cursors.up.isDown && this._cursors.down.isDown)
        ) {
            this._sprite.anims.play('idle', true);
            return;
        }


        // Play animations
        if (this._cursors.right.isDown) {
            this._sprite.anims.play('walkRight', true);
        } else if (this._cursors.left.isDown) {
            this._sprite.anims.play('walkLeft', true);
        } else if (this._cursors.down.isDown) {
            this._sprite.anims.play('walkFront', true);
        } else if (this._cursors.up.isDown) {
            this._sprite.anims.play('walkBack', true);
        } else {
            this._sprite.anims.play('idle', true);
        }

        // Move the player
        if (this._cursors.right.isDown) {
            this._sprite.setVelocityX(SenseConfig.PLAYER_SPEED);
        }
        if (this._cursors.left.isDown) {
            this._sprite.setVelocityX(-SenseConfig.PLAYER_SPEED);
        }
        if (this._cursors.down.isDown) {
            this._sprite.setVelocityY(SenseConfig.PLAYER_SPEED);
        }
        if (this._cursors.up.isDown) {
            this._sprite.setVelocityY(-SenseConfig.PLAYER_SPEED);
        }
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