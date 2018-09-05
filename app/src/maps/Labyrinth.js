import LabyrinthConfig from '../config/labyrinth';
import Minimap from "./Minimap";

/**
 * Class handling the generation of the labyrinth matrix
 */
export default class Labyrinth {

    /**
     * The Labyrinth class constructor
     * @param {AbstractScene} scene
     */
    constructor(scene) {
        this._scene  = scene;
        this._matrix = null;
        this._minimap = null;
    }

    /**
     * The matrix getter
     * @returns {null|*}
     */
    get matrix() {
        return this._matrix;
    }

    /**
     * Gets the minimap object
     * @return {Minimap}
     */
    get minimap() {
        return this._minimap;
    }


    /**
     * Generates a complex labyrinth
     * @param {int} size       Labyrinth width
     * @param {int} center     Labyrinth center coordinate
     * @param {int} pathRatio  The ratio used to create a new adjacent cell
     * @param {int} loopRatio  The ratio used to create a loop in the labyrinth
     * @param {int} complexity The labyrinth complexity (the number of cells created in the labyrinth)
     * @returns {{}}
     */
    generate(size, center, pathRatio, loopRatio, complexity) {
        let count  = 0;
        let matrix = [];
        while (count <= complexity) {
            let data = this._randomLabyrinth(size, center, pathRatio, loopRatio);
            count    = data.count;
            matrix   = data.matrix;
        }
        this._matrix = matrix;

        return this._generateTilemapJSON(size);
    }

    /**
     * Generates and display the drawMinimap
     * @return {void}
     */
    drawMinimap() {
        this._minimap = new Minimap(this._scene, this._matrix);
        this._minimap.generate();
    }

    /**
     * Displays the labyrinth in the console
     * @return {void}
     */
    consoleDisplay() {
        // Display the labyrinth in the console
        for (let line of this._matrix) {
            let line2 = [];
            for (let val of line) {
                line2.push(
                    val === 1 ? val : ' '
                );
            }
            console.log(...line2);
        }
    }

    /**
     * Generated the JSON used to build the Tiled tilemap
     * @return {{}}
     */
    _generateTilemapJSON(size) {

        // Double the size of the map
        let realSizeX = size * LabyrinthConfig.MAP_SIZE_RATIO_X;
        let realSizeY = size * LabyrinthConfig.MAP_SIZE_RATIO_Y;

        // Inits the tilemap JSON
        let tilemap = this._initTilemapJSON(realSizeX, realSizeY);

        // Init layers data
        let wallMatrix           = [];
        let wallDecorationMatrix = [];
        let groundMatrix         = [];
        for (let i = 0; i < realSizeY; i++) {

            let groundLine = Array(realSizeX).fill(LabyrinthConfig.MAPS.BOSQUET.GROUND_TILE_INDEX, 0);
            groundMatrix.push(groundLine);

            let wallsCollisionLine = Array(realSizeX).fill(0, 0);
            wallDecorationMatrix.push(wallsCollisionLine);

            let wallsLine = Array(realSizeX).fill(0, 0);
            wallMatrix.push(wallsLine);
        }

        // Generate walls positions
        let y = 0;
        for (let line of this._matrix) {
            let x = 0;
            for (let val of line) {

                if (val === 0) {
                    let currX = x * LabyrinthConfig.MAP_SIZE_RATIO_X;
                    let currY = y * LabyrinthConfig.MAP_SIZE_RATIO_Y;

                    // Walls collision
                    for (let j = 0; j < LabyrinthConfig.MAP_SIZE_RATIO_X; j++) {
                        for (let k = 0; k < LabyrinthConfig.MAP_SIZE_RATIO_Y; k++) {
                            let randomCollisionTile                    = LabyrinthConfig.MAPS.BOSQUET.WALL_COLLISION_TILES[Math.floor(Math.random() * LabyrinthConfig.MAPS.BOSQUET.WALL_COLLISION_TILES.length)];
                            wallDecorationMatrix[currY + k][currX + j] = randomCollisionTile;
                        }
                    }

                    // Display random wall patterns
                    let randomPattern = LabyrinthConfig.MAPS.BOSQUET.WALL_TILES_PATTERNS[Math.floor(Math.random() * LabyrinthConfig.MAPS.BOSQUET.WALL_TILES_PATTERNS.length)];
                    for (let j = 0; j < LabyrinthConfig.MAP_SIZE_RATIO_X; j++) {
                        for (let k = 0; k < LabyrinthConfig.MAP_SIZE_RATIO_Y; k++) {
                            wallMatrix[currY + k][currX + j] = randomPattern[k][j];
                        }
                    }
                }
                x++;
            }
            y++;
        }

        // Flatten the layers data
        tilemap.layers[0].data = this._flattenMatrix(groundMatrix);
        tilemap.layers[1].data = this._flattenMatrix(wallDecorationMatrix);
        tilemap.layers[2].data = this._flattenMatrix(wallMatrix);

        return tilemap;
    }

    /**
     * Initializes the tilemap JSON
     * @param {int} sizeX
     * @param {int} sizeY
     * @return {{}}
     * @private
     */
    _initTilemapJSON(sizeX, sizeY) {
        let tilemap                    = LabyrinthConfig.defaultJson;
        tilemap.width                  = sizeX;
        tilemap.height                 = sizeY;
        tilemap.tilewidth              = LabyrinthConfig.TILE_SIZE;
        tilemap.tileheight             = LabyrinthConfig.TILE_SIZE;
        tilemap.tilesets[0].tilewidth  = LabyrinthConfig.TILE_SIZE;
        tilemap.tilesets[0].tileheight = LabyrinthConfig.TILE_SIZE;

        let groundLayer          = this._createLayer('Ground', tilemap.layers[0], sizeX, sizeY);
        let wallsDecorationLayer = this._createLayer('WallsDecoration', tilemap.layers[0], sizeX, sizeY);
        let wallsLayer           = this._createLayer('Walls', tilemap.layers[0], sizeX, sizeY);

        tilemap.layers = [];
        tilemap.layers.push(groundLayer);
        tilemap.layers.push(wallsDecorationLayer);
        tilemap.layers.push(wallsLayer);

        return tilemap;
    }

    /**
     * Creates a layer for the Tiled tilemap
     * @param {string} name
     * @param {{}} defaultLayer
     * @param {int} sizeX
     * @param {int} sizeY
     * @returns {*}
     * @private
     */
    _createLayer(name, defaultLayer, sizeX, sizeY) {
        let layer    = Object.assign({}, defaultLayer);
        layer.name   = name;
        layer.width  = sizeX;
        layer.height = sizeY;
        layer.data   = [];

        return layer;
    }

    /**
     * Flattens a matrix to a simple array
     * @param matrix
     * @returns {Array}
     * @private
     */
    _flattenMatrix(matrix) {
        let result = [];
        for (let line of matrix) {
            result.push(...line);
        }
        return result;
    }

    /**
     * Generates a labyrinth
     * @param {int} size     Labyrinth width
     * @param {int} center    Labyrinth center coordinate
     * @param {int} pathRatio The ratio used to create a new adjacent cell
     * @param {int} loopRatio The ratio used to create a loop in the labyrinth
     * @returns {{count: number, matrix: []}}
     * @private
     */
    _randomLabyrinth(size, center, pathRatio, loopRatio) {

        // Init the labyrinth
        let matrix = this._initMatrix(size, center);

        // Init the nodes
        let nodes = this._initNodes(center);

        let nodeKey = 0;
        let count   = 0;
        while (typeof(nodes[nodeKey]) !== 'undefined') {
            // Init current node data
            let node = nodes[nodeKey];
            let x    = node[0];
            let y    = node[1];

            // Coordinates for cell around the current one
            let around = [
                [x, y + 2],
                [x, y - 2],
                [x + 2, y],
                [x - 2, y],
            ];

            // Iterate on cells around
            for (let nextCell of around) {

                // Cell coords
                let nextCellX = nextCell[0];
                let nextCellY = nextCell[1];

                // Unavailable cell
                if (
                    typeof(matrix[nextCellX]) === 'undefined'
                    || typeof(matrix[nextCellX][nextCellY]) === 'undefined'
                ) {
                    continue;
                }

                // Loop creation
                if (matrix[nextCellX][nextCellY] === 1) {
                    let rng = Math.random() * 100;
                    if (rng >= loopRatio) {
                        continue;
                    }
                }

                // Define if the path continues
                let rng = Math.random() * 100;
                if (rng < pathRatio) {
                    let newNode = false;
                    if (matrix[nextCellX][nextCellY] === 0) {
                        matrix[nextCellX][nextCellY] = 1;
                        newNode                      = true;
                    }

                    // Cell between the node and the new created cell
                    // TODO: factorize
                    if (nextCellX !== x) {
                        let xBetween                = (nextCellX + x) / 2;
                        matrix[xBetween][nextCellY] = 1;
                    }
                    if (nextCellY !== y) {
                        let yBetween                = (nextCellY + y) / 2;
                        matrix[nextCellX][yBetween] = 1;
                    }

                    // Add a new node at the end of the nodes array
                    if (newNode) {
                        nodes.push([nextCellX, nextCellY]);
                    }

                    count++;
                }
            }

            // Remove the current node
            delete nodes[nodeKey];

            nodeKey++;
        }

        return {
            'count'  : count,
            'matrix' : matrix
        };
    }

    /**
     * Initializes the matrix
     * @param {int} size
     * @param {int} center
     * @returns {[]}
     * @private
     */
    _initMatrix(size, center) {
        let matrix                 = this._emptyMatrix(size);
        matrix[center][center]     = 1;
        matrix[center][center + 1] = 1;
        matrix[center][center + 2] = 1;
        matrix[center][center - 1] = 1;
        matrix[center][center - 2] = 1;
        matrix[center + 1][center] = 1;
        matrix[center + 2][center] = 1;
        matrix[center - 1][center] = 1;
        matrix[center - 2][center] = 1;

        return matrix;
    }

    /**
     * Generates an empty matrix
     * @param size
     * @returns {Array}
     * @private
     */
    _emptyMatrix(size) {
        let matrix = [];
        for (let i = 0; i < size; i++) {
            let line = Array(size).fill(0, 0);
            matrix.push(line);
        }

        return matrix;
    }

    /**
     * Initializes the nodes
     * @param {int} center
     * @returns {Array}
     * @private
     */
    _initNodes(center) {
        return [
            [center, center + 2],
            [center, center - 2],
            [center + 2, center],
            [center - 2, center],
        ];
    }

}