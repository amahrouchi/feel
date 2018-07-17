<?php

/**
 * Generates the labyrinth
 * @param int $width    Labyrinth width
 * @param int $center   Labyrinth center coordinate
 * @param int $rngRatio The ratio used to create a new adjacent cell
 * @return array ['count' => INT, 'matrix' => ARRAY] <br>
 *                      Where 'count' is the number of cells created and may represent the complexity of the labyrinth <br>
 *                      And where 'matrix' is the labyrinth. Cells at 0 are walls, cells at 1 are the path
 */
function matrix(int $width, int $center, int $rngRatio)
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
            if (
                !isset($matrix[$nextCellX][$nextCellY])
                || $matrix[$nextCellX][$nextCellY] === 1
            ) {
                continue;
            }

            // Define if the path continues
            if ($matrix[$nextCellX][$nextCellY] !== 1) {
                $rng = rand(0, 99);
                if ($rng < $rngRatio) {
                    $matrix[$nextCellX][$nextCellY] = 1;

                    if ($nextCellX !== $x) {
                        $a                      = ($nextCellX + $x) / 2;
                        $matrix[$a][$nextCellY] = 1;
                    }

                    if ($nextCellY !== $y) {
                        $a                      = ($nextCellY + $y) / 2;
                        $matrix[$nextCellX][$a] = 1;
                    }

                    $nodes[] = [$nextCellX, $nextCellY];

                    $count++;
                }
            }
        }

        // All cells are unavailable => remove the node
        unset($nodes[$nodeKey]);
        $nodeKey++;
    }

    echo $count . PHP_EOL;

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
while ($count <= 250) { // 250 represents the number of cells created in the labyrinth (its complexity)
    $data   = matrix(41, 21, 45);
    $count  = $data['count'];
    $matrix = $data['matrix'];
}
displayMatrix($matrix);
