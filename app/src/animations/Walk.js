import AbstractAnimation from "./AbstractAnimation";

/**
 * The walk animation class
 */
export default class Walk extends AbstractAnimation
{
    /**
     * Walking animation assets
     * @return {void}
     */
    loadImages() {
        this._scene.load.image('walk0', 'img/soldier/front/walking/000.png');
        this._scene.load.image('walk1', 'img/soldier/front/walking/001.png');
        this._scene.load.image('walk2', 'img/soldier/front/walking/002.png');
        this._scene.load.image('walk3', 'img/soldier/front/walking/003.png');
        this._scene.load.image('walk4', 'img/soldier/front/walking/004.png');
        this._scene.load.image('walk5', 'img/soldier/front/walking/005.png');
        this._scene.load.image('walk6', 'img/soldier/front/walking/006.png');
        this._scene.load.image('walk7', 'img/soldier/front/walking/007.png');
        this._scene.load.image('walk8', 'img/soldier/front/walking/008.png');
        this._scene.load.image('walk9', 'img/soldier/front/walking/009.png');
        this._scene.load.image('walk10', 'img/soldier/front/walking/010.png');
        this._scene.load.image('walk11', 'img/soldier/front/walking/011.png');
        this._scene.load.image('walk12', 'img/soldier/front/walking/012.png');
        this._scene.load.image('walk13', 'img/soldier/front/walking/013.png');
        this._scene.load.image('walk14', 'img/soldier/front/walking/014.png');
        this._scene.load.image('walk15', 'img/soldier/front/walking/015.png');
        this._scene.load.image('walk16', 'img/soldier/front/walking/016.png');
        this._scene.load.image('walk17', 'img/soldier/front/walking/017.png');
    }

    /**
     * Creates the animation
     * @return {void}
     */
    create() {
        this._scene.anims.create({
            key       : 'walk',
            frames    : [
                {key : 'walk0', frame : null},
                {key : 'walk1', frame : null},
                {key : 'walk2', frame : null},
                {key : 'walk3', frame : null},
                {key : 'walk4', frame : null},
                {key : 'walk5', frame : null},
                {key : 'walk6', frame : null},
                {key : 'walk7', frame : null},
                {key : 'walk8', frame : null},
                {key : 'walk9', frame : null},
                {key : 'walk10', frame : null},
                {key : 'walk11', frame : null},
                {key : 'walk12', frame : null},
                {key : 'walk13', frame : null},
                {key : 'walk14', frame : null},
                {key : 'walk15', frame : null},
                {key : 'walk16', frame : null},
                {key : 'walk17', frame : null}
            ],
            frameRate : 18,
            repeat    : -1
        });
    }
}
