import AbstractScene from "./AbstractScene";

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

        this.load.image('idle0', 'img/soldier/front/idle/000.png');
        this.load.image('idle1', 'img/soldier/front/idle/001.png');
        this.load.image('idle2', 'img/soldier/front/idle/002.png');
        this.load.image('idle3', 'img/soldier/front/idle/003.png');
        this.load.image('idle4', 'img/soldier/front/idle/004.png');
        this.load.image('idle5', 'img/soldier/front/idle/005.png');
        this.load.image('idle6', 'img/soldier/front/idle/006.png');
        this.load.image('idle7', 'img/soldier/front/idle/007.png');
        this.load.image('idle8', 'img/soldier/front/idle/008.png');
        this.load.image('idle9', 'img/soldier/front/idle/009.png');
        this.load.image('idle10', 'img/soldier/front/idle/010.png');
        this.load.image('idle11', 'img/soldier/front/idle/011.png');
        this.load.image('idle12', 'img/soldier/front/idle/012.png');
        this.load.image('idle13', 'img/soldier/front/idle/013.png');
        this.load.image('idle14', 'img/soldier/front/idle/014.png');
        this.load.image('idle15', 'img/soldier/front/idle/015.png');
        this.load.image('idle16', 'img/soldier/front/idle/016.png');
        this.load.image('idle17', 'img/soldier/front/idle/017.png');

        // Idle
        this.load.image('idle', 'img/soldier/front/walking/017.png');
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

        this.anims.create({
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