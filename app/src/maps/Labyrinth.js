import LabyrinthConfig from '../config/labyrinth';

/**
 * Class handling the generation of the labyrinth matrix
 */
export default class Labyrinth {

    /**
     * The Labyrinth class constructor
     */
    constructor() {
        this._matrix = null
    }

    /**
     * The matrix getter
     * @returns {null|*}
     */
    get matrix() {
        return this._matrix;
    }

    /**
     * Generates a complex labyrinth
     * @param {int} width      Labyrinth width
     * @param {int} center     Labyrinth center coordinate
     * @param {int} pathRatio  The ratio used to create a new adjacent cell
     * @param {int} loopRatio  The ratio used to create a loop in the labyrinth
     * @param {int} complexity The labyrinth complexity (the number of cells created in the labyrinth)
     * @returns {{}}
     */
    generate(width, center, pathRatio, loopRatio, complexity) {
        let count  = 0;
        let matrix = [];
        while (count <= complexity) {
            let data = this._randomLabyrinth(width, center, pathRatio, loopRatio);
            count    = data.count;
            matrix   = data.matrix;
        }
        this._matrix = matrix;

        return this._generateTilemapJSON(width);
    }

    /**
     * Generated the JSON used to build the Tiled tilemap
     * @return {{}}
     */
    _generateTilemapJSON(size) {

        let tilemap    = this._initTilemapJSON(size);
        let groundData = tilemap.layers[0].data;
        let wallsData  = tilemap.layers[1].data;

        let y = 0;
        for (let line of this._matrix) {
            let x = 0;
            for (let val of line) {

                groundData.push(LabyrinthConfig.GROUND_TILE_INDEX);
                wallsData.push(
                    val === 0 ? LabyrinthConfig.WALL_TILE_INDEX : 0
                );

                x++;
            }
            y++;
        }

        return tilemap;
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
     * Generates a labyrinth
     * @param {int} width     Labyrinth width
     * @param {int} center    Labyrinth center coordinate
     * @param {int} pathRatio The ratio used to create a new adjacent cell
     * @param {int} loopRatio The ratio used to create a loop in the labyrinth
     * @returns {{count: number, matrix: []}}
     * @private
     */
    _randomLabyrinth(width, center, pathRatio, loopRatio) {

        // Init the labyrinth
        let matrix = this._initMatrix(width, center);

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
     * @param {int} width
     * @param {int} center
     * @returns {[]}
     * @private
     */
    _initMatrix(width, center) {
        let matrix                 = this._emptyMatrix(width);
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
     * @param width
     * @returns {Array}
     * @private
     */
    _emptyMatrix(width) {
        let matrix = [];
        for (let i = 0; i < width; i++) {
            let line = Array(width).fill(0, 0);
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


    /**
     * Initializes the tilemap JSON
     * @param {int} size
     * @return {{}}
     * @private
     */
    _initTilemapJSON(size) {
        let tilemap                    = LabyrinthConfig.defaultJson;
        tilemap.width                  = size;
        tilemap.height                 = size;
        tilemap.tilewidth              = LabyrinthConfig.TILE_SIZE;
        tilemap.tileheight             = LabyrinthConfig.TILE_SIZE;
        tilemap.tilesets[0].tilewidth  = LabyrinthConfig.TILE_SIZE;
        tilemap.tilesets[0].tileheight = LabyrinthConfig.TILE_SIZE;

        let groundLayer = this._createLayer('Ground', tilemap.layers[0], size);
        let wallsLayer  = this._createLayer('Walls', tilemap.layers[0], size);

        tilemap.layers = [];
        tilemap.layers.push(groundLayer);
        tilemap.layers.push(wallsLayer);

        return tilemap;
    }

    /**
     * Creates a layer for the Tiled tilemap
     * @param {string} name
     * @param {{}} defaultLayer
     * @param {int} size
     * @returns {*}
     * @private
     */
    _createLayer(name, defaultLayer, size) {
        let layer    = Object.assign({}, defaultLayer);
        layer.name   = name;
        layer.width  = size;
        layer.height = size;
        layer.data   = [];

        return layer;
    }

}