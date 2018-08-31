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

    WALL_TILES_PATTERNS : [
        /*
         * The size of the matrices here has to be
         * MAP_SIZE_RATIO_X * MAP_SIZE_RATIO_Y
         * 8*8 at the moment I am writing
         */

        // Bosquet 1
        [
            [329, 330, 331, 332, 333, 0, 0, 0],
            [337, 338, 339, 340, 341, 342, 343, 344],
            [345, 346, 347, 348, 349, 350, 351, 352],
            [353, 354, 355, 356, 357, 358, 359, 360],
            [361, 362, 363, 364, 365, 366, 367, 368],
            [369, 370, 371, 372, 373, 374, 375, 376],
            [377, 378, 379, 380, 381, 382, 383, 384],
            [385, 386, 387, 388, 389, 390, 391, 392],
        ],

        // Bosquet 2
        [
            [329, 330, 331, 332, 333, 0, 0, 0],
            [337, 338, 339, 340, 341, 342, 343, 344],
            [345, 346, 347, 348, 349, 350, 351, 352],
            [353, 354, 355, 356, 357, 358, 359, 360],
            [393, 394, 395, 396, 397, 398, 399, 400],
            [401, 402, 403, 404, 405, 406, 407, 408],
            [409, 410, 411, 412, 413, 414, 415, 416],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ],

        // Bosquet 3
        [
            [477, 478, 479, 480, 477, 478, 479, 480],
            [485, 486, 487, 488, 485, 486, 487, 488],
            [493, 494, 495, 496, 493, 494, 495, 496],
            [501, 502, 503, 504, 501, 502, 503, 504],
            [509, 510, 511, 512, 509, 510, 511, 512],
            [517, 518, 519, 520, 517, 518, 519, 520],
            [525, 526, 527, 528, 525, 526, 527, 528],
            [533, 534, 535, 536, 533, 534, 535, 536],
        ],

        // Bosquet 3
        [
            [0, 217, 218, 219, 220, 221, 0, 0],
            [0, 225, 226, 227, 228, 229, 0, 0],
            [0, 233, 234, 235, 236, 237, 238, 0],
            [0, 241, 242, 243, 244, 245, 246, 0],
            [0, 249, 250, 251, 252, 253, 254, 0],
            [0, 257, 258, 259, 260, 261, 0, 0],
            [0, 265, 266, 267, 268, 269, 0, 0],
            [0,0, 0, 0, 0, 0, 0, 0],
        ],

        // Bosquet 3
        [
            [0, 0, 420, 421, 422, 423, 424, 0],
            [0, 0, 428, 429, 430, 431, 432, 0],
            [0, 0, 436, 437, 438, 439, 440, 0],
            [0, 0, 444, 445, 446, 447, 448, 0],
            [0, 0, 452, 453, 454, 455, 456, 0],
            [0, 0, 460, 461, 462, 463, 464, 0],
            [0, 0, 468, 469, 470, 471, 472, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ]
    ],

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