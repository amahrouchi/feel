import AbstractScene from "./AbstractScene";
import Idle from "../animations/Idle";
import Walk from "../animations/Walk";

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
        this._walk = new Walk(this);
    }

    /**
     * Preloading function
     */
    preload() {
        this._walk.loadImages();
        this._idle.loadImages();
    }

    /**
     * Create function
     */
    create() {
        this._walk.create();
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