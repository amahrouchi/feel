import AbstractAnimation from "./AbstractAnimation";

/**
 * The walk animation class
 */
export default class WalkFront extends AbstractAnimation
{
    /**
     * Walking animation assets
     * @return {void}
     */
    loadImages() {
        this._scene.load.image('walkFront0', 'img/soldier/front/walking/000.png');
        this._scene.load.image('walkFront1', 'img/soldier/front/walking/001.png');
        this._scene.load.image('walkFront2', 'img/soldier/front/walking/002.png');
        this._scene.load.image('walkFront3', 'img/soldier/front/walking/003.png');
        this._scene.load.image('walkFront4', 'img/soldier/front/walking/004.png');
        this._scene.load.image('walkFront5', 'img/soldier/front/walking/005.png');
        this._scene.load.image('walkFront6', 'img/soldier/front/walking/006.png');
        this._scene.load.image('walkFront7', 'img/soldier/front/walking/007.png');
        this._scene.load.image('walkFront8', 'img/soldier/front/walking/008.png');
        this._scene.load.image('walkFront9', 'img/soldier/front/walking/009.png');
        this._scene.load.image('walkFront10', 'img/soldier/front/walking/010.png');
        this._scene.load.image('walkFront11', 'img/soldier/front/walking/011.png');
        this._scene.load.image('walkFront12', 'img/soldier/front/walking/012.png');
        this._scene.load.image('walkFront13', 'img/soldier/front/walking/013.png');
        this._scene.load.image('walkFront14', 'img/soldier/front/walking/014.png');
        this._scene.load.image('walkFront15', 'img/soldier/front/walking/015.png');
        this._scene.load.image('walkFront16', 'img/soldier/front/walking/016.png');
        this._scene.load.image('walkFront17', 'img/soldier/front/walking/017.png');
    }

    /**
     * Creates the animation
     * @return {void}
     */
    create() {
        this._scene.anims.create({
            key       : 'walkFront',
            frames    : [
                {key : 'walkFront0', frame : null},
                {key : 'walkFront1', frame : null},
                {key : 'walkFront2', frame : null},
                {key : 'walkFront3', frame : null},
                {key : 'walkFront4', frame : null},
                {key : 'walkFront5', frame : null},
                {key : 'walkFront6', frame : null},
                {key : 'walkFront7', frame : null},
                {key : 'walkFront8', frame : null},
                {key : 'walkFront9', frame : null},
                {key : 'walkFront10', frame : null},
                {key : 'walkFront11', frame : null},
                {key : 'walkFront12', frame : null},
                {key : 'walkFront13', frame : null},
                {key : 'walkFront14', frame : null},
                {key : 'walkFront15', frame : null},
                {key : 'walkFront16', frame : null},
                {key : 'walkFront17', frame : null}
            ],
            frameRate : 18,
            repeat    : -1
        });
    }
}
