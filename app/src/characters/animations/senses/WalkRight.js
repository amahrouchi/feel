import AbstractAnimation from "../AbstractAnimation";
import SenseConfig from "../../../config/sense";

/**
 * The walk right animation class
 */
export default class WalkRight extends AbstractAnimation
{
    /**
     * Walking animation assets
     * @return {void}
     */
    loadImages() {
        this._scene.load.image('walkRight0', 'img/soldier/right/walking/000.png');
        this._scene.load.image('walkRight1', 'img/soldier/right/walking/001.png');
        this._scene.load.image('walkRight2', 'img/soldier/right/walking/002.png');
        this._scene.load.image('walkRight3', 'img/soldier/right/walking/003.png');
        this._scene.load.image('walkRight4', 'img/soldier/right/walking/004.png');
        this._scene.load.image('walkRight5', 'img/soldier/right/walking/005.png');
        this._scene.load.image('walkRight6', 'img/soldier/right/walking/006.png');
        this._scene.load.image('walkRight7', 'img/soldier/right/walking/007.png');
        this._scene.load.image('walkRight8', 'img/soldier/right/walking/008.png');
        this._scene.load.image('walkRight9', 'img/soldier/right/walking/009.png');
        this._scene.load.image('walkRight10', 'img/soldier/right/walking/010.png');
        this._scene.load.image('walkRight11', 'img/soldier/right/walking/011.png');
        this._scene.load.image('walkRight12', 'img/soldier/right/walking/012.png');
        this._scene.load.image('walkRight13', 'img/soldier/right/walking/013.png');
        this._scene.load.image('walkRight14', 'img/soldier/right/walking/014.png');
        this._scene.load.image('walkRight15', 'img/soldier/right/walking/015.png');
        this._scene.load.image('walkRight16', 'img/soldier/right/walking/016.png');
        this._scene.load.image('walkRight17', 'img/soldier/right/walking/017.png');
    }

    /**
     * Creates the animation
     * @return {void}
     */
    create() {
        this._scene.anims.create({
            key       : 'walkRight',
            frames    : [
                {key : 'walkRight0', frame : null},
                {key : 'walkRight1', frame : null},
                {key : 'walkRight2', frame : null},
                {key : 'walkRight3', frame : null},
                {key : 'walkRight4', frame : null},
                {key : 'walkRight5', frame : null},
                {key : 'walkRight6', frame : null},
                {key : 'walkRight7', frame : null},
                {key : 'walkRight8', frame : null},
                {key : 'walkRight9', frame : null},
                {key : 'walkRight10', frame : null},
                {key : 'walkRight11', frame : null},
                {key : 'walkRight12', frame : null},
                {key : 'walkRight13', frame : null},
                {key : 'walkRight14', frame : null},
                {key : 'walkRight15', frame : null},
                {key : 'walkRight16', frame : null},
                {key : 'walkRight17', frame : null}
            ],
            frameRate : SenseConfig.WALK_FRAME_RATE,
            repeat    : -1
        });
    }
}
