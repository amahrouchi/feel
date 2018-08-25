import AbstractAnimation from "./AbstractAnimation";
import SenseConfig from "../config/sense";

/**
 * The slash left animation class
 */
export default class SlashLeft extends AbstractAnimation
{
    /**
     * Slashing animation assets
     * @return {void}
     */
    loadImages() {
        this._scene.load.image('slashLeft0', 'img/soldier/left/slashing/000.png');
        this._scene.load.image('slashLeft1', 'img/soldier/left/slashing/001.png');
        this._scene.load.image('slashLeft2', 'img/soldier/left/slashing/002.png');
        this._scene.load.image('slashLeft3', 'img/soldier/left/slashing/003.png');
        this._scene.load.image('slashLeft4', 'img/soldier/left/slashing/004.png');
        this._scene.load.image('slashLeft5', 'img/soldier/left/slashing/005.png');
        this._scene.load.image('slashLeft6', 'img/soldier/left/slashing/006.png');
        this._scene.load.image('slashLeft7', 'img/soldier/left/slashing/007.png');
        this._scene.load.image('slashLeft8', 'img/soldier/left/slashing/008.png');
    }

    /**
     * Creates the animation
     * @return {void}
     */
    create() {
        this._scene.anims.create({
            key       : 'slashLeft',
            frames    : [
                {key : 'slashLeft0', frame : null},
                {key : 'slashLeft1', frame : null},
                {key : 'slashLeft2', frame : null},
                {key : 'slashLeft3', frame : null},
                {key : 'slashLeft4', frame : null},
                {key : 'slashLeft5', frame : null},
                {key : 'slashLeft6', frame : null},
                {key : 'slashLeft7', frame : null},
                {key : 'slashLeft8', frame : null}, // repeat the last frame for a more realistic movement
                {key : 'slashLeft8', frame : null},
                {key : 'slashLeft8', frame : null},
                {key : 'slashLeft8', frame : null},
            ],
            frameRate : SenseConfig.SLASH_FRAME_RATE
        });
    }
}
