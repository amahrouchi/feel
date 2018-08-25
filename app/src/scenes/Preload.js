import AbstractScene from "./AbstractScene";
import Idle from "../animations/Idle";
import WalkFront from "../animations/WalkFront";
import WalkBack from "../animations/WalkBack";
import WalkRight from "../animations/WalkRight";
import WalkLeft from "../animations/WalkLeft";
import SlashFront from "../animations/SlashFront";

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

        this._idle       = new Idle(this);
        this._walkFront  = new WalkFront(this);
        this._walkBack   = new WalkBack(this);
        this._walkRight  = new WalkRight(this);
        this._walkLeft   = new WalkLeft(this);
        this._slashFront = new SlashFront(this);
    }

    /**
     * Preloading function
     */
    preload() {
        this._idle.loadImages();

        this._walkFront.loadImages();
        this._walkBack.loadImages();
        this._walkRight.loadImages();
        this._walkLeft.loadImages();

        this._slashFront.loadImages();
    }

    /**
     * Create function
     */
    create() {
        this._idle.create();

        this._walkFront.create();
        this._walkBack.create();
        this._walkRight.create();
        this._walkLeft.create();

        this._slashFront.create();

        this.scene.start('MainMenu');
    }

    /**
     * Update function
     */
    update() {
        // Nothing here
    }

}