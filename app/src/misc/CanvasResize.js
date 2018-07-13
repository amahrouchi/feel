/**
 * Canvas resizing service
 */
export default class CanvasResize {

    /**
     * Constructor
     * @param {Phaser.Game} game
     */
    constructor(game) {
        this.game = game;
    }

    /**
     * Initializes the resize
     */
    init() {
        window.addEventListener('resize', () => this._resize());
        setTimeout(() => this._resize());
    }

    /**
     * Resizes the canvas
     * @private
     */
    _resize() {
        // Init
        let canvas      = this.game.canvas,
            config      = this.game.config,
            width       = window.innerWidth,
            height      = window.innerHeight,
            windowRatio = width / height,
            ratio       = config.width / config.height;

        // Display size
        if (windowRatio < ratio) {
            canvas.style.width  = width + "px";
            canvas.style.height = (width / ratio) + "px";
        } else {
            canvas.style.width  = (height * ratio) + "px";
            canvas.style.height = height + "px";
        }
    }

}