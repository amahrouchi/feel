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
        let realSize = size * LabyrinthConfig.MAP_SIZE_RATIO;

        // Inits the tilemap JSON
        let tilemap = this._initTilemapJSON(realSize);

        // Init layers data
        let wallMatrix   = [];
        let groundMatrix = [];
        for (let i = 0; i < realSize; i++) {

            let groundLine = Array(realSize).fill(LabyrinthConfig.GROUND_TILE_INDEX, 0);
            groundMatrix.push(groundLine);

            let wallsLine = Array(realSize).fill(0, 0);
            wallMatrix.push(wallsLine);
        }

        // Generate walls positions
        // TODO: change this algorithm to use the new tiles to build the labyrinth walls
        let y = 0;
        for (let line of this._matrix) {
            let x = 0;
            for (let val of line) {

                // Flags
                let topIsPath   = typeof(this._matrix[y - 1]) !== 'undefined' && typeof(this._matrix[y - 1][x]) !== 'undefined' && this._matrix[y - 1][x] === 1;
                let downIsPath  = typeof(this._matrix[y + 1]) !== 'undefined' && typeof(this._matrix[y + 1][x]) !== 'undefined' && this._matrix[y + 1][x] === 1;
                let leftIsPath  = typeof(this._matrix[y]) !== 'undefined' && typeof(this._matrix[y][x - 1]) !== 'undefined' && this._matrix[y][x - 1] === 1;
                let rightIsPath = typeof(this._matrix[y]) !== 'undefined' && typeof(this._matrix[y][x + 1]) !== 'undefined' && this._matrix[y][x + 1] === 1;


                if (val === 0) {
                    let currX = x * LabyrinthConfig.MAP_SIZE_RATIO;
                    let currY = y * LabyrinthConfig.MAP_SIZE_RATIO;

                    for (let j = 0; j < LabyrinthConfig.MAP_SIZE_RATIO; j++) {
                        for (let k = 0; k < LabyrinthConfig.MAP_SIZE_RATIO; k++) {
                            // wallMatrix[currY + k][currX + j] = LabyrinthConfig.WALL_TILE_INDEX;

                            let xTilePosition = currX + j;
                            let yTilePosition = currY + k;
                            let lastIndex     = LabyrinthConfig.MAP_SIZE_RATIO - 1;

                            // Corners
                            wallMatrix[yTilePosition][xTilePosition] = LabyrinthConfig.WALL_TILES.bosquet.inner;

                            if (topIsPath) {
                                if (k === 0) {
                                    // let secondLineAvailable = typeof(wallMatrix[yTilePosition + 1]) !== 'undefined' && typeof(wallMatrix[yTilePosition + 1][xTilePosition]) !== 'undefined';

                                    wallMatrix[yTilePosition][xTilePosition] = LabyrinthConfig.WALL_TILES.bosquet.up_mid;
                                    // if (secondLineAvailable) wallMatrix[yTilePosition + 1][xTilePosition] = LabyrinthConfig.WALL_TILES.bosquet.up2_mid;

                                    if (leftIsPath && j === 0) {
                                        wallMatrix[yTilePosition][xTilePosition] = LabyrinthConfig.WALL_TILES.bosquet.up_left;
                                        // if (secondLineAvailable) wallMatrix[yTilePosition + 1][xTilePosition] = LabyrinthConfig.WALL_TILES.bosquet.up2_left;
                                    } else if (rightIsPath && j === lastIndex) {
                                        wallMatrix[yTilePosition][xTilePosition] = LabyrinthConfig.WALL_TILES.bosquet.up_right;
                                        // if (secondLineAvailable) wallMatrix[yTilePosition + 1][xTilePosition] = LabyrinthConfig.WALL_TILES.bosquet.up2_right;
                                    }
                                }
                            }

                            if (downIsPath) {
                                if (k === lastIndex) {
                                    wallMatrix[yTilePosition][xTilePosition] = LabyrinthConfig.WALL_TILES.bosquet.down2_mid;
                                    if (leftIsPath && j === 0) {
                                        wallMatrix[yTilePosition][xTilePosition] = LabyrinthConfig.WALL_TILES.bosquet.down2_left;
                                    } else if (rightIsPath && j === lastIndex) {
                                        wallMatrix[yTilePosition][xTilePosition] = LabyrinthConfig.WALL_TILES.bosquet.down2_right;
                                    }
                                }
                            }

                            if (leftIsPath) {
                                if (j === 0) {
                                    if (wallMatrix[yTilePosition][xTilePosition] === LabyrinthConfig.WALL_TILES.bosquet.inner) {
                                        wallMatrix[yTilePosition][xTilePosition] = LabyrinthConfig.WALL_TILES.bosquet.mid_left;
                                    }
                                }
                            }

                            if (rightIsPath) {
                                if (j === lastIndex) {
                                    if (wallMatrix[yTilePosition][xTilePosition] === LabyrinthConfig.WALL_TILES.bosquet.inner) {
                                        wallMatrix[yTilePosition][xTilePosition] = LabyrinthConfig.WALL_TILES.bosquet.mid_right;
                                    }
                                }
                            }

                            // if (xTilePosition === 0) {
                            //     if (yTilePosition === 0 && topIsPath && leftIsPath) {
                            //         wallMatrix[yTilePosition][xTilePosition] = LabyrinthConfig.WALL_TILES.bosquet.up_left;
                            //     } else if (yTilePosition === lastIndex && topIsPath && leftIsPath) {
                            //         wallMatrix[yTilePosition][xTilePosition] = LabyrinthConfig.WALL_TILES.bosquet.up_right;
                            //     } else if (topIsPath) {
                            //         wallMatrix[yTilePosition][xTilePosition] = LabyrinthConfig.WALL_TILES.bosquet.up_mid;
                            //     }
                            // }

                        }
                    }
                }
                x++;
            }
            y++;
        }

        // Flatten the layers data
        tilemap.layers[0].data = this._flattenMatrix(groundMatrix);
        tilemap.layers[1].data = this._flattenMatrix(wallMatrix);

        return tilemap;
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