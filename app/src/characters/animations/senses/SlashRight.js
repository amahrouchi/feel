import AbstractAnimation from "../AbstractAnimation";
import SenseConfig from "../../../config/sense";

/**
 * The slash right animation class
 */
export default class SlashRight extends AbstractAnimation
{
    /**
     * Slashing animation assets
     * @return {void}
     */
    loadImages() {
        this._scene.load.image('slashRight0', 'img/soldier/right/slashing/000.png');
        this._scene.load.image('slashRight1', 'img/soldier/right/slashing/001.png');
        this._scene.load.image('slashRight2', 'img/soldier/right/slashing/002.png');
        this._scene.load.image('slashRight3', 'img/soldier/right/slashing/003.png');
        this._scene.load.image('slashRight4', 'img/soldier/right/slashing/004.png');
        this._scene.load.image('slashRight5', 'img/soldier/right/slashing/005.png');
        this._scene.load.image('slashRight6', 'img/soldier/right/slashing/006.png');
        this._scene.load.image('slashRight7', 'img/soldier/right/slashing/007.png');
        this._scene.load.image('slashRight8', 'img/soldier/right/slashing/008.png');
    }

    /**
     * Creates the animation
     * @return {void}
     */
    create() {
        this._scene.anims.create({
            key       : 'slashRight',
            frames    : [
                {key : 'slashRight0', frame : null},
                {key : 'slashRight1', frame : null},
                {key : 'slashRight2', frame : null},
                {key : 'slashRight3', frame : null},
                {key : 'slashRight4', frame : null},
                {key : 'slashRight5', frame : null},
                {key : 'slashRight6', frame : null},
                {key : 'slashRight7', frame : null},
                {key : 'slashRight8', frame : null}, // repeat the last frame for a more realistic movement
                {key : 'slashRight8', frame : null},
                {key : 'slashRight8', frame : null},
                {key : 'slashRight8', frame : null},
            ],
            frameRate : SenseConfig.SLASH_FRAME_RATE
        });
    }
}
