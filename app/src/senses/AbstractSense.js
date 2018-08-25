import SenseConfig from "../config/sense";
import LabyrinthConfig from "../config/labyrinth";

/**
 * Abstract player class
 */
export default class AbstractSense
{

    /**
     * Initializes the players
     * @param {AbstractScene} scene
     */
    constructor(scene) {
        this._scene            = scene;
        this._sprite           = null;
        this._keys             = {};
        this._keyMode          = SenseConfig.QWERTY;
        this._canChangeKeyMode = true;
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

        // Create keys
        let keyW = this._scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
            keyA = this._scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
            keyS = this._scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
            keyD = this._scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
            keyZ = this._scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z),
            keyQ = this._scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q),
            keyK = this._scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K);

        // QWERTY
        this._keys[SenseConfig.QWERTY] = {
            up    : keyW,
            down  : keyS,
            left  : keyA,
            right : keyD,
        };

        // AZERTY
        this._keys[SenseConfig.AZERTY] = {
            up    : keyZ,
            down  : keyS,
            left  : keyQ,
            right : keyD,
        };

        this._keys.switch = keyK;
    }

    /**
     * Player's update function
     * @return {void}
     */
    update() {

        let keys = this._keys[this._keyMode];

        // Reset the player velocity
        this._sprite.setVelocityX(0);
        this._sprite.setVelocityY(0);

        // Prevent opposite direction conflicts
        if (
            (keys.right.isDown && keys.left.isDown)
            || (keys.up.isDown && keys.down.isDown)
        ) {
            this._sprite.anims.play('idle', true);
            return;
        }

        // Play animations
        if (keys.right.isDown) {
            this._sprite.anims.play('walkRight', true);
        } else if (keys.left.isDown) {
            this._sprite.anims.play('walkLeft', true);
        } else if (keys.down.isDown) {
            this._sprite.anims.play('walkFront', true);
        } else if (keys.up.isDown) {
            this._sprite.anims.play('walkBack', true);
        } else {
            this._sprite.anims.play('idle', true);
        }

        // Move the player
        if (keys.right.isDown) {
            this._sprite.setVelocityX(SenseConfig.PLAYER_SPEED);
        }
        if (keys.left.isDown) {
            this._sprite.setVelocityX(-SenseConfig.PLAYER_SPEED);
        }
        if (keys.down.isDown) {
            this._sprite.setVelocityY(SenseConfig.PLAYER_SPEED);
        }
        if (keys.up.isDown) {
            this._sprite.setVelocityY(-SenseConfig.PLAYER_SPEED);
        }

        // Change QWERTY/AZERTY
        if (this._canChangeKeyMode && this._keys.switch.isDown) {
            this._keyMode = this._keyMode === SenseConfig.QWERTY
                ? SenseConfig.AZERTY
                : SenseConfig.QWERTY;

            // Prevent multiple hit
            this._canChangeKeyMode = false;
            setTimeout(() => {
                this._canChangeKeyMode = true
            }, 100);
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