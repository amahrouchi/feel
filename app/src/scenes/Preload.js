import AbstractScene from "./AbstractScene";
import Idle from "../animations/Idle";
import WalkFront from "../animations/WalkFront";

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
    }

    /**
     * Preloading function
     */
    preload() {
        this._walkFront.loadImages();
        this._idle.loadImages();
    }

    /**
     * Create function
     */
    create() {
        this._walkFront.create();
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