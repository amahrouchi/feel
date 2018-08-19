import AbstractScene from "./AbstractScene";
import Idle from "../animations/Idle";
import WalkFront from "../animations/WalkFront";
import WalkBack from "../animations/WalkBack";
import WalkRight from "../animations/WalkRight";
import WalkLeft from "../animations/WalkLeft";

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

        this._idle      = new Idle(this);
        this._walkFront = new WalkFront(this);
        this._walkBack  = new WalkBack(this);
        this._walkRight = new WalkRight(this);
        this._walkLeft  = new WalkLeft(this);
    }

    /**
     * Preloading function
     */
    preload() {
        this._walkFront.loadImages();
        this._walkBack.loadImages();
        this._walkRight.loadImages();
        this._walkLeft.loadImages();
        this._idle.loadImages();
    }

    /**
     * Create function
     */
    create() {
        this._walkFront.create();
        this._walkBack.create();
        this._walkRight.create();
        this._walkLeft.create();
        this._idle.create();

        this.scene.start('MainMenu');
    }

    /**
     * Update function
     */
    update() {
        // Nothing here
    }

}