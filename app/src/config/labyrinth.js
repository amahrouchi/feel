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

    /**
     * The tiles size in the forest tileset
     * @var {int}
     */
    TILE_SIZE : 32,

    /**
     * The map size  X ratio
     * @var {int}
     */
    MAP_SIZE_RATIO_X : 8,

    /**
     * The map size Y ratio
     * @var {int}
     */
    MAP_SIZE_RATIO_Y : 8    ,

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