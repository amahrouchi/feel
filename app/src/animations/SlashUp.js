import AbstractAnimation from "./AbstractAnimation";
import SenseConfig from "../config/sense";

/**
 * The slash back animation class
 */
export default class SlashUp extends AbstractAnimation
{
    /**
     * Slashing animation assets
     * @return {void}
     */
    loadImages() {
        this._scene.load.image('slashUp0', 'img/soldier/back/slashing/000.png');
        this._scene.load.image('slashUp1', 'img/soldier/back/slashing/001.png');
        this._scene.load.image('slashUp2', 'img/soldier/back/slashing/002.png');
        this._scene.load.image('slashUp3', 'img/soldier/back/slashing/003.png');
        this._scene.load.image('slashUp4', 'img/soldier/back/slashing/004.png');
        this._scene.load.image('slashUp5', 'img/soldier/back/slashing/005.png');
        this._scene.load.image('slashUp6', 'img/soldier/back/slashing/006.png');
        this._scene.load.image('slashUp7', 'img/soldier/back/slashing/007.png');
        this._scene.load.image('slashUp8', 'img/soldier/back/slashing/008.png');
    }

    /**
     * Creates the animation
     * @return {void}
     */
    create() {
        this._scene.anims.create({
            key       : 'slashUp',
            frames    : [
                {key : 'slashUp0', frame : null},
                {key : 'slashUp1', frame : null},
                {key : 'slashUp2', frame : null},
                {key : 'slashUp3', frame : null},
                {key : 'slashUp4', frame : null},
                {key : 'slashUp5', frame : null},
                {key : 'slashUp6', frame : null},
                {key : 'slashUp7', frame : null},
                {key : 'slashUp8', frame : null}, // repeat the last frame for a more realistic movement
                {key : 'slashUp8', frame : null},
                {key : 'slashUp8', frame : null},
                {key : 'slashUp8', frame : null},
            ],
            frameRate : SenseConfig.SLASH_FRAME_RATE
        });
    }
}
