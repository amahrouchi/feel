/**
 * The game configuration object
 */
export default {
    type: Phaser.AUTO,
    width: 1200,
    height: 800,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    }
};
