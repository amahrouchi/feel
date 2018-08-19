import AbstractAnimation from "./AbstractAnimation";
import SenseConfig from "../config/sense";

/**
 * The walk animation class
 */
export default class WalkLeft extends AbstractAnimation
{
    /**
     * Walking animation assets
     * @return {void}
     */
    loadImages() {
        this._scene.load.image('walkLeft0', 'img/soldier/left/walking/000.png');
        this._scene.load.image('walkLeft1', 'img/soldier/left/walking/001.png');
        this._scene.load.image('walkLeft2', 'img/soldier/left/walking/002.png');
        this._scene.load.image('walkLeft3', 'img/soldier/left/walking/003.png');
        this._scene.load.image('walkLeft4', 'img/soldier/left/walking/004.png');
        this._scene.load.image('walkLeft5', 'img/soldier/left/walking/005.png');
        this._scene.load.image('walkLeft6', 'img/soldier/left/walking/006.png');
        this._scene.load.image('walkLeft7', 'img/soldier/left/walking/007.png');
        this._scene.load.image('walkLeft8', 'img/soldier/left/walking/008.png');
        this._scene.load.image('walkLeft9', 'img/soldier/left/walking/009.png');
        this._scene.load.image('walkLeft10', 'img/soldier/left/walking/010.png');
        this._scene.load.image('walkLeft11', 'img/soldier/left/walking/011.png');
        this._scene.load.image('walkLeft12', 'img/soldier/left/walking/012.png');
        this._scene.load.image('walkLeft13', 'img/soldier/left/walking/013.png');
        this._scene.load.image('walkLeft14', 'img/soldier/left/walking/014.png');
        this._scene.load.image('walkLeft15', 'img/soldier/left/walking/015.png');
        this._scene.load.image('walkLeft16', 'img/soldier/left/walking/016.png');
        this._scene.load.image('walkLeft17', 'img/soldier/left/walking/017.png');
    }

    /**
     * Creates the animation
     * @return {void}
     */
    create() {
        this._scene.anims.create({
            key       : 'walkLeft',
            frames    : [
                {key : 'walkLeft0', frame : null},
                {key : 'walkLeft1', frame : null},
                {key : 'walkLeft2', frame : null},
                {key : 'walkLeft3', frame : null},
                {key : 'walkLeft4', frame : null},
                {key : 'walkLeft5', frame : null},
                {key : 'walkLeft6', frame : null},
                {key : 'walkLeft7', frame : null},
                {key : 'walkLeft8', frame : null},
                {key : 'walkLeft9', frame : null},
                {key : 'walkLeft10', frame : null},
                {key : 'walkLeft11', frame : null},
                {key : 'walkLeft12', frame : null},
                {key : 'walkLeft13', frame : null},
                {key : 'walkLeft14', frame : null},
                {key : 'walkLeft15', frame : null},
                {key : 'walkLeft16', frame : null},
                {key : 'walkLeft17', frame : null}
            ],
            frameRate : SenseConfig.WALK_FRAME_RATE,
            repeat    : -1
        });
    }
}
