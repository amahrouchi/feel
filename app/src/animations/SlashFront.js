import AbstractAnimation from "./AbstractAnimation";
import SenseConfig from "../config/sense";

/**
 * The slash front animation class
 */
export default class SlashFront extends AbstractAnimation
{
    /**
     * Slashing animation assets
     * @return {void}
     */
    loadImages() {
        this._scene.load.image('slashFront0', 'img/soldier/front/slashing/000.png');
        this._scene.load.image('slashFront1', 'img/soldier/front/slashing/001.png');
        this._scene.load.image('slashFront2', 'img/soldier/front/slashing/002.png');
        this._scene.load.image('slashFront3', 'img/soldier/front/slashing/003.png');
        this._scene.load.image('slashFront4', 'img/soldier/front/slashing/004.png');
        this._scene.load.image('slashFront5', 'img/soldier/front/slashing/005.png');
        this._scene.load.image('slashFront6', 'img/soldier/front/slashing/006.png');
        this._scene.load.image('slashFront7', 'img/soldier/front/slashing/007.png');
        this._scene.load.image('slashFront8', 'img/soldier/front/slashing/008.png');
    }

    /**
     * Creates the animation
     * @return {void}
     */
    create() {
        this._scene.anims.create({
            key       : 'slashFront',
            frames    : [
                {key : 'slashFront0', frame : null},
                {key : 'slashFront1', frame : null},
                {key : 'slashFront2', frame : null},
                {key : 'slashFront3', frame : null},
                {key : 'slashFront4', frame : null},
                {key : 'slashFront5', frame : null},
                {key : 'slashFront6', frame : null},
                {key : 'slashFront7', frame : null},
                {key : 'slashFront8', frame : null}, // repeat the last frame for a more realistic movement
                {key : 'slashFront8', frame : null},
                {key : 'slashFront8', frame : null},
                {key : 'slashFront8', frame : null},
            ],
            frameRate : SenseConfig.SLASH_FRAME_RATE
        });
    }
}
