/**
 * Senses configuration
 */
export default {

    //--------------------------//
    //--- Senses identifiers ---//
    //--------------------------//

    /**
     * Sight send identifier
     * @var {string}
     */
    SIGHT : 'sight',

    /**
     * Smell send identifier
     * @var {string}
     */
    SMELL : 'smell',

    /**
     * Taste send identifier
     * @var {string}
     */
    TASTE : 'taste',

    /**
     * Sound send identifier
     * @var {string}
     */
    SOUND : 'sound',


    /**
     * Touch send identifier
     * @var {string}
     */
    TOUCH : 'touch',

    //----------------------------//
    //--- Player configuration ---//
    //----------------------------//

    /**
     * The player's movement speed
     * @var {int}
     */
    PLAYER_SPEED           : 550,

    /**
     * The player sprite scale
     * @var {number}
     */
    PLAYER_SPRITE_RATIO    : 0.6,

    /**
     * The player's hitbox width
     * @var {int}
     */
    PLAYER_HITBOX_WIDTH    : 65,

    /**
     * The player's hitbox height
     * @var {int}
     */
    PLAYER_HITBOX_HEIGHT   : 102,

    /**
     * The player's hitbox offset x
     * @var {int}
     */
    PLAYER_HITBOX_OFFSET_X : 32,

    /**
     * The player's hitbox offset y
     * @var {int}
     */
    PLAYER_HITBOX_OFFSET_Y : 8,

    //------------------------//
    //--- Animation config ---//
    //------------------------//

    /**
     * Walk frame rate
     * @var {int}
     */
    WALK_FRAME_RATE  : 80,

    /**
     * Idle frame rate
     * @var {int}
     */
    IDLE_FRAME_RATE  : 18,

    /**
     * Slash frame rate
     * @var {int}
     */
    SLASH_FRAME_RATE : 50,

    //-------------------------------//
    //--- Keyboard configurations ---//
    //-------------------------------//

    /**
     * QWERTY keyboard configuration identifier
     * @var {string}
     */
    QWERTY : 'qwerty',


    /**
     * AZERTY keyboard configuration identifier
     * @var {string}
     */
    AZERTY : 'azerty',
}
