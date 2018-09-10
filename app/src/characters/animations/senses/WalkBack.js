import AbstractAnimation from "../AbstractAnimation";
import SenseConfig from "../../../config/sense";

/**
 * The walk back animation class
 */
export default class WalkBack extends AbstractAnimation
{
    /**
     * Walking animation assets
     * @return {void}
     */
    loadImages() {
        this._scene.load.image('walkBack0', 'img/soldier/back/walking/000.png');
        this._scene.load.image('walkBack1', 'img/soldier/back/walking/001.png');
        this._scene.load.image('walkBack2', 'img/soldier/back/walking/002.png');
        this._scene.load.image('walkBack3', 'img/soldier/back/walking/003.png');
        this._scene.load.image('walkBack4', 'img/soldier/back/walking/004.png');
        this._scene.load.image('walkBack5', 'img/soldier/back/walking/005.png');
        this._scene.load.image('walkBack6', 'img/soldier/back/walking/006.png');
        this._scene.load.image('walkBack7', 'img/soldier/back/walking/007.png');
        this._scene.load.image('walkBack8', 'img/soldier/back/walking/008.png');
        this._scene.load.image('walkBack9', 'img/soldier/back/walking/009.png');
        this._scene.load.image('walkBack10', 'img/soldier/back/walking/010.png');
        this._scene.load.image('walkBack11', 'img/soldier/back/walking/011.png');
        this._scene.load.image('walkBack12', 'img/soldier/back/walking/012.png');
        this._scene.load.image('walkBack13', 'img/soldier/back/walking/013.png');
        this._scene.load.image('walkBack14', 'img/soldier/back/walking/014.png');
        this._scene.load.image('walkBack15', 'img/soldier/back/walking/015.png');
        this._scene.load.image('walkBack16', 'img/soldier/back/walking/016.png');
        this._scene.load.image('walkBack17', 'img/soldier/back/walking/017.png');
    }

    /**
     * Creates the animation
     * @return {void}
     */
    create() {
        this._scene.anims.create({
            key       : 'walkBack',
            frames    : [
                {key : 'walkBack0', frame : null},
                {key : 'walkBack1', frame : null},
                {key : 'walkBack2', frame : null},
                {key : 'walkBack3', frame : null},
                {key : 'walkBack4', frame : null},
                {key : 'walkBack5', frame : null},
                {key : 'walkBack6', frame : null},
                {key : 'walkBack7', frame : null},
                {key : 'walkBack8', frame : null},
                {key : 'walkBack9', frame : null},
                {key : 'walkBack10', frame : null},
                {key : 'walkBack11', frame : null},
                {key : 'walkBack12', frame : null},
                {key : 'walkBack13', frame : null},
                {key : 'walkBack14', frame : null},
                {key : 'walkBack15', frame : null},
                {key : 'walkBack16', frame : null},
                {key : 'walkBack17', frame : null}
            ],
            frameRate : SenseConfig.WALK_FRAME_RATE,
            repeat    : -1
        });
    }
}
