<?php

/**
 * Generates the labyrinth
 * @param int $width     Labyrinth width
 * @param int $center    Labyrinth center coordinate
 * @param int $pathRatio The ratio used to create a new adjacent cell
 * @param int $loopRatio The ratio used to create a loop in the labyrinth
 * @return array ['count' => INT, 'matrix' => ARRAY] <br>
 *                       Where 'count' is the number of cells created and may represent the complexity of the labyrinth <br>
 *                       And where 'matrix' is the labyrinth. Cells at 0 are walls, cells at 1 are the path
 */
function matrix(int $width, int $center, int $pathRatio, int $loopRatio)
{
    // Init the labyrinth
    $line                         = array_fill(0, $width, 0);
    $matrix                       = array_fill(0, $width, $line);
    $matrix[$center][$center]     = 1;
    $matrix[$center][$center + 1] = 1;
    $matrix[$center][$center + 2] = 1;
    $matrix[$center][$center - 1] = 1;
    $matrix[$center][$center - 2] = 1;
    $matrix[$center + 1][$center] = 1;
    $matrix[$center + 2][$center] = 1;
    $matrix[$center - 1][$center] = 1;
    $matrix[$center - 2][$center] = 1;

    // Init the nodes
    $nodes = [
        [$center, $center + 2],
        [$center, $center - 2],
        [$center + 2, $center],
        [$center - 2, $center],
    ];

    $nodeKey = 0;
    $count   = 0;
    while (isset($nodes[$nodeKey])) {
        // Init current node data
        $node = $nodes[$nodeKey];
        $x    = $node[0];
        $y    = $node[1];

        // Coordinates for cell around the current one
        $around = [
            [$x, $y + 2], // ponderer en fonction de la direction (50% tout droit, 25% virage)
            [$x, $y - 2],
            [$x + 2, $y],
            [$x - 2, $y],
        ];

        // Iterate on cells around
        foreach ($around as $nextCell) {
            // Cell coords
            $nextCellX = $nextCell[0];
            $nextCellY = $nextCell[1];

            // Unavailable cell
            if (!isset($matrix[$nextCellX][$nextCellY])) {
                continue;
            }

            // Loop creation
            if ($matrix[$nextCellX][$nextCellY] === 1) {
                $rng = rand(0, 99);
                if ($rng >= $loopRatio) {
                    continue;
                }
            }

            // Define if the path continues
            $rng = rand(0, 99);
            if ($rng < $pathRatio) {
                $newNode = false;
                if ($matrix[$nextCellX][$nextCellY] === 0) {
                    $matrix[$nextCellX][$nextCellY] = 1;
                    $newNode                        = true;
                }

                // Cell between the node and the new created cell
                // TODO: factorize
                if ($nextCellX !== $x) {
                    $xBetween                      = ($nextCellX + $x) / 2;
                    $matrix[$xBetween][$nextCellY] = 1;
                }
                if ($nextCellY !== $y) {
                    $yBetween                      = ($nextCellY + $y) / 2;
                    $matrix[$nextCellX][$yBetween] = 1;
                }

                // Add a new node at the end of the nodes array
                if ($newNode) {
                    $nodes[] = [$nextCellX, $nextCellY];
                }

                $count++;
            }
        }

        // Remove the current node
        unset($nodes[$nodeKey]);

        $nodeKey++;
    }

    //echo $count . PHP_EOL;

    return ['count' => $count, 'matrix' => $matrix];
}

/**
 * Displays the labyrinth in a console
 * @param array $matrix
 * @return void
 */
function displayMatrix(array $matrix)
{
    foreach ($matrix as $line) {
        foreach ($line as $cell) {
            echo $cell === 1 ? "\e[47m \e[49m" : "\e[44m \e[49m";
        }
        echo PHP_EOL;
    }
}

// Generate a labyrinth complex enough to be playable
$count  = 0;
$matrix = [];
while ($count <= 290) { // 250 represents the number of cells created in the labyrinth (its complexity)
    $data   = matrix(41, 21, 45, 10);
    $count  = $data['count'];
    $matrix = $data['matrix'];
}
displayMatrix($matrix);
