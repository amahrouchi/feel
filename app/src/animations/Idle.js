/**
 * The idle animation class
 */
import AbstractAnimation from "./AbstractAnimation";

export default class Idle extends AbstractAnimation
{

    /**
     * Loads images for the animations
     * @return {void}
     */
    loadImages() {
        // Load images
        this._scene.load.image('idle0', 'img/soldier/front/idle/000.png');
        this._scene.load.image('idle1', 'img/soldier/front/idle/001.png');
        this._scene.load.image('idle2', 'img/soldier/front/idle/002.png');
        this._scene.load.image('idle3', 'img/soldier/front/idle/003.png');
        this._scene.load.image('idle4', 'img/soldier/front/idle/004.png');
        this._scene.load.image('idle5', 'img/soldier/front/idle/005.png');
        this._scene.load.image('idle6', 'img/soldier/front/idle/006.png');
        this._scene.load.image('idle7', 'img/soldier/front/idle/007.png');
        this._scene.load.image('idle8', 'img/soldier/front/idle/008.png');
        this._scene.load.image('idle9', 'img/soldier/front/idle/009.png');
        this._scene.load.image('idle10', 'img/soldier/front/idle/010.png');
        this._scene.load.image('idle11', 'img/soldier/front/idle/011.png');
        this._scene.load.image('idle12', 'img/soldier/front/idle/012.png');
        this._scene.load.image('idle13', 'img/soldier/front/idle/013.png');
        this._scene.load.image('idle14', 'img/soldier/front/idle/014.png');
        this._scene.load.image('idle15', 'img/soldier/front/idle/015.png');
        this._scene.load.image('idle16', 'img/soldier/front/idle/016.png');
        this._scene.load.image('idle17', 'img/soldier/front/idle/017.png');
    }

    /**
     * Creates the animation
     * @return {void}
     */
    create() {
        // Create the animation
        this._scene.anims.create({
            key       : 'idle',
            frames    : [
                {key : 'idle0', frame : null},
                {key : 'idle1', frame : null},
                {key : 'idle2', frame : null},
                {key : 'idle3', frame : null},
                {key : 'idle4', frame : null},
                {key : 'idle5', frame : null},
                {key : 'idle6', frame : null},
                {key : 'idle7', frame : null},
                {key : 'idle8', frame : null},
                {key : 'idle9', frame : null},
                {key : 'idle10', frame : null},
                {key : 'idle11', frame : null},
                {key : 'idle12', frame : null},
                {key : 'idle13', frame : null},
                {key : 'idle14', frame : null},
                {key : 'idle15', frame : null},
                {key : 'idle16', frame : null},
                {key : 'idle17', frame : null}
            ],
            frameRate : 18,
            repeat    : -1
        });
    }

}