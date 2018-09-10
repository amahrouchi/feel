import AbstractAnimation from "../AbstractAnimation";
import SenseConfig from "../../../config/sense";

/**
 * The slash front animation class
 */
export default class SlashDown extends AbstractAnimation
{
    /**
     * Slashing animation assets
     * @return {void}
     */
    loadImages() {
        this._scene.load.image('slashDown0', 'img/soldier/front/slashing/000.png');
        this._scene.load.image('slashDown1', 'img/soldier/front/slashing/001.png');
        this._scene.load.image('slashDown2', 'img/soldier/front/slashing/002.png');
        this._scene.load.image('slashDown3', 'img/soldier/front/slashing/003.png');
        this._scene.load.image('slashDown4', 'img/soldier/front/slashing/004.png');
        this._scene.load.image('slashDown5', 'img/soldier/front/slashing/005.png');
        this._scene.load.image('slashDown6', 'img/soldier/front/slashing/006.png');
        this._scene.load.image('slashDown7', 'img/soldier/front/slashing/007.png');
        this._scene.load.image('slashDown8', 'img/soldier/front/slashing/008.png');
    }

    /**
     * Creates the animation
     * @return {void}
     */
    create() {
        this._scene.anims.create({
            key       : 'slashDown',
            frames    : [
                {key : 'slashDown0', frame : null},
                {key : 'slashDown1', frame : null},
                {key : 'slashDown2', frame : null},
                {key : 'slashDown3', frame : null},
                {key : 'slashDown4', frame : null},
                {key : 'slashDown5', frame : null},
                {key : 'slashDown6', frame : null},
                {key : 'slashDown7', frame : null},
                {key : 'slashDown8', frame : null}, // repeat the last frame for a more realistic movement
                {key : 'slashDown8', frame : null},
                {key : 'slashDown8', frame : null},
                {key : 'slashDown8', frame : null},
            ],
            frameRate : SenseConfig.SLASH_FRAME_RATE
        });
    }
}
