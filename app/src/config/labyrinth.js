export default {
    /**
     * The labyrinth width and height
     * @var {int}
     */
    WIDTH : 41,

    /**
     * The labyrinth center position
     * @var {int}
     */
    CENTER : 21,

    /**
     * The ratio used to generate the labyrinth path
     * @var {int}
     */
    PATH_RATIO : 50,

    /**
     * The ratio used to generate the labyrinth loops
     * @var {int}
     */
    LOOP_RATIO : 10,

    /**
     * The complexity of the labyrinth
     * @var {int}
     */
    COMPLEXITY : 290,

    /**
     * The ground tile index in the forest tileset
     * @var {int}
     */
    GROUND_TILE_INDEX : 1250,

    /**
     * The walls tile index in the forest tileset
     * @var {int}
     */
    WALL_TILE_INDEX : 578,

    WALL_TILES : {
        bosquet : {
            inner : 550,

            up_left  : 569,
            up_mid   : 570,
            up_right : 571,

            up2_left  : 577,
            up2_mid   : 578,
            up2_right : 591,

            mid_left  : 585,
            mid_right : 587,

            down_left  : 593,
            down_mid   : 570,
            down_right : 595,

            down2_left  : 601,
            down2_mid   : 578,
            down2_right : 603,
        }
    },

    /**
     * The tiles size in the forest tileset
     * @var {int}
     */
    TILE_SIZE : 32,

    /**
     * The map size ratio
     * @var {int}
     */
    MAP_SIZE_RATIO : 5,

    /**
     * The ratio for the deadzone of the camera
     * @var {float}
     */
    DEADZONE_RATIO : 0.4,

    /**
     * The default JSON used to create the Tiled tilemap
     * @var {{}}
     */
    defaultJson : {
        "type"         : "map",
        "version"      : 1,
        "width"        : null,
        "height"       : null,
        "tilewidth"    : null,
        "tileheight"   : null,
        "infinite"     : false,
        "renderorder"  : "left-up",
        "orientation"  : "orthogonal",
        "nextobjectid" : 1,
        "tiledversion" : "1.1.6",
        "tilesets"     : [
            {
                "columns"     : 8,
                "firstgid"    : 1,
                "image"       : "bosquet.png",
                "imageheight" : 6000,
                "imagewidth"  : 256,
                "margin"      : 0,
                "name"        : "tiles",
                "spacing"     : 0,
                "tilecount"   : 152,
                "tileheight"  : null,
                "tilewidth"   : null
            }
        ],
        "layers"       : [
            {
                "name"    : "Default name",
                "type"    : "tilelayer",
                "width"   : null,
                "height"  : null,
                "opacity" : 1,
                "visible" : true,
                "x"       : 0,
                "y"       : 0,
                "data"    : null,
            }
        ],
    }
}