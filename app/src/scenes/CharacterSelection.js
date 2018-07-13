import AbstractScene from "./AbstractScene";

/**
 * Character selection scene
 */
export default class CharacterSelection extends AbstractScene {
    /**
     * CharacterSelection scene constructor
     */
    constructor() {
        super({'key' : 'CharacterSelection'});
    }

    /**
     * The preload function
     */
    preload() {
        // Nothing here ATM
        // console.log('preload');
    }

    /**
     * The create function
     */
    create(data) {
        this.displayTitle();
    }

    /**
     * The update function
     */
    update() {
        // Nothing here ATM
    }
}