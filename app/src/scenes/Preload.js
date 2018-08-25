import AbstractScene from "./AbstractScene";
import Idle from "../animations/Idle";
import WalkFront from "../animations/WalkFront";
import WalkBack from "../animations/WalkBack";
import WalkRight from "../animations/WalkRight";
import WalkLeft from "../animations/WalkLeft";
import SlashDown from "../animations/SlashDown";
import SlashUp from "../animations/SlashUp";
import SlashLeft from "../animations/SlashLeft";
import SlashRight from "../animations/SlashRight";

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
        this._slashDown  = new SlashDown(this);
        this._slashUp    = new SlashUp(this);
        this._slashLeft  = new SlashLeft(this);
        this._slashRight = new SlashRight(this);
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

        this._slashDown.loadImages();
        this._slashUp.loadImages();
        this._slashLeft.loadImages();
        this._slashRight.loadImages();
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

        this._slashDown.create();
        this._slashUp.create();
        this._slashLeft.create();
        this._slashRight.create();

        this.scene.start('MainMenu');
    }

    /**
     * Update function
     */
    update() {
        // Nothing here
    }

}