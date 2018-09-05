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
        this._scene   = scene;
        this._sprite  = null;
        this._keys    = {};
        this._keyMode = SenseConfig.QWERTY;

        // States
        this._canChangeKeyMode = true;
        this._isAttacking      = false;
        this._direction        = 'stop';

        // User's position on the map
        this._position = {
            ratio : {
                x : null,
                y : null
            }
        };
    }

    /**
     * Sprite getter
     * @return {null}
     */
    get sprite() {
        return this._sprite;
    }

    /**
     * Gets the user's position
     * @return {{ratio: {x: null, y: null}}|*}
     */
    get position() {
        return this._position;
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
        this._scene.physics.add.collider(this._scene._layers.wallsDecorationLayer, this._sprite);
        this._scene.physics.add.collider(this._scene._layers.wallsLayer, this._sprite);

        // Create keys
        this._createKeys();

        // End of attack animation
        this._sprite.on('animationcomplete', (animation, frame) => {
            this._endAttack(animation, frame);
        });
    }

    /**
     * Player's update function
     * @return {void}
     */
    update() {

        // Prepare the keys to use
        let keys = this._keys[this._keyMode];

        // Reset the player velocity
        this._sprite.setVelocityX(0);
        this._sprite.setVelocityY(0);

        if (this._isAttacking) {
            return;
        }

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
            this._direction = 'right';
        } else if (keys.left.isDown) {
            this._sprite.anims.play('walkLeft', true);
            this._direction = 'left';
        } else if (keys.down.isDown) {
            this._sprite.anims.play('walkFront', true);
            this._direction = 'down';
        } else if (keys.up.isDown) {
            this._sprite.anims.play('walkBack', true);
            this._direction = 'up';
        } else {
            this._sprite.anims.play('idle', true);
            this._direction = 'stop';
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

            // Prevent multiple hit at once
            this._canChangeKeyMode = false;
            setTimeout(() => {
                this._canChangeKeyMode = true;
            }, 200);
        }

        //Attack
        this._bindAttack();

        // Update user's position
        this._position.ratio.x = Math.round(this._sprite.x * 10000 / this._scene.tilemap.widthInPixels) / 10000;
        this._position.ratio.y = Math.round(this._sprite.y * 10000 / this._scene.tilemap.heightInPixels) / 10000;
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

        let cellSizeInPixels_X = LabyrinthConfig.TILE_SIZE * LabyrinthConfig.MAP_SIZE_RATIO_X;
        let cellSizeInPixels_Y = LabyrinthConfig.TILE_SIZE * LabyrinthConfig.MAP_SIZE_RATIO_Y;

        return {
            x : x * cellSizeInPixels_X + cellSizeInPixels_X / 2,
            y : y * cellSizeInPixels_Y + cellSizeInPixels_Y / 2,
        };
    }

    /**
     * Creates keys to move the player
     * @private
     */
    _createKeys() {
        let keyW = this._scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
            keyA = this._scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
            keyS = this._scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
            keyD = this._scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
            keyZ = this._scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z),
            keyQ = this._scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q),
            keyK = this._scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K);

        // QWERTY
        this._keys[SenseConfig.QWERTY] = {
            up     : keyW,
            down   : keyS,
            left   : keyA,
            right  : keyD,
        };

        // AZERTY
        this._keys[SenseConfig.AZERTY] = {
            up     : keyZ,
            down   : keyS,
            left   : keyQ,
            right  : keyD,
        };

        // Switch keys mode
        this._keys.switch = keyK;
    }

    /**
     * Resets the player attacking state after the animation
     * @param animation
     * @param frame
     * @private
     */
    _endAttack(animation, frame) {
        if (animation.key.indexOf('slash') === 0 && frame.isLast) {
            this._isAttacking = false;
        }
    }

    /**
     * Binds the attack to the left click
     * @private
     */
    _bindAttack() {
        this._scene.input.on('pointerdown', pointer => {

            // Disable right click
            if (pointer.leftButtonDown() === 0) {
                return;
            }

            this._isAttacking = true;

            switch (this._direction) {
                case 'down':
                case 'stop':
                    this._sprite.anims.play('slashDown', true);
                    break;

                case 'up':
                    this._sprite.anims.play('slashUp', true);
                    break;

                case 'left':
                    this._sprite.anims.play('slashLeft', true);
                    break;

                case 'right':
                    this._sprite.anims.play('slashRight', true);
                    break;
            }
        });
    }
}