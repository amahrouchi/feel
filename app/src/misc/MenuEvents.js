export default class MenuEvents {

    /**
     * Changes menu item color
     */
    textBlue() {
        /*
         * `this` here refers to the text object
         */
        this.setFill('#00f');
    }

    /**
     * Resets menu item color
     */
    textWhite() {
        /*
         * `this` here refers to the text object
         */
        this.setFill('#fff');
    }

}