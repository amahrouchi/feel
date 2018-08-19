import AbstractScene from "./AbstractScene";
import {Idle} from "../animations/Idle";

/**
 * Preload scene
 */
export default class Preload extends AbstractScene
{
    /**
     * Preload scene constructor
     */
    constructor() {
        super({'key' : 'Preload'});

        this._idle = new Idle(this);
    }

    /**
     * Preloading function
     */
    preload() {
        this._loadAnimationsAssets();
    }

    /**
     * Create function
     */
    create() {
        this._loadAnimations();
        this.scene.start('MainMenu');
    }

    /**
     * Update function
     */
    update() {
        // Nothing here
    }

    /**
     * Loads animations assets
     * @private
     */
    _loadAnimationsAssets() {
        // Walking animation assets
        this.load.image('walk0', 'img/soldier/front/walking/000.png');
        this.load.image('walk1', 'img/soldier/front/walking/001.png');
        this.load.image('walk2', 'img/soldier/front/walking/002.png');
        this.load.image('walk3', 'img/soldier/front/walking/003.png');
        this.load.image('walk4', 'img/soldier/front/walking/004.png');
        this.load.image('walk5', 'img/soldier/front/walking/005.png');
        this.load.image('walk6', 'img/soldier/front/walking/006.png');
        this.load.image('walk7', 'img/soldier/front/walking/007.png');
        this.load.image('walk8', 'img/soldier/front/walking/008.png');
        this.load.image('walk9', 'img/soldier/front/walking/009.png');
        this.load.image('walk10', 'img/soldier/front/walking/010.png');
        this.load.image('walk11', 'img/soldier/front/walking/011.png');
        this.load.image('walk12', 'img/soldier/front/walking/012.png');
        this.load.image('walk13', 'img/soldier/front/walking/013.png');
        this.load.image('walk14', 'img/soldier/front/walking/014.png');
        this.load.image('walk15', 'img/soldier/front/walking/015.png');
        this.load.image('walk16', 'img/soldier/front/walking/016.png');
        this.load.image('walk17', 'img/soldier/front/walking/017.png');

        this._idle.loadImages();
    }

    /**
     * Loads animations
     * @private
     */
    _loadAnimations() {
        this.anims.create({
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

        this._idle.create();
    }

}