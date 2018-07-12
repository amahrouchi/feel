/**
 * The test scene used in the phaser tutorial
 */
export class Test extends Phaser.Scene {

    /**
     * The constructor
     */
    constructor() {
        super({key: "Test"});
    }

    /**
     * The preload function
     * @return {void}
     */
    preload ()
    {
        this.load.setBaseURL('http://labs.phaser.io');

        this.load.image('sky', 'assets/skies/space3.png');
        this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        this.load.image('red', 'assets/particles/red.png');
    }

    /**
     * The create function
     * @return {void}
     */
    create ()
    {
        this.add.image(400, 300, 'sky');

        let particles = this.add.particles('red');

        let emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });

        let logo = this.physics.add.image(400, 100, 'logo');

        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);

        emitter.startFollow(logo);
    }
}
